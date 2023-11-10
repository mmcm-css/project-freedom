const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  tokens: [{ type: String }],
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.verifyPassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const SECRET_KEY =
  "Th!Si$aS3cR3Tk3y!BycSsMmCmLibeRateDdEvs.HEHEHE2023JusticeForAaronSwartz!WHATTHEFUCK";

// Session Token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ userId: this._id }, SECRET_KEY);
  this.tokens.push(token); // Store the token in the tokens array (Multiple Device)
  return token;
};

const mapuanModel = mongoose.model("mapuan", userSchema);

module.exports = mapuanModel;

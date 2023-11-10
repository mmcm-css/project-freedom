const bcrypt = require("bcrypt");
const User = require("../models/mapuanModel");

const mapuanController = {
  register: async (req, res) => {
    try {
      const { username, email, password, isAdmin } = req.body;
      const newUser = new User({ username, email, password, isAdmin });
      const savedUser = await newUser.save();

      res.status(201).send("Hello, registered mapuan!");
    } catch (error) {
      console.error("Error in user registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  login: async (req, res) => {
    try {
      const { identifier, password } = req.body;

      // Find the user by email or username
      const user = await User.findOne({
        $or: [{ email: identifier }, { username: identifier }],
      });

      // Check user exists and the password is correct
      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: "Login Successful. Welcome Mapuan!" });
      } else {
        res
          .status(401)
          .json({
            error:
              "Oh no. You have entered an invalid credentials. Try again (or not if you are an outsider).",
          });
      }
    } catch (error) {
      console.error("Error in user login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = mapuanController;

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
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });

      // Check user exists and the password is correct
      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: "Welcome, Mapuan! Login successful!" });
      } else {
        res
          .status(401)
          .json({ error: "Oh no, Mapuan. Invalid email or password" });
      }
    } catch (error) {
      console.error("Error in user login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = mapuanController;

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
        // Generate a new token and store it
        const token = user.generateAuthToken();
        await user.save();

        res
          .status(200)
          .json({ message: "Login Successful. Welcome Mapuan!", token });
      } else {
        res.status(401).json({
          error: "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error in user login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  logout: async (req, res) => {
    try {
      if (!req.user || !req.token) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const user = await User.findById(req.user.userId);

      // Making sure the user doesn't really spam the logout button
      if (!user.tokens.includes(req.token)) {
        return res.status(401).json({ error: "Invalid token" });
      }
      user.tokens = user.tokens.filter((token) => token !== req.token);
      await user.save();

      res.status(200).json({ message: "Goodbye, Mapuan!" });
    } catch (error) {
      console.error("Error in user logout:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = mapuanController;

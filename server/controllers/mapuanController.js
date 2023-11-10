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
};

module.exports = mapuanController;

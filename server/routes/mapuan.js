const express = require("express");
const router = express.Router();
const mapuanAccountController = require("../controllers/mapuanController");

router.post("/register", mapuanAccountController.register);

module.exports = router;

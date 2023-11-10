const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const router = express.Router();
const mapuanAccountController = require("../controllers/mapuanController");

router.post("/register", mapuanAccountController.register);
router.post("/login", mapuanAccountController.login);

// Secret Key XD (4 thousand trillion trillion trillion trillion years to crack this. Unless we fuck up.)
const SECRET_KEY =
  "Th!Si$aS3cR3Tk3y!BycSsMmCmLibeRateDdEvs.HEHEHE2023JusticeForAaronSwartz!WHATTHEFUCK";

// Authentication Middleware
const authenticate = jwt({
  secret: SECRET_KEY,
  algorithms: ["HS256"],
});

// Logout Route
router.post("/logout", authenticate, mapuanAccountController.logout);

// Protected Route (When the user is authenticated, this is accessible)
router.get("/protected", authenticate, (req, res) => {
  res.json({ message: "This route is protected!" });
});

router.use((req, res, next) => {
  console.log("Authorization header:", req.headers.authorization);
  console.log(
    "Decoded token:",
    jwt.decode(req.headers.authorization.replace("Bearer ", ""), SECRET_KEY)
  );
  console.log("Authenticated user:", req.user);
  next();
});

module.exports = router;

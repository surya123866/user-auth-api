const express = require("express");

const {
  register,
  login,
  getUserDetails,
} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", protect, getUserDetails);

module.exports = router;

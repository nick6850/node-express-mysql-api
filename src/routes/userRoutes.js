// src/routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const validateFileUpload = require("../middlewares/fileValidationMiddleware");
const validateUserRegistration = require("../middlewares/userValidationMiddleware");
const upload = require("../config/multerConfig");
const router = express.Router();

// Routes
router.post(
  "/register",
  upload.single("file"),
  validateFileUpload,
  validateUserRegistration,
  userController.registerUser
);

router.post("/login", userController.loginUser);

module.exports = router;

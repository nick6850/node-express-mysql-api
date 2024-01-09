// src/middlewares/userValidationMiddleware.js
const validator = require("validator");
const User = require("../models/User");

const validateUserRegistration = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  console.log("Request Body:", req.body);

  // Check if email is valid
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email address format" });
  }

  // Check if password is strong enough
  const isStrongPassword = validator.isStrongPassword(password);

  if (!isStrongPassword) {
    return res
      .status(400)
      .json({ error: "Weak password. Please choose a stronger password." });
  }

  // Check if first name and last name only contain letters
  if (/[^a-zA-Z]/.test(firstName) || /[^a-zA-Z]/.test(lastName)) {
    return res
      .status(400)
      .json({ error: "First name and last name should only contain letters" });
  }

  // Check if the email is already in use
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ error: "Email is already in use" });
  }

  // Validation passed
  next();
};

module.exports = validateUserRegistration;

// src/middlewares/fileValidationMiddleware.js
const validator = require("validator");

const validateFileUpload = (req, res, next) => {
  // Validate file extension and size
  const allowedExtensions = ["jpg", "png"];
  const maxFileSizeInMB = 10;

  // Check if file is uploaded
  if (!req.file || !req.file.originalname) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileExtension = req.file.originalname.split(".").pop().toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    return res.status(400).json({
      error:
        "Invalid file extension. Allowed extensions: " +
        allowedExtensions.join(", "),
    });
  }

  if (req.file.size > maxFileSizeInMB * 1024 * 1024) {
    return res.status(400).json({
      error:
        "File size exceeds the maximum allowed size of " +
        maxFileSizeInMB +
        " MB",
    });
  }

  // Validation passed
  next();
};

module.exports = validateFileUpload;

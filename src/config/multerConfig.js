// src/config/multerConfig.js
const multer = require("multer");

// Set storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    // Set the filename for uploaded files
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize multer instance
const upload = multer({ storage: storage });

module.exports = upload;

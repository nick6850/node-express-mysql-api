// src/index.js
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const profileRouter = require("./routes/profileRoutes");
const path = require("path");
const authMiddleware = require("./middlewares/authMiddleware");
const profileController = require("./controllers/profileController");

// Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve static HTML file for testing (you can also use Postman or Insomnia)
app.use("/", express.static(path.join(__dirname, "public")));

// Routes
app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/profiles", authMiddleware, profileController.getAllProfiles);

// Synchronize Database
db.sync({ force: false })
  .then(() => {
    console.log("Database has been synchronized successfully");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

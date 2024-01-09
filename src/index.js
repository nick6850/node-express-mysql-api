// src/index.js
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const path = require("path");

// Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Serve static HTML file
app.use("/", express.static(path.join(__dirname, "public")));

// Routes
app.use("/user", userRouter);

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

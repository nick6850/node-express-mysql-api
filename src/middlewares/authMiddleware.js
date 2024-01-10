// src/middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get the token from the cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Missing token" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
      }

      req.user = decoded;

      next();
    });
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = authMiddleware;

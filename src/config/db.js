// src/config/db.js
const { Sequelize } = require("sequelize");

// Database configuration
const sequelize = new Sequelize("db_test", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;

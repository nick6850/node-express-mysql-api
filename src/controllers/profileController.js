// src/controllers/profileController.js
const User = require("../models/User");

const editProfile = async (req, res) => {
  try {
    const userIdFromToken = req.user.userId;
    const userIdFromParams = parseInt(req.params.userId);
    const userEmailFromToken = req.user.email;

    // Check if the requested profile ID matches the ID from the token or user is an admin
    if (
      userIdFromToken !== userIdFromParams &&
      userEmailFromToken !== "admin@admin.com"
    ) {
      return res
        .status(403)
        .json({ error: "You can only edit your own profile" });
    }

    // Find the user by ID
    const user = await User.findByPk(userIdFromParams);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user profile
    const updatedUser = await user.update(req.body);

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error editing profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProfileById = async (req, res) => {
  const userIdFromToken = req.user.userId;
  const userIdFromParams = parseInt(req.params.userId);
  const userEmailFromToken = req.user.email;

  try {
    // Check if the requested profile ID matches the ID from the token or user is an admin
    if (
      userIdFromToken !== userIdFromParams &&
      userEmailFromToken !== "admin@admin.com"
    ) {
      return res.status(403).json({
        error: "You can only see the sensitive data of your own profile",
      });
    }

    // Find the user by ID
    const user = await User.findByPk(userIdFromParams);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return user data
    res.status(200).json({ message: "User data retrieved successfully", user });
  } catch (error) {
    console.error("Error getting user by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllProfiles = async (req, res) => {
  const userEmailFromToken = req.user.email;

  try {
    // Check if the user is an admin
    if (userEmailFromToken !== "admin@admin.com") {
      return res.status(403).json({
        error: "Only admin can access all profiles",
      });
    }

    const { page = 1 } = req.query;
    const pageSize = 10;

    // Calculate offset based on the page number and page size
    const offset = (page - 1) * pageSize;

    // Fetch profiles with pagination
    const profiles = await User.findAll({
      limit: parseInt(pageSize),
      offset,
      order: [["createdAt", "DESC"]],
    });

    // Check if there are no profiles on the requested page
    if (profiles.length === 0) {
      return res
        .status(404)
        .json({ message: "No profiles found on this page" });
    }

    res
      .status(200)
      .json({ message: "Profiles retrieved successfully", profiles });
  } catch (error) {
    console.error("Error fetching all profiles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  editProfile,
  getProfileById,
  getAllProfiles,
};

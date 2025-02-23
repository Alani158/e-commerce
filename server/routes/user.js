import express from "express";
import {
  getUsers,
  getUserById,
  updateUserName,
  updateUserPassword,
  updateUserProfile,
  createUser,
} from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js"; // Middleware for authentication

const protect = authenticateUser;
const router = express.Router();

// Get all users (admin use case)
router.get("/", getUsers);
router.post("/", createUser);
// Get logged-in user profile (requires authentication)
router.get("/profile", protect, getUserById);
// Update user name (check if name exists first)
router.put("/name", protect, updateUserName);

// Update user password
router.put("/password", protect, updateUserPassword);
// cupdate profile by id
router.put("/update", protect, updateUserProfile);

export default router;

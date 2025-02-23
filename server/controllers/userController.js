import { pool } from "../config/db.js";
import bcrypt from "bcryptjs";

// Get all users (for admin)
const getUsers = async (req, res) => {
  try {
    const [users] = await pool.query("SELECT id, name, email FROM users");
    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Get user by ID (from token)
const getUserById = async (req, res) => {
  const userId = req.userId; // ✅ Correct
  // Extracted from JWT token
  try {
    const [users] = await pool.query(
      "SELECT name, email FROM users WHERE id = ?",
      [userId]
    );
    if (users.length > 0) {
      res.json(users[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Update user name (check if name exists first)
const updateUserName = async (req, res) => {
  const userId = req.user.id;
  const { name } = req.body;

  try {
    const [existingName] = await pool.query(
      "SELECT id FROM users WHERE name = ?",
      [name]
    );

    if (existingName.length > 0) {
      return res.status(400).json({ error: "Name already exists" });
    }

    await pool.query("UPDATE users SET name = ? WHERE id = ?", [name, userId]);
    res.json({ message: "Name updated successfully" });
  } catch (error) {
    console.error("Error updating name:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Update user password
const updateUserPassword = async (req, res) => {
  const userId = req.user.id;
  const { oldPassword, newPassword } = req.body;

  try {
    const [user] = await pool.query("SELECT password FROM users WHERE id = ?", [
      userId,
    ]);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user[0].password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query("UPDATE users SET password = ? WHERE id = ?", [
      hashedPassword,
      userId,
    ]);

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Database error" });
  }
};
const updateUserProfile = async (req, res) => {
  const { name, password } = req.body;
  const userId = req.userId; // Extract user ID from JWT token

  try {
    if (!name && !password) {
      return res.status(400).json({ error: "Nothing to update" });
    }

    // Check if name already exists
    if (name) {
      const [existingUser] = await pool.query(
        "SELECT id FROM users WHERE name = ?",
        [name]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ error: "Name already taken" });
      }
    }

    // Update password if provided
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Build update query dynamically
    let query = "UPDATE users SET ";
    let values = [];

    if (name) {
      query += "name = ?";
      values.push(name);
    }

    if (password) {
      if (name) query += ", "; // Add comma if updating both fields
      query += "password = ?";
      values.push(hashedPassword);
    }

    query += " WHERE id = ?";
    values.push(userId);

    await pool.query(query, values);

    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: "Database error" });
  }
};
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Database error" });
  }
};

export {
  getUsers,
  createUser,
  updateUserName,
  getUserById,
  updateUserPassword,
  updateUserProfile,
};

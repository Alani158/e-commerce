import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Alanicodes",
  database: process.env.DB_NAME || "ecommerce_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Named export

// Function to get all users
async function getUsers() {
  try {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}

// Function to create a new user
async function createUser(name, email, password) {
  try {
    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return { success: false, error: "User already exists" };
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return { success: true, userId: result.insertId };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: "Database error" };
  }
}

// Function to get user by email
async function getUserByEmail(email) {
  try {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    return users.length > 0 ? users[0] : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
//  function profile management to get all a users profile info  by id
async function getUserById(userId) {
  try {
    const [users] = await pool.query(
      "SELECT name, email, password FROM users WHERE id = ?",
      [userId]
    );

    if (users.length > 0) {
      return { success: true, user: users[0] };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return { success: false, error: "Database error" };
  }
}

export { pool, getUsers, createUser, getUserByEmail, getUserById };

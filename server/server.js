import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cartRoutes from "./routes/cart.js"; // Import cart routes
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json()); // Enable JSON body parsing

// Mount routes
app.use("/api/auth", authRoutes); // Handles login, signup, etc.
app.use("/api/users", userRoutes); // Handles user profile updates
app.use("/api/cart", cartRoutes); // Handles cart operations

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

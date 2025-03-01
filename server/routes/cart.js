import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authenticateUser, addToCart);
router.delete("/remove/:productId", authenticateUser, removeFromCart);
router.get("/", authenticateUser, getCart);

export default router;

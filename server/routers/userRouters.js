import express from "express";
import {
  register,
  login,
  fetchAllUsers,
} from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { userValidationSchema } from "../models/userValidationSchema.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", validate(userValidationSchema), register);
router.post("/login", login);

router.get("/users", authMiddleware, fetchAllUsers);
export default router;

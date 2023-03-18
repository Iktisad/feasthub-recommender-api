import express from "express";
import userRoutes from "../modules/users/users.module.js";
import dineinRoutes from "../modules/dinein/dinein.module.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/dinein", dineinRoutes);

export default router;
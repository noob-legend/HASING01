import express from "express";
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./routers/userRouters.js";
import env from "dotenv";
env.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

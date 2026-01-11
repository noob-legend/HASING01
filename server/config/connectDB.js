import env from "dotenv";
import mongoose from "mongoose";
env.config();
export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

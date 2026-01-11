import { connectDB } from "../config/connectDB.js";
import mongoose from "mongoose";

describe("Database Connection", () => {
  beforeAll(async () => {
    await connectDB();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("should connect to the database successfully", () => {
    const dbState = mongoose.connection.readyState;
    expect(dbState).toBe(1); // 1 means connected
  });
});

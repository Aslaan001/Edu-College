import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  pass: String,
  email: String,
});

export const User =
  mongoose.models.products || mongoose.model("products", userSchema);

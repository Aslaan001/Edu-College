import mongoose from "mongoose";
const collegeSchema = new mongoose.Schema({
  name: String,
  add: String,
  rating: String,
  category: String,
  link: String,
  state: String,
  number: String,
  email: String,
});

export const College =
  mongoose.models.colleges || mongoose.model("colleges", collegeSchema);

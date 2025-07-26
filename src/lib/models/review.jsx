import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
  CollegeName: String,
   review:String,
   userName:String,

});

export const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

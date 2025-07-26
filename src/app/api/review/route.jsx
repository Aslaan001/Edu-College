import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Review } from "@/lib/models/review";


export async function GET(request) {
  await mongoose.connect(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const college = searchParams.get("college");

  
  const data = college
    ? await Review.find({ CollegeName: college })
    : await Review.find({});

  return NextResponse.json({ message: data });
}

// adding review
export async function PUT(request) {

  try{
  await mongoose.connect(process.env.DATABASE_URL);

   const body=await request.json();
    const { CollegeName, review, userName } = body;
    const reviewData = new Review({
      CollegeName,
      review,
      userName
    });
    await reviewData.save();
 
   
  
  return NextResponse.json({ Staus:"200"});

  } 
  
  catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
  }
}
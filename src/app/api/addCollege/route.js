import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { College } from "@/lib/models/college";

// define connectDB
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.DATABASE_URL);
  }
}

export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, pass, add, state, link, number, rating, category } = body;

    const college = new College({ name, email, pass, add, state, link, number, rating, category });
    await college.save();

    return NextResponse.json({ status: "okh", id: college._id });
  } catch (err) {
    return NextResponse.json({ status: "error", error: err.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { College } from "@/lib/models/college";

// Connect to DB (only once in hot reload)
let isConnected = false;
async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  }
}

// GET all colleges
export async function GET() {
  try {
    await connectDB();
    const colleges = await College.find({});
    return NextResponse.json({ status: "success", data: colleges });
  } catch (err) {
    return NextResponse.json({ status: "error", error: err.message }, { status: 500 });
  }
}

// // PUT: Add a new college
// export async function PUT(request) {
//   try {
//     await connectDB();
//     const body = await request.json();

//     const { name, email, pass, add, state, link, number, rating, category } = body;

//     const college = new College({ name, email, pass, add, state, link, number, rating, category });
//     await college.save();

//     return NextResponse.json({ status: "okh", id: college._id });
//   } catch (err) {
//     return NextResponse.json({ status: "error", error: err.message }, { status: 500 });
//   }
// }

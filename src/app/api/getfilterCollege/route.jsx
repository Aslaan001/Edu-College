

// POST handler for filtering colleges by any key-value pairs in request body
import { College } from "@/lib/models/college";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    const body = await req.json(); 

    if (!body.category) {
      return NextResponse.json(
        { error: "Missing 'category' field in request body" },
        { status: 400 }
      );
    }

    const data = await College.find({
      category: { $regex: body.category, $options: "i" }, // case-insensitive partial match
    });

    return NextResponse.json({ Status: data });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}

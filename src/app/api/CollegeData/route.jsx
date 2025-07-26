import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { College } from "@/lib/models/college";



// get data from college list
export async function GET() {
  let data=null;
  try {
     await mongoose.connect(process.env.DATABASE_URL);

     data = await College.find({});
     console.log("data", data);

   
   // console.log("res", res);
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ Status: data });
}

// adding a new college 
export async function PUT(req){

  try{
   await mongoose.connect(process.env.DATABASE_URL);

   const body = await req.json();
   const { name, email, pass , add, state,link,number,rating,category } = body;
     const college = new College({ name, email, pass , add, state,link,number,rating,category });
     await college.save();  

     return NextResponse.json({status:"okh"});
  }
  catch(err){
    return NextResponse.json({DB_Error:err});
  }
}

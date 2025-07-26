import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { User } from "@/lib/models/user";

export async function GET(request) {
  await mongoose.connect(
    "mongodb+srv://Testing:786@testing1.mofkubg.mongodb.net/Users_List?retryWrites=true&w=majority&appName=Testing1"
  );

  const data = await User.find({});
  
  return NextResponse.json({ message: data });
}

// for adding a user during signup

export async function PUT(request) {
  await mongoose.connect(process.env.DATABASE_URL);
  const body = await request.json();
  const { name, email, pass } = body;
  const user = new User({ name, email, pass });
  await user.save();
 
  return NextResponse.json({ status: "success" });
}

// for checking user during login

export async function POST(req) {
  const data = await req.json();
  const Email = data.email;
  const pass = data.pass;

  console.log(Email, pass);

  await mongoose.connect(process.env.DATABASE_URL);

  let alluser = await User.find();

  let flag = false;

  let id = null;

  let name = null;

  console.log(alluser);

  for (const a of alluser) {
    //console.log(a.email, Email, a.pass, pass);

    if (a.email === Email && a.pass === pass) {
      flag = true;
      id = a._id;
      name = a.name;
      //console.log("Matched", a._id);
    }
  }


  return NextResponse.json({
    status: flag,
    userid: id,
    name: name,
  });
}

"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  // 🔹 State to hold form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  // 🔹 Form submit handler

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", pass);

    if (!name || !email || !pass) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("api/GetUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, pass }),
      });

      const x = await res.json(); // ✅ parentheses here to call the function

      // console.log("Response:", x);

      if (x.status === "success") {
        alert("User created successfully");
        router.push("/login");
      } else {
        alert("Error creating user");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  if (session && session.user) {
    router.push("/");
    return (
      <>
        <h1>Hello {session.user.name}</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          {/* Form Title */}
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
            Create an Account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-indigo-600 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-lg border border-indigo-300 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-indigo-600 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-lg border border-indigo-300 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-indigo-600 mb-2">
                Password
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-lg border border-indigo-300 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign up button */}
            <div className="text-center mb-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="text-center my-4">
            <p className="text-gray-500">or</p>
          </div>

          {/* Google Sign-up Button */}
          <div className="text-center">
            <button
              className="flex items-center justify-center bg-white border border-gray-300 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 w-full"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="text-2xl mr-3" />
              <span className="font-bold text-gray-700">
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

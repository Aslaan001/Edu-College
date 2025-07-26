"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !pass) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("api/GetUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });

      const x = await res.json();

      if (x.status) {
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(
              "user",
              JSON.stringify({ user: x.userid, name: x.name })
            );
          } catch (e) {
            console.error("Failed to save user in localStorage", e);
          }
        }

        alert("Login successful");
        router.push("/");
      } else {
        alert("Invalid email or password");
        setEmail("");
        setPass("");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-lg font-bold text-indigo-600 mb-2">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-indigo-500 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 pl-12 rounded-lg border border-indigo-300 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6 relative">
            <label className="block text-lg font-bold text-indigo-600 mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-indigo-500 text-xl" />
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full p-4 pl-12 rounded-lg border border-indigo-300 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-indigo-600 w-full"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center my-4">
          <p className="text-gray-500">or</p>
        </div>

        <div className="text-center">
          <button className="flex items-center justify-center bg-white border border-gray-300 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 w-full">
            <FcGoogle className="text-2xl mr-3" />
            <span className="font-bold text-gray-700">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;

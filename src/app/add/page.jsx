"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Add() {
  const router = useRouter();

  const [name, setname] = useState("");
  const [add, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [rating, setrating] = useState("");
  const [link, setwebsite] = useState("");
  const [number, setphone] = useState("");
  const [email, setemail] = useState("");
  const [category, setcategory] = useState("");

  const fun = async () => {
    let req = await fetch("/api/CollegeData", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        add,
        state,
        rating,
        link,
        number,
        email,
        category,
      }),
    });

    const x = await req.json();

    console.log("Req", x);

    if (x.status == "okh") {
      alert("Added Successfully");
      router.push("/test");
    } else {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="container mx-auto my-5 p-10 rounded-lg shadow-2xl bg-gradient-to-r from-blue-100 to-indigo-200">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 animate-pulse">
        Add Your College
      </h2>

      <div className="space-y-8 max-w-xl mx-auto bg-white p-10 rounded-lg shadow-lg border border-gray-300">
        {/* College Name */}
        <InputField label="College Name" placeholder="Enter college name" onChange={setname} />

        {/* Address */}
        <InputField label="Address" placeholder="Enter address" onChange={setaddress} />

        {/* State Dropdown */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-2">State</label>
          <select
            className="w-full p-4 rounded-lg border border-indigo-400 focus:outline-none bg-indigo-50 text-indigo-900"
            onChange={(e) => setstate(e.target.value)}
          >
            <option value="">Select state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        {/* Rating Dropdown */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-2">Rating</label>
          <select
            className="w-full p-4 rounded-lg border border-indigo-400 focus:outline-none bg-indigo-50 text-indigo-900"
            onChange={(e) => setrating(e.target.value)}
          >
            <option value="">Select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Phone Number with +91 prefix */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-2">Phone Number</label>
          <div className="flex">
            <span className="px-4 py-4 bg-indigo-100 text-indigo-900 border border-indigo-400 rounded-l-lg">
              +91
            </span>
            <input
              type="tel"
              className="w-full p-4 rounded-r-lg border border-indigo-400 focus:outline-none bg-indigo-50 text-indigo-900"
              placeholder="Enter phone number"
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <InputField label="Email" placeholder="Enter email address" onChange={setemail} type="email" />

        {/* Website */}
        <InputField label="Website Link" placeholder="Enter website URL" onChange={setwebsite} />

        {/* Category Dropdown */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-2">Category</label>
          <select
            className="w-full p-4 rounded-lg border border-indigo-400 focus:outline-none bg-indigo-50 text-indigo-900"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Engineering">Engineering</option>
            <option value="Medical">Medical</option>
            <option value="Law">Law</option>
            <option value="Arts">Arts</option>
            <option value="Fashion_design">Fashion Design</option>
            <option value="Govt.">Govt.</option>
            <option value="BBA/MBA">BBA/MBA</option>
            <option value="BCA/MCA">BCA/MCA</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-4 px-8 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-purple-600 transition-transform transform hover:scale-110"
            onClick={fun}
          >
            Add College
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable input field component
function InputField({ label, placeholder, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-lg font-bold text-indigo-600 mb-2">{label}</label>
      <input
        type={type}
        className="w-full p-4 rounded-lg border border-indigo-400 focus:outline-none bg-indigo-50 text-indigo-900 placeholder-indigo-500"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Add;

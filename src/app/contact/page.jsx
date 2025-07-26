"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-md rounded-lg p-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-white">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-white">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <span>Edu-Explorer HQ, Kanpur, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>contact@edu-explorer.com</span>
            </div>
            <p className="text-sm mt-8 text-gray-400">
              Need help choosing a college? We’re here to help you find your
              perfect match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

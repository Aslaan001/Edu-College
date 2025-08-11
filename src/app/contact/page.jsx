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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClosePopup = () => setSubmitted(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
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
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {submitted && (
              <p className="text-green-400 font-medium">
                Message sent successfully to Edu-Explorer Dev-Team, Someone will contact you soon!
              </p>
            )}
            {error && (
              <p className="text-red-400 font-medium">
                {error}
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
              <span>+91 7460830263</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>aslaankhan640@gmail.com</span>
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

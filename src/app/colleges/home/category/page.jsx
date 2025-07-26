"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useGetUser from "@/hook/useGetUser";
import { useSession } from "next-auth/react";

function CollegeListPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [colleges, setColleges] = useState([]);
  const { data: session } = useSession();

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [collegeReviews, setCollegeReviews] = useState([]);

  const user = useGetUser();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("/api/getfilterCollege", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ category }),
        });

        const data = await res.json();
        setColleges(data?.Status || []);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    if (category) fetchColleges();
  }, [category]);

  const fetchReviewsForCollege = async (collegeName) => {
    try {
      const res = await fetch(`/api/review?college=${encodeURIComponent(collegeName)}`);
      const data = await res.json();
      setCollegeReviews(data.message || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setCollegeReviews([]);
    }
  };

  const handleReviewSubmit = async () => {
    let CollegeName = selectedCollege.name;
    let review = reviewText;
    let userName = session?.user?.name || user.user.name;

    if (!review) {
      alert("Please enter a valid review Please");
      return;
    }

    console.log(userName, "userName");

    try {
      const res = await fetch("/api/review", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ CollegeName, review, userName }),
      });

      const result = await res.json();
      alert("Review submitted!");
      setReviewText("");
      fetchReviewsForCollege(CollegeName);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review.");
    }
  };

  return (
    <div className="mt-24 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Colleges offering <span className="capitalize">{category}</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {colleges.length > 0 ? (
          colleges.map((college, idx) => (
            <div
              key={idx}
              className="w-full sm:w-80 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-blue-600 mb-2">
                  {college.name || "Unnamed College"}
                </div>
                <p className="text-gray-700 text-base mb-2">
                  {college.add || "No address available."}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>State:</strong> {college.state || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Mobile:</strong> +{college.NUMBER || "91"} {college.number || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Rating:</strong> {college.rating || "N/A"} / 5
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {college.email || "N/A"}
                </p>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <a
                  href={
                    college.link?.startsWith("http")
                      ? college.link
                      : `https://${college.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200 text-center"
                >
                  Vist Official Website
                </a>
                <button
                  onClick={() => {
                    setSelectedCollege(college);
                    setReviewText("");
                    setShowModal(true);
                    fetchReviewsForCollege(college.name);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200"
                >
                  Reviews
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No colleges found for &quot;{category}&quot;.
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedCollege && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[500px] p-6 rounded-lg shadow-xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-blue-700">
              Reviews for {selectedCollege.name}
            </h2>

            <div className="mb-4 max-h-40 overflow-y-auto space-y-3">
              {collegeReviews.length > 0 ? (
                collegeReviews
                  .filter((r) => r.CollegeName === selectedCollege.name)
                  .map((rev, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 bg-gray-100 p-2 rounded-md"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                        {rev.userName?.[0]?.toUpperCase() || "U"}
                      </div>
                      <div>
                        <p className="text-gray-800">{rev.review}</p>
                        <p className="text-xs text-gray-500 italic">
                          — {rev.userName || "Anonymous"}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>

            <textarea
              placeholder="Write your review..."
              className="w-full border border-gray-300 rounded-md p-2 mb-4 text-slate-800 resize-y transition-all duration-300 rows-2 focus:rows-5"
              rows="2"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
            <button
              className="ml-4 text-sm text-red-500 underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollegeListPage;

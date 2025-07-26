"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaStar, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Auth from "@/component/Auth";

async function getData() {
  let response = await fetch("http://localhost:3000/api/CollegeData", {
    cache: "no-store",
  });
  let data = await response.json();
  console.log(data.Status[0]);
  
  return data.Status;
}

function Test() {
  const { data: session, status } = useSession();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let fetchedData = await getData();
        setData(fetchedData);
        setLoading(false);
        //console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto my-10 p-10 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-lg shadow-xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 animate-slide-in">
            Top Colleges
          </h2>
          <p className="text-lg text-gray-600">
            Discover the best colleges for your future
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center">
                <th className="py-4 px-6 text-xl font-bold">
                  <FaUniversity className="inline-block mr-2" /> College Name
                </th>
                <th className="py-4 px-6 text-xl font-bold">
                  <FaMapMarkerAlt className="inline-block mr-2" /> Address
                </th>
                <th className="py-4 px-6 text-xl font-bold">State</th>
                <th className="py-4 px-6 text-xl font-bold">
                  <FaStar className="inline-block mr-2 text-yellow-500" />{" "}
                  Rating
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((x) => (
                <tr key={x.id} className="border-b">
                  <td className="py-4 px-6 text-gray-800 font-medium text-center">
                    {x.name || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-center">
                    {x.add || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-center">
                    {x.state || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-yellow-500 font-bold text-center text-lg">
                    {Array.from({ length: Math.min(x.rating,5) }, (_, i) => (
                      <FaStar key={i} className="inline-block mr-1" />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Test;

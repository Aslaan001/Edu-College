import React from "react";
import Image from "next/image";
import logo from "../assets/walpaper.jpg";
import Link from "next/link";
import Auth from "@/component/Auth";

function Page({ children }) {
  return (
    <>
      <div class="min-h-screen bg-gray-700 flex flex-col">
        <header class="bg-white shadow-lg">
          <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="font-bold text-2xl text-blue-500">
              Welcome to College Explorer
            </div>
            <nav class="space-x-4">
              <a href="#" class="text-gray-700 hover:text-blue-500 font-bold">
                Home
              </a>
              <a href="#" class="text-gray-700 hover:text-blue-500 font-bold">
                Explore Colleges
              </a>
              <a href="#" class="text-gray-700 hover:text-blue-500 font-bold">
                Profile
              </a>
              <a href="#" class="text-gray-700 hover:text-blue-500 font-bold">
                Logout
              </a>
            </nav>
          </div>
        </header>

        <section class="bg-white shadow-lg mt-16 rounded-lg mx-auto max-w-screen-lg">
          <div class="px-6 py-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              Explore the Best Colleges for Your Future
            </h1>
            <p class="text-gray-700 text-base mb-6">
              Discover colleges that suit your career goals. We provide detailed
              information on courses, fees, admissions, and more. Start
              exploring now!
            </p>
            <Link href="/colleges/home">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                Start Exploring
              </button>
            </Link>
          </div>
        </section>

        <section class="mt-12 mx-auto max-w-screen-lg px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">Top Colleges</h2>
              <p class="text-gray-700 mb-4">
                Explore the top-ranked colleges that offer world-class education
                across various domains.
              </p>
              <Link href="/test">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Colleges
              </button>
              </Link>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Admission Info
              </h2>
              <p class="text-gray-700 mb-4">
                Get detailed admission information and criteria for various
                colleges and universities.
              </p>

              <Link href="/colleges/home">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Info
              </button>
              </Link>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Scholarship Details
              </h2>
              <p class="text-gray-700 mb-4">
                Learn about scholarships and financial aid options to help fund
                your education.
              </p>
              <Link href="https://scholarship.up.gov.in/">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Scholarships
              </button>
              </Link>
            </div>
          </div>
        </section>

        <footer class="bg-gray-800 text-white mt-10">
          <div class="container mx-auto px-6 py-6 text-center">
            <p>&copy; 2024 College Explorer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;

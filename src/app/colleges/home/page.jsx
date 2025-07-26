"use client";
import Auth from "@/component/Auth";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const handleClick = (category) => {
    router.push(`/colleges/home/category?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-10 mt-28">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">Govt.</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Govt.")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class=" text-blue-500 font-bold text-xl mb-2">Engineering</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Engineering")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class=" text-blue-500 font-bold text-xl mb-2">Medical</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Medical")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">BCA/MCA</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("BCA/MCA")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">BBA/MBA</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("BBA/MBA")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">Medical</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Medical")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">Law</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Law")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">Arts</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Arts")}
            >
              Explore Colleges
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-52">
          <div class="px-6 py-4">
            <div class="text-blue-500 font-bold text-xl mb-2">Fashion Design</div>
            <p class="text-gray-700 text-base">
              Here is a brief description of the content inside the card. You
              can customize this text.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClick("Fashion_Design")}
            >
              Explore Colleges
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

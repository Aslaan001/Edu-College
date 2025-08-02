"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-3">
        <div className="mt-1 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3"></div>
            <p className="text-3xl font-bold text-blue-500 md:text-4xl underline">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-200 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and
              foster a culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Aslaan */}
          <div className="rounded-md border">
            <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
              <Image
                src="https://erp.psit.ac.in/assets/img/Simages/32322.jpg"
                alt="Aslaan Khan"
                width={400}
                height={350}
                className="rounded-lg object-cover h-[350px] w-full"
              />
            </a>
            <p className="mt-6 w-full px-2 text-xl text-center font-semibold text-blue-500">
              Aslaan Khan
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-center text-gray-200">
              Backend APIs
            </p>
            <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
              <button className="ml-28 mb-4 bg-blue-400 rounded-xl w-16 h-8">
                Profile
              </button>
            </a>
          </div>

          {/* Owaish */}
          <div className="rounded-md border">
            <Image
              src="https://erp.psit.ac.in/assets/img/Simages/2212320.jpg"
              alt="Mohd. Owaish Khan"
              width={400}
              height={350}
              className="rounded-lg object-cover h-[350px] w-full"
            />
            <p className="mt-6 w-full px-2 text-xl text-center font-semibold text-blue-500">
              Mohd. Owaish Khan
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-center text-gray-200">
              FrontEnd
            </p>
            <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
              <button className="ml-28 mb-4 bg-blue-400 rounded-xl w-16 h-8">
                Profile
              </button>
            </a>
          </div>

          {/* Amrish */}
          <div className="rounded-md border">
            <Image
              src="https://erp.psit.ac.in/assets/img/Simages/2212193.jpg"
              alt="Amrish Singh"
              width={400}
              height={350}
              className="rounded-lg object-cover h-[350px] w-full"
            />
            <p className="mt-6 w-full px-2 text-xl text-center font-semibold text-blue-500">
              Amrish Singh
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-center text-gray-200">
              Frontend + Component Designing
            </p>
            <a href="https://www.linkedin.com/in/amrish-singh-566254266/">
              <button className="ml-28 mb-4 bg-blue-400 rounded-xl w-16 h-8">
                Profile
              </button>
            </a>
          </div>

          {/* Karan */}
          <div className="rounded-md border">
            <Image
              src="https://erp.psit.ac.in/assets/img/Simages/2212448.jpg"
              alt="Karan Verma"
              width={400}
              height={350}
              className="rounded-lg object-cover h-[350px] w-full"
            />
            <p className="mt-6 w-full px-2 text-xl text-center font-semibold text-blue-500">
              Karan Verma
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-center text-gray-200">
              Feasibility Study
            </p>
            <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
              <button className="ml-28 mb-4 bg-blue-300 rounded-xl w-16 h-8">
                Profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const teamMembers = [
  {
    name: "Aslaan Khan",
    role: "System Designing, Backend Integration, CI-CD Testing",
    img: "https://erp.psit.ac.in/assets/img/Simages/32322.jpg",
    profile: "https://www.linkedin.com/in/aslaan-khan-1824a1272/",
  },

  {
    name: "Karan Verma",
    role: "ChatBot-Prompt Engineering",
    img: "https://erp.psit.ac.in/assets/img/Simages/2212448.jpg",
    profile: "https://www.linkedin.com/in/karanverma777177/",
  },
  {
    name: "Amrish Singh",
    role: "Frontend + Component Designing",
    img: "https://erp.psit.ac.in/assets/img/Simages/2212193.jpg",
    profile: "https://www.linkedin.com/in/amrish-singh-566254266/",
  },
  {
    name: "Mohd. Owaish Khan",
    role: "Frontend",
    img: "https://erp.psit.ac.in/assets/img/Simages/2212320.jpg",
    profile: "https://www.linkedin.com/in/aslaan-khan-1824a1272/",
  }
];

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-blue-500/10 border border-blue-500 text-blue-300 rounded-full px-4 py-1 text-sm mb-4">
            Our Awesome Team
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
            Meet Our Team
          </h1>

          {/* Typing animation for intro */}
          <TypeAnimation
            sequence={[
              "We build scalable systems...",
              1500,
              "We design amazing UI & UX...",
              1500,
              "We solve complex backend problems...",
              1500,
              "We turn ideas into reality 🚀",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="p"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <a href={member.profile} target="_blank">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={350}
                  className="object-cover w-full h-[350px] hover:scale-105 transition-transform duration-500"
                />
              </a>
              <div className="p-4 text-center">
                {/* Name typing loop */}
                <TypeAnimation
                  sequence={[
                    member.name, 2000, // type name, pause
                    "", 500,           // erase name
                  ]}
                  speed={50}
                  deletionSpeed={50} // backspacing effect
                  repeat={Infinity}
                  wrapper="h2"
                  className="text-xl font-bold text-blue-400"
                />
                <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                <a
                  href={member.profile}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-semibold"
                >
                  View Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

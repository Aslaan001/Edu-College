"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  const member = {
    name: "Muskan Ali",
    role: "System Designing, Backend Integration, CI-CD",
    img: "/image.png",
    profile: "https://www.linkedin.com/in/muskan-ali-194878244/",
    about:
      "Dedicated to building scalable backend architectures, integrating services, and ensuring seamless automation pipelines. Passionate about robust system design and optimized development workflows.",
    skills: [
      "System Design",
      "Backend Development",
      "CI/CD Pipelines",
      "Database Optimization",
      "Cloud Deployment",
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white py-16 px-6 flex justify-center items-center">
      <div className="absolute top-10 w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-400"
        >
          Core Developer
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full bg-gray-800 border border-gray-700 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center mt-20"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <Image
            src={member.img}
            alt={member.name}
            width={380}
            height={380}
            className="rounded-2xl object-cover h-[350px] w-[350px] border border-gray-700"
          />
        </motion.div>

        {/* Right Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <TypeAnimation
            sequence={[member.name, 2000, "", 500]}
            speed={50}
            deletionSpeed={50}
            repeat={Infinity}
            wrapper="h1"
            className="text-4xl font-bold text-blue-400"
          />

          <p className="text-gray-400 text-sm mt-2">{member.role}</p>

          <p className="text-gray-300 text-md mt-6 leading-relaxed">
            {member.about}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-700 border border-gray-600 rounded-full text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href={member.profile}
            target="_blank"
            className="inline-block mt-8 px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-semibold"
          >
            View LinkedIn Profile
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

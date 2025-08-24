import React from "react";
import { Link } from "react-router-dom";
import profile_img from "../assets/profile_img.png";
export default function About() {
  return (
    <div className="px-6 py-2 max-w-4xl mx-auto">
      <img
        src={profile_img}
        alt="Manish Yadav"
        className="rounded-full w-32 h-32 mx-auto mb-5 border-2 border-gray-200 shadow-sm object-cover animate-fade-in-up"
      ></img>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Hi, I'm <span className="text-blue-500">Manish Yadav</span>
        </h1>

        <p className=" text-gray-500 font-extralight text-md">
          Welcome to my portfolio. I’m a developer passionate about creating
          impactful digital experiences.
        </p>
        <p className="text-gray-500 font-extralight text-md">
          And a passionate Backend Developer & Machine Learning Enthusiast
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <Link
          to="/projects"
          className="bg-blue-400 text-white px-4 py-3 rounded-md hover:bg-blue-500"
        >
          View My Work
        </Link>
        <a
          href="/site/resume/manish_ressume.pdf"
          download
          className="border border-blue-500 text-blue-500 px-4 py-3 rounded-md hover:bg-blue-50"
        >
          Download Resume
        </a>
      </div>

      <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-sans">
        <p>
          Hello! I'm Manish Yadav, a dedicated backend developer with a knack
          for creating beautiful and functional digital experiences. I graduated
          from Rama University in July 2024 with a Bachelor of Computer Science
          and Engineering.
        </p>
        <p>
          My experience includes developing a Plant Disease Detection System
          using Django and CNN, and automating internship applications with
          React, Django, and Selenium. I've also engineered solutions for web
          scraping and built real-time applications like a stock tracker.
        </p>
        <p>
          I specialize in front-end development, bringing designs to life with
          clean, efficient code using modern technologies like HTML, CSS
          (Bootstrap 5, Tailwind CSS), and JavaScript (React.js). I also have
          robust backend experience with Python (Django) and databases like
          MySQL. I'm passionate about building data-driven applications and
          exploring new technologies.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Manish Yadav. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/manishgk9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manishgk9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/manishgk9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../data/data";
import { FiMenu, FiX } from "react-icons/fi";
import "../index.css";

export default function Navbar() {
  console.log(data);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-800 border border-gray-200  shadow-md transition-all duration-300 font-inter">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="font-bold text-xl">{data.logo}</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {data.navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:text-blue-500 transition ${
                location.pathname === link.href
                  ? "text-blue-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col gap-4 px-6 py-4 rounded-b-xl">
          {data.navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-blue-500 transition ${
                location.pathname === link.href
                  ? "text-blue-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

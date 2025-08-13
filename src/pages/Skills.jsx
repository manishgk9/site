import React from "react";
import SectionHeading from "../components/SectionHeading";
import data from "../data/data";

export default function Skills() {
  return (
    <div className="px-6 py-12 font-inter">
      <SectionHeading
        title="Skills in Detail"
        subtitle="Here's a comprehensive overview of my technical and soft skills, demonstrating my capabilities across various domains."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.skills.map((skill, index) => (
          <div
            key={skill.title}
            className="bg-white text-gray-700 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 text-gray-600">
              {index + 1 + ". " + skill.title}
            </h3>
            {/* Icons */}
            {skill.icons && skill.icons.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {skill.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`${skill.title} icon ${index}`}
                    className="w-4 h-4 object-contain"
                  />
                ))}
              </div>
            )}
            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

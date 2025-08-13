import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import data from "../data/data";

const techIcons = {
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Selenium:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  BeautifulSoup:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const projectsToShow = showAll ? data.projects : data.projects.slice(0, 6);

  return (
    <div className="px-6 py-12 font-inter">
      <SectionHeading
        title="My Projects"
        subtitle="A showcase of some of the projects I’ve worked on."
      />

      {/* Fixes empty space with items-start */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {projectsToShow.map((proj, idx) => {
          const isExpanded = expandedCard === idx;

          return (
            <div
              key={idx}
              className="bg-white text-gray-800 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Image */}
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-45 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 font-gray-700">
                  {proj.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm text-gray-500 mb-4 ${
                    !isExpanded ? "line-clamp-4" : ""
                  }`}
                >
                  {proj.description}
                </p>

                {/* GitHub link + Read More */}
                <div className="flex items-center gap-4 mb-4">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black flex items-center gap-1"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="w-4 h-4"
                      />
                      <span className="text-sm hover:underline">GitHub</span>
                    </a>
                  )}

                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : idx)}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>

                {/* Key Technologies */}
                {isExpanded && proj.key_technology && (
                  <div className="mt-2">
                    <h4 className="text-xs font-bold uppercase text-gray-500 mb-2">
                      Key Technologies
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {proj.key_technology.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          {techIcons[tech.split(",")[0]] && (
                            <img
                              src={techIcons[tech.split(",")[0]]}
                              alt={tech}
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      {data.projects.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

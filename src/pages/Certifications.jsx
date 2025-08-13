import React from "react";
import SectionHeading from "../components/SectionHeading";
import data from "../data/data";

export default function Certifications() {
  return (
    <div className="px-6 py-12 font-inter">
      <SectionHeading
        title="Certifications"
        subtitle="Achievements and certifications I have earned."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.certifications.map((cert) => (
          <div
            key={cert.title}
            className="bg-white text-gray-700 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-600">
              {cert.title}
            </h3>

            {/* Issued By */}
            {cert["issued_by"] && (
              <p className="text-xs text-gray-500 mb-3">
                Issued by: {cert["issued_by"]}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

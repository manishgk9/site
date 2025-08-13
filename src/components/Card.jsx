import React from "react";

export default function Card({
  title,
  description,
  issued_by,
  className = "",
}) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full ${className}`}
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      {issued_by && (
        <p className="text-sm text-gray-500 mt-auto">Issued by: {issued_by}</p>
      )}
    </div>
  );
}

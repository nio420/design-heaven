import React from "react";
import { FaTrophy } from "react-icons/fa";

const SectionHeader = ({ title, badge, highlight, description }) => {
  return (
    <div className="mb-16 text-center">
      <div className="inline-flex gap-2 items-center  px-6 py-2.5 rounded-full mb-4 bg-accent-light text-gray-700">
        <FaTrophy /> {badge}
      </div>
      <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading text-gray-800">
        {title} <span className="text-accent">{highlight}</span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;

import React from "react";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const BlogCard = ({ index, item }) => {
  return (
    <div
      key={index}
      className="bg-secondary rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      <div>
        <img src={item.image} alt="" className="w-full h-64 object-cover" />
      </div>
      {/* content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs mb-4 text-gray-600">
          <span className="flex items-center gap-2">
            <FaCalendarAlt /> {item.date}
          </span>
          <span className="flex items-center gap-2">
            <FaClock /> {item.readTime}
          </span>
        </div>
        <h2 className="text-gray-800 font-heading font-bold text-2xl mb-4">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm mb-6">{item.description}</p>
        <button className="flex items-center justify-between gap-2 cursor-pointer hover:text-accent transition-all duration-300">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

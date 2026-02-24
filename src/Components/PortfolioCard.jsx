import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ item, index }) => {
  return (
    <div key={index} className="overflow-hidden rounded-2xl">
      {/* img */}
      <div className="rounded-2xl overflow-hidden hover:scale-x-105 transition-transform duration-300 ease-in-out mb-6">
        <img src={item.image} alt="" className="w-full h-64 object-cover" />
      </div>
      <h3 className="text-gray-800 font-heading font-bold text-2xl mb-4">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm mb-6">{item.description}</p>
      {/* link */}
      <div className="flex items-center justify-between">
        <span className="text-accent font-medium">{item.location}</span>
        <FaArrowRight className="text-xl hover:text-accent cursor-pointer transition-all duration-300" />
      </div>
    </div>
  );
};

export default PortfolioCard;

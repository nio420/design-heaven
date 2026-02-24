import React from "react";
import { services } from "../assets/servicesData.js";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* section grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-8 shadow-md hover:-translate-y-2 cursor-pointer transition-all duration-300 "
            >
              {/* icon */}
              <div className="w-12 h-12 bg-accent text-white rounded-full flex justify-center items-center mb-6">
                <item.icon />
              </div>
              <h3 className="text-gray-800 font-heading font-bold text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{item.description}</p>
              {/* list  */}
              <ul className="space-y-4 mb-6">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <FaCheck className="text-accent" /> {feature}
                  </li>
                ))}
              </ul>
              {/* button */}
              <button className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full cursor-pointer hover:text-accent hover:bg-white hover:border-accent border transition-all duration-500 ease-in-out hover:-translate-y-0.5 shadow-lg">
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";
import SectionHeader from "./SectionHeader";
import { homePageData } from "../assets/homePageData.js";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const { testimonials } = homePageData;
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* section header */}
        <SectionHeader
          badge={"Client Story"}
          title={"What Our "}
          highlight={"Client Say"}
          description={
            "Hear from homeowners who transformed their living spaces with our designs."
          }
        />

        {/* Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className="fade-in bg-white p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              {/* profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading text-gray-800 font-bold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.role}</p>
                </div>
              </div>
              {/* description */}
              <p className="text-gray-600 text-sm mb-4">{item.quote}</p>
              {/* rating */}
              <div className="text-yellow-400 flex flex-wrap gap-0.5">
                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

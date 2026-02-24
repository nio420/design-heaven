import React from "react";
import {
  FaAward,
  FaCalendarAlt,
  FaPlay,
  FaPlayCircle,
  FaTrophy,
} from "react-icons/fa";
import { homePageData } from "../assets/homePageData.js";

const Hero = () => {
  const { hero } = homePageData;
  return (
    <div className="py-30 min-h-screen flex items-center justify-center bg-linear-to-b from-primary to-secondary">
      <div className="container mx-auto grid grid-cols-1 px-6 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* left Content */}
        <div>
          {/* badge */}
          <div className="inline-block items-center px-4 py-2 bg-accent-light text-gray-700 rounded-full">
            <div className="flex items-center gap-2 text-sm">
              {" "}
              <FaAward /> {hero.badge}{" "}
            </div>
          </div>
          {/* title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mt-6">
            {hero.title.normal}{" "}
            <span className="text-accent">{hero.title.highlight}</span>{" "}
            {hero.title.end}
          </h1>
          <p className="text-md mt-6 max-w-2xl leading-relaxed mb-10 text-gray-600">
            {" "}
            {hero.description}{" "}
          </p>
          {/* CTA  */}
          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 bg-accent text-white rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent-hover hover:-translate-y-0.5 whitespace-nowrap">
              {" "}
              <FaCalendarAlt /> Book Consulation
            </button>
            <button className="px-6 py-3 border-2 border-accent hover:bg-accent-light text-accent rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 bg-transparent whitespace-nowrap">
              <FaPlayCircle />
              View Projects
            </button>
          </div>
          {/* State */}
          <div className="grid grid-cols-3 mt-16 gap-16">
            {hero.stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-gray-800 font-bold font-heading text-3xl">
                  {item.value}
                </h3>
                <p className="text-gray-700 text-sm font-light mt-1 ">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* right image */}
        <div className="mt-12 md:mt-0">
          <div className="relative">
            <div className="bg-accent-light rounded-3xl shadow-2xl p-2 overflow-hidden">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating img */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-2xl w-64">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <FaTrophy className="text-white text-lg" />
                </div>
                <h4 className="font-heading text-xl font-bold text-gray-700">
                  Design Excellecne{" "}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                {" "}
                2026 International Design Award Winner.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

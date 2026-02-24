import React from "react";
import SectionHeader from "./SectionHeader";
import { processSteps } from "../assets/servicesData.js";

const HowItWork = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge={"Our Process"}
          title={"How We"}
          highlight={"Work"}
          description={
            "A systematic approach to delivering exceptional design solutions."
          }
        />

        {/* process grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-15 h-15 bg-accent rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">{item.step}</span>
                </div>
                <h4 className="text-gray-800 font-heading font-bold text-2xl mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

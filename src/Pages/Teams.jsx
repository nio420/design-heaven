import React from "react";
import PageHero from "../Components/PageHero";
import TeamCard from "../Components/TeamCard";
import { teamData } from "../assets/teamData.js";
import { FaUser } from "react-icons/fa";
import SectionReveal from "../Components/SectionReveal";

const Teams = () => {
  return (
    <div>
      <SectionReveal delay={0.03}>
        <PageHero
          title={"Our"}
          highlight={"Teams"}
          description={
            "A talented team of architects, interior designers, and model makers dedicated to creating exceptional spaces."
          }
        />
      </SectionReveal>

      {/* team grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionReveal delay={0.2}> 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {teamData.map((item, index) => (
              <TeamCard index={index} item={item} />
            ))}
          </div>
          </SectionReveal>
        </div>
      </div>

      {/* call to action */}
      <div className="py-20 bg-accent">
        <div className="mx-auto px-6 container">
          <SectionReveal delay={0.3}> 
          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
            <div className="text-left px-6 text-white">
              <h2 className=" font-heading font-bold text-4xl md:text-5xl mb-4">
                Join Our Team
              </h2>
              <p className="text-md max-w-2xl mx-auto mb-6">
                We're always looking for talented designers, architects, and
                creative minds to join our studio.
              </p>
              <button className="px-6 py-2.5 bg-accent-light text-accent rounded-full cursor-pointer hover:text-accent hover:bg-white hover:border-accent-light border transition-all duration-500 ease-in-out hover:-translate-y-0.5 shadow-lg">
                View Open Positions
              </button>
            </div>
            {/* icon */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent-light/40 rounded-full flex items-center justify-center">
                <FaUser className="text-7xl text-white" />
              </div>
            </div>
          </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Teams;

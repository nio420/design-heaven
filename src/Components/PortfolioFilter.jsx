import React from "react";
import { filters } from "../assets/portfolioData.js";
import { projects } from "../assets/portfolioData.js";
import PortfolioCard from "./PortfolioCard.jsx";
import { FaArrowRight } from "react-icons/fa";

const PortfolioFilter = ({ active, setActive }) => {
    const [showAll, setShowAll] = React.useState(false);

  // filter projects
  const filteredProjects =
    active === "All Projects"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

      // show all projects
      const toogleShowAll = () => {
        setShowAll(!showAll);
      };


  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4 ">
        {filters.map((item, index) => (
          <button
            key={index}
            className={`px-6 py-2 font-medium rounded-full transition duration-300 cursor-pointer ${active === item ? "bg-accent text-white" : "bg-accent-light text-accent hover:bg-accent hover:text-white"}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* portfolio grid */}
      <div className="py-10 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((item, index) => (
            <PortfolioCard index={index} item={item} />
          ))}
        </div>
      </div>

      {/* see more button */}
      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toogleShowAll}
            className="px-6 py-2 rounded-full bg-accent-hover text-white transition-all duration-300 hover:scale-103 flex items-center gap-2 cursor-pointer hover:bg-accent"
          >
            {showAll ? "Show Less" : "Show More"} <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilter;

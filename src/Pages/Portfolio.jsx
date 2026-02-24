import React, { useState } from "react";
import PageHero from "../Components/PageHero";
import PortfolioFilter from "../Components/PortfolioFilter";
import SectionReveal from "../Components/SectionReveal";

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");
  return (
    <div>
      <SectionReveal delay={0.03}>
        <PageHero
          title={"Our"}
          highlight={"Portfolio"}
          description={
            "Explore our award-winning home modeling projects that showcase our design excellence"
          }
        />
      </SectionReveal>

      <SectionReveal delay={0.3}> 
      <PortfolioFilter active={filter} setActive={setFilter} /> </SectionReveal>
    </div>
  );
};

export default Portfolio;

import React from "react";
import PageHero from "../Components/PageHero";
import { blogPosts } from "../assets/blogPostData.js";
import BlogCard from "../Components/BlogCard.jsx";
import { FaArrowRight } from "react-icons/fa";
import SectionReveal from "../Components/SectionReveal";

const Blog = () => {
  return (
    <div>
      {/* Hero reveal */}
      <SectionReveal delay={0.03}>
        <PageHero
          title={"Design "}
          highlight={"Insight"}
          description={
            "Explore design trends, tips, and insights from our team of experts."
          }
        />
      </SectionReveal>

      {/* blog section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Grid reveal */}
          <SectionReveal delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((item, index) => (
                <BlogCard key={index} item={item} index={index} />
              ))}
            </div>
          </SectionReveal>

          {/* Button reveal */}
          <SectionReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 mt-10">
              <button className="px-6 py-2 rounded-full bg-accent-hover text-white transition-all duration-300 hover:scale-103 flex items-center gap-2 cursor-pointer hover:bg-accent">
                View All Articles <FaArrowRight />
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Blog;

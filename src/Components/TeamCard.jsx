import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamCard = ({ item, index }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {/* img */}
      <div key={index}>
        <img className="w-full h-64 object-cover" src={item.image} alt="" />
      </div>
      {/* content */}
      <div className="p-6">
        <h2 className="text-gray-800 font-heading font-bold text-2xl mb-4">
          {item.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{item.role}</p>
        <p className="text-gray-600 text-sm mb-6">{item.bio}</p>
        {/* socials */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-gray-600 hover:text-accent transition-all duration-300 text-xl" />
          <FaInstagram className="text-gray-600 hover:text-accent transition-all duration-300 text-xl" />
          <FaTwitter className="text-gray-600 hover:text-accent transition-all duration-300 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

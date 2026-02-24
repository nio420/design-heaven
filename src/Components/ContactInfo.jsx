import React from "react";
import { contactInfo, socialLinks } from "../assets/contactData.js";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
        Contact <span className="text-accent"> Information</span>
      </h2>
      {/* contact info */}
      <div className="space-y-8 mb-12">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center">
              <item.icon className="text-white" />
            </div>
            <div>
              <h4 className="text-gray-800 font-heading font-bold text-2xl mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* socials */}
      <div>
        <h4 className="text-gray-800 font-heading font-bold text-2xl mb-4">
          Follow <span className="text-accent">Us</span>
        </h4>
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <a
              href="#"
              key={index}
              className=" w-12 h-12 bg-accent-light rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 text-gray-700 hover:text-white hover:-translate-y-1"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

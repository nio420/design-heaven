import React from "react";
import { footerData } from "../assets/footerData.js";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  const { company, quickLinks, services } = footerData;
  return (
    <footer className="pt-20 pb-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 p- rounded-full bg-accent flex items-center justify-center">
                <company.logoIcon className="text-xl" />
              </div>
              <div className="font-heading font-bold text-3xl">
                Design <span className="text-accent">Heaven</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-5">
              Premium home modeling and interior design studio creating
              exceptional living spaces since 2005.
            </p>
            <div className="flex gap-4">
              {company.socialLinks.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <item.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-2xl">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-gray-400 ">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.page}
                    className="text-sm hover:text-accent transition-all duration-500 ease-in-out hover:-translate-y-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-2xl">Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400 ">
              {services.map((item, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-accent transition-all duration-500 ease-in-out hover:-translate-y-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-2xl">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-lg text-accent" />
                <span>Dhaka Bangldesh 1230</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-lg text-accent" />
                <span>+88 0123456789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-lg text-accent" />
                <span>info@designhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

      {/* copyright */}
        <div className="mt-10 text-center border-t border-gray-600 py-6 -mb-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 font-heading font-bold">
            Developed by{" "}
            <span className="font-semibold text-accent">Omit</span>. All rights
            reserved © {new Date().getFullYear()} Design Haven.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

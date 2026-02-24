import React, { useState } from "react";
import { FaBars, FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navlist = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Teams", path: "/teams" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed z-50 transition-all duration-300 px-4 py-4 backdrop-blur-xl overflow-x-hidden">
      {/* Container */}
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <div className="h-8 w-8 bg-accent rounded-full flex items-center justify-center">
            <FaHome className="text-white text-xl" />
          </div>
          <div className="text-2xl font-heading font-bold text-gray-800">
            Design <span className="text-accent-hover">Heaven</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navlist.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                   isActive
                     ? "text-accent font-semibold after:w-full"
                     : "text-gray-700 hover:text-accent hover:after:w-full after:w-0"
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Contact btn */}
          <Link
            to={"/contact"}
            className="px-5 py-2 bg-accent rounded-full text-white ring-offset-1 ring-1 hover:bg-white hover:text-accent transition-all duration-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden cursor-pointer">
          <button
            onClick={toggleMenu}
            className=" hover:bg-white hover:text-accent transition-all duration-500 ease-in-out"
          >
            {isOpen ? (
              <FaXmark className="text-2xl text-accent cursor-pointer" />
            ) : (
              <FaBars className="text-2xl text-accent cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
    md:hidden w-full max-w-full px-4 overflow-hidden
    transition-all duration-500 ease-in-out
    ${isOpen ? "max-h-96 opacity-100 mt-6 pb-4" : "max-h-0 opacity-0 mt-0 pb-0"}
  `}
      >
        <div
          className={`
      w-full max-w-full flex flex-col gap-4 justify-center items-center
      transition-all duration-500 ease-in-out
      ${isOpen ? "translate-y-0" : "-translate-y-2"}
    `}
        >
          {navlist.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `
          w-full text-center px-4 py-2 rounded-lg font-medium
          transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          ${
            isActive
              ? "text-accent font-semibold bg-accent/10"
              : "text-gray-700 hover:text-accent hover:bg-gray-50"
          }
        `
              }
              style={{
                transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
              }}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Contact btn */}
          <NavLink
            onClick={toggleMenu}
            to={"/contact"}
            className={({ isActive }) =>
              `
    relative overflow-hidden
    px-6 py-2.5 rounded-full w-full
    flex gap-2 items-center justify-center
    font-medium tracking-wide
    transition-all duration-300 ease-out
    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}

    ${
      isActive
        ? "bg-accent text-white shadow-md"
        : "bg-linear-to-r from-accent to-accent-hover text-white hover:shadow-lg hover:-translate-y-0.5"
    } ring-1 ring-accent/30 hover:ring-accent/60 `
            }
            style={{
              transitionDelay: isOpen ? `${navlist.length * 60}ms` : "0ms",
            }}
          >
            <FaCalendarAlt className="text-sm" />
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

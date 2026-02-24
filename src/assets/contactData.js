import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP } from "react-icons/fa";

// contactData.js
export const contactInfo = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    title: "Our Office",
    value: "Block-C Road 12, Creative District Dhaka Bangladesh,1230"
  },
  {
    id: 2,
    icon: FaPhoneAlt,
    title: "Phone Number",
    value: "+88 0123456789",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email Address",
    value: "info@designhaven.com",
  },
  {
    id: 4,
    icon: FaClock,
    title: "Working Hours",
    value: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    value1: "Saturday: 10:00 AM - 4:00 PM"
  }, 
];

export const socialLinks = [
  { id: 1, icon: FaFacebookF, link: "#" },
  { id: 2, icon: FaInstagram, link: "#" },
  { id: 3, icon: FaPinterestP, link: "#" },
  { id: 4, icon: FaLinkedinIn, link: "#" },
];

export const services = [
  "3D Home Modeling",
  "Interior Design",
  "Architectural Planning",
  "Sustainable Design",
  "Space Optimization",
  "Project Management",
];

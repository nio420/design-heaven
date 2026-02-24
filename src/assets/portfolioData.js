//import { assets } from "./assets";
import Img1 from "../assets/portfolio1.avif";
import Img2 from "../assets/portfolio2.avif";
import Img3 from "../assets/portfolio3.avif";
import Img4 from "../assets/portfolio4.avif";
import Img5 from "../assets/portfolio5.avif";
import Img6 from "../assets/portfolio6.avif";
import Img7 from "../assets/portfolio7.avif";
import Img8 from "../assets/portfolio8.avif";
import Img9 from "../assets/portfolio9.avif";


export const filters = [
  "All Projects",
  "Residential",
  "Commercial",
  "Interior Design",
  "Sustainable",
];

export const projects = [
  {
    title: "Cliffside Villa",
    description:
      "A contemporary villa with panoramic ocean views and sustainable features.",
    location: "Malibu, California",
    image: Img1,
    categories: ["Residential", "Interior Design"],
    delay: "0s",
  },
  {
    title: "Skyline Apartments",
    description:
      "Luxury residential complex with smart home integration and premium amenities.",
    location: "New York, NY",
    image: Img2,
    categories: ["Commercial"],
    delay: "0.1s",
  },
  {
    title: "Eco-Family Residence",
    description:
      "Net-zero energy home with green roofing and rainwater harvesting system.",
    location: "Austin, Texas",
    image: Img3,
    categories: ["Sustainable", "Residential"],
    delay: "0.2s",
  },
  {
    title: "Urban Loft Transformation",
    description:
      "Complete interior redesign of a downtown loft space with industrial elements.",
    location: "Chicago, Illinois",
    image: Img4,
    categories: ["Interior Design"],
    delay: "0.3s",
  },
  {
    title: "Mountain Retreat",
    description:
      "Rustic modern home designed for year-round living in a mountain setting.",
    location: "Aspen, Colorado",
    image: Img5,
    categories: ["Residential"],
    delay: "0.4s",
  },
  {
    title: "Green Office Complex",
    description:
      "LEED-certified office building with biophilic design and energy-efficient systems.",
    location: "Seattle, Washington",
    image: Img6,
    categories: ["Sustainable", "Commercial"],
    delay: "0.5s",
  },
  {
    title: "Urban Loft Apartment",
    description:
      "A modern loft blending industrial elements with warm, minimalist interiors for city living.",
    location: "New York, USA",
    image: Img7,
    categories: ["Interior Design"],
    delay: "0.1s",
  },
  {
    title: "Mountain Retreat Cabin",
    description:
      "A cozy wooden cabin designed to harmonize with nature, featuring large glass panels and natural materials.",
    location: "Aspen, Colorado",
    image: Img8,
    categories: ["Residential"],
    delay: "0.2s",
  },
  {
    title: "Corporate Innovation Hub",
    description:
      "A dynamic workspace designed to inspire creativity and collaboration with modern layouts and smart lighting.",
    location: "San Francisco, USA",
    image: Img9,
    categories: ["Commercial", "Sustainable"],
    delay: "0.3s",
  },
];

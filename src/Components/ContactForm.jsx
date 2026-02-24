import React from "react";
import { services } from "../assets/contactData";

const ContactForm = () => {
  return (
    <div className="py-12 bg-secondary p-6 shadow-lg rounded-2xl">
      <h3 className="text-gray-800 font-heading font-bold text-2xl mb-4">
        Send Us A Message
      </h3>

      {/* form */}
      <form action="">
        {/* name + email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-gray-600">Name</label>
            <input
              type="text"
              required
              className="px-6 py-3 w-full rounded focus:outline-none border-2 border-accent/50 placeholder:text-gray-400"
              placeholder="Enter a name"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              type="email"
              required
              className="px-6 py-3 w-full rounded focus:outline-none border-2 border-accent/50 placeholder:text-gray-400"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* telephone */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Telephone</label>
          <input
            type="number"
            required
            className="px-6 py-3 w-full rounded focus:outline-none border-2 border-accent/50 placeholder:text-gray-400"
            placeholder="Enter your telephone number"
          />
        </div>

        {/* service */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Service</label>
          <select
            defaultValue=""
            className="px-6 py-3 w-full rounded focus:outline-none border-2 border-accent/50 text-gray-500"
          >
            <option value="" disabled className="text-gray-400">
              Select a Service
            </option>
            {services.map((item, index) => (
              <option key={index} value={item} className="text-gray-700">
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* message */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Message</label>
          <textarea
            rows={4}
            className="px-6 py-3 w-full rounded focus:outline-none border-2 border-accent/50 placeholder:text-gray-400"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* btn */}
        <button className="px-6 py-2.5 bg-accent text-white rounded-full cursor-pointer hover:text-accent hover:bg-white hover:border-accent border transition-all duration-500 ease-in-out hover:-translate-y-0.5 shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

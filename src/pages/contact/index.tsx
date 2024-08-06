import React from "react";

import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";


const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-2 text-[#835782]">
            Get In Touch
          </h2>
          <p className="mb-4 text-[#212529] opacity-60">
            Get in touch with us and our experts and developers would love to
            contribute their expertise and insights and help you today.
          </p>

          <div className="mb-4">

            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  ">Phone</p>
              <div className="flex flex-row m-3 ">
                <FiPhone className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-5px] ml-2 text-[#6C757D]">99999999999999</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  "> Email </p>
              <div className="flex flex-row m-3 ">
                <MdOutlineMailOutline className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-3px] ml-2 text-[#6C757D] ">Dreamwedding@hotmail.com</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  "> Office address </p>
              <div className="flex flex-row m-3 ">
                <TbCurrentLocation className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-5px] ml-2 text-[#6C757D]">785 15h Street, Office 478 Denver, De 81566</p>
              </div>
            </div>
  
           
          </div>
        </div>
        <div className="md:w-1/2 p-6 bg-[#F8F9FA]">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-300 rounded"
                placeholder=" first name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 border border-gray-300 rounded"
                placeholder=" last name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded"
                placeholder="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="p-2 border border-gray-300 rounded"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#835782] font-semibold rounded"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

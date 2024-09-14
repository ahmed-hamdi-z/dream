import HeroSection from "@/components/hero-pages";
import React from "react";

import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="w-full">
        <HeroSection
          image="/images/bann2.jpeg"
          mainText={t("Reach out")}
          subText={t("Contact")}
        />
      </div>
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden p-6">
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-2 text-[#835782]">
            {t("Get In Touch")}
          </h2>
          <p className="mb-4 text-[#212529] opacity-60">
            {t("Get in touch with us")}
          </p>

          <div className="mb-4">
            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  ">{t("Phone")}</p>
              <div className="flex flex-row m-3 ">
                <FiPhone className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-5px] mx-2 text-[#6C757D]">
                  0509130845
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  "> {t("Email")} </p>
              <div className="flex flex-row m-3 ">
                <MdOutlineMailOutline className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-3px] mx-2 text-[#6C757D] ">
                  info@dream.sa.com
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#495057] text-lg  ">
                {" "}
                {t("Office address")}{" "}
              </p>
              <div className="flex flex-row m-3 ">
                <TbCurrentLocation className="w-6 h-6 text-[#6C757D]" />
                <p className="text-lg mt-[-5px] mx-2 text-[#6C757D]">
                  Al olaya District - Musaad Al-Anqari
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-6 bg-[#F8F9FA]">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 text-[#835782]">
                {t("First name")}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-300 rounded"
                placeholder={t("First name")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-1 text-[#835782]">
                {t("Last name")}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 border border-gray-300 rounded"
                placeholder={t("Last name")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-[#835782]">
                {t("Email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded"
                placeholder=  {t("Email")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-[#835782]">
                {t("Message")}
              </label>
              <textarea
                id="message"
                name="message"
                className="p-2 border border-gray-300 rounded"
                placeholder= {t("Message")}
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-y-4 mt-3  ">
              <div className="flex gap-2 justify-center items-center">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="select"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
                />
                <label className="w-full  text-sm font-medium text-[#835782] ">
                  {t("Weddings")}
                </label>
              </div>

              <div className="flex gap-2 justify-center items-center">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="select"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
                />
                <label className="w-full  text-sm font-medium text-[#835782] ">
                  {t("Special occasions")}
                </label>
              </div>

              <div className="flex gap-2 justify-center items-center">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="select"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
                />
                <label className="w-full text-sm font-medium text-[#835782] ">
                  {t("Talk to Customer Service")} 
                </label>
              </div>

              <div className="flex gap-2 justify-center items-center">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="select"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
                />
                <label className="w-full  text-sm font-medium text-[#835782] ">
                  {t("Consultation")}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#835782] font-semibold rounded "
            >
              {t("Send Email")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { useTranslation } from "react-i18next";

import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { BsSnapchat } from "react-icons/bs";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative  pt-8 pb-6 bg-[#835782] ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap text-left lg:text-left rtl:text-right">
          <div className="w-full lg:w-6/12 px-4">
            <img className="w-24" src="/images/foot-logo.png" />
            <h5 className="tracking-wide  my-4 text-white">
              {t("footer disc")}
            </h5>
            <div className="flex items-center justify-start gap-2 mt-6 lg:mb-0 mb-6">
              <p className="text-white  text-normal"> {t("Follow US")} </p>
              <a href="https://www.instagram.com/dream_events_sa">
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.tiktok.com/@dream_events_sa">
                <SiTiktok className="w-6 h-6 text-white" />
              </a>
              <a href="https://x.com/Dream_Events_sa">
                <FaXTwitter className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.snapchat.com/add/dream_weding?invite_id=MCBxcEIP&locale=en_SA%40calendar%3Dgregorian&share_id=5F4K0zPAS1aUnW6OwMQzuw&sid=4413c80ae9e140dfa1b88d1470b45347">
                
                <BsSnapchat className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.facebook.com/Dreameventksa/">
                <CiFacebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 h-full">
            <div className="flex flex-wrap items-center mt-2">
              <div className="w-full  flex flex-col md:mb-36 md:items-center items-start text-center lg:w-4/12  "> 
                <span className="block capitalize text-white text-sm font-bold ml-[-10px] mb-2">
                  {t("Information")}
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white block pb-2 text-sm"
                      href="/about"
                    >
                      {t("About")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white block pb-2 text-sm"
                      href="#"
                    >
                      {t("Services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white block pb-2 text-sm"
                      href=""
                    >
                      {t("Portfolio")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 pt-3">
                <span className="block capitalize text-white text-sm font-bold ml-[-10px] mb-2">
                  {t("Contact")}
                </span>
                <ul className="list-unstyled">
                  <li className="text-[#fff]">
                    {t("Phone")}
                    <a
                      className="text-white hover:text-white text-sm flex my-3 ml-3"
                      href="tel:0509130845"
                    >
                      <FiPhone className="w-6 h-6 text-[#fff] cursor-text" />{" "}
                      <span className=" mx-2 text-base">0509130845</span>
                    </a>
                  </li>
                  <li className="text-[#fff]">
                    {t("Email")}
                    <a
                      className="text-white hover:text-white text-sm flex my-3 ml-3"
                      href="mailto:info@dream.sa.com"
                    >
                      <MdOutlineMailOutline className="w-6 h-6 text-[#fff] cursor-text " />{" "}
                      <span className=" mx-10 text-base absolute">info@dream.sa.com</span>
                    </a>
                  </li>
                  <li className="text-[#fff]">
                    {t("Office address")}
                    <a
                      className="text-white hover:text-white cursor-text text-sm flex my-3 ml-3"
                      href="#"
                    >
                      <TbCurrentLocation className="w-6 h-6 text-[#fff] cursor-text" />{" "}
                      <span className=" mx-10 text-base absolute">Al olaya District - Musaad Al-Anqari</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <h1 className="text-white">Copyright © 2024Dream Wedding</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

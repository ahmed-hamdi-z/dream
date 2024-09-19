import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { BsSnapchat } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  console.log(scrollTarget);
  const handleScroll = (id: string, path?: string) => {
    const element = document.getElementById(id);

    if (element) {
      // If the section exists on the current page, scroll to it
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust the offset if needed
        behavior: "smooth",
      });
    } else if (path) {
      // If the section doesn't exist on the current page, navigate to the correct page and store the target section ID
      setScrollTarget(id);
      navigate(path);
    }
  };
  return (
    <div className="relative  pt-8 pb-6 bg-[#835782] ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap text-left lg:text-left rtl:text-right">
          <div className="w-full lg:w-6/12 px-4">
            <img className="w-24" src="/images/foot-logo.png" />
            <h5 className="tracking-wide my-4 text-white">
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
                    <button className="text-white hover:text-white block pb-2 text-sm" onClick={() => handleScroll("about", "/")}>{t("About")}</button>
                  </li>
                  <li>
                    <button className="text-white hover:text-white block pb-2 text-sm" onClick={() => handleScroll("services", "/")}>{t("Services")}</button>
                  </li>
                  <li>
                    <Link className="text-white hover:text-white block pb-2 text-sm" to="/portfolio">{t("Portfolio")}</Link>
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
                      className="text-white hover:text-white cursor-pointer text-sm flex my-3 ml-3"
                      href="https://www.google.com/maps/place/24%C2%B042'45.6%22N+46%C2%B041'02.5%22E/@24.7126732,46.6862021,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.7126732!4d46.6840134?hl=ar&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                    >
                      <TbCurrentLocation className="w-6 h-6 text-[#fff] cursor-pointer" />{" "}
                      <span className=" mx-10 text-base absolute"> {t("Al olaya District - Musaad Al-Anqari")}</span>
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

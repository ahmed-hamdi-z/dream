// Dependencies
import { FC } from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";


import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "../lang/lang-btn";

const MainNavbar: FC = () => {
  return (
    <>
      <FlyoutNav />

      <div className=" bg-neutral-50" />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`absolute w-[90%] top-8 mx-auto p-2 md:right-14 xl:right-14 right-5 rounded-xl z-50  text-[#835782] 
      transition-all duration-300 ease-out lg:px-12 
      ${scrolled
          ? "bg-white py-3 shadow-xl"
          : "bg-neutral-950/0  shadow-none bg-white"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="/"><img src="/images/logo.png" /></a>
        <div className="hidden gap-80 lg:flex ">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 font-monotype ">
      <Link to="/">{t("Home")}</Link>
      <a href="/#about">{t("About")}</a>
      <a href="/#services">{t("Services")}</a>
      <Link to="/portfolio">{t("Portfolio")}</Link>

    </div>
  );
};

const CTAs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      <LanguagesBtn />
      <Link to="/contact" className="rounded-lg border-2  px-4 py-2 text-white bg-[#835782] ">
        {t("Contact")}
      </Link>
    </div>
  );
};

const MobileMenu = () => {
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
  const [open, setOpen] = useState(false);

  return (
    <div className="md:block lg:hidden flex">
      <div className="flex flex-row-reverse gap-4">
        <button onClick={() => setOpen(true)} className="block text-3xl">
          <FiMenu />

        </button>
        <div className="p-1">
          <LanguagesBtn />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-[#D4D4D4]"
          >
            <div
              className="flex items-center justify-between p-6"
              onClick={() => setOpen(false)}
            >

              <div className="flex bg-[#D4D4D4] p-4">
                <div className="p-1">
                  <LanguagesBtn />
                </div>
              </div>
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-[#000000]" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 p-6">
              <div onClick={() => setOpen(false)} className="flex flex-col items-center">
                <div className="flex flex-col gap-4 text-3xl font-semibold text-center">
                  <button
                    onClick={() => handleScroll("top", "/")}
                    className="relative px-4 py-2 rounded-md bg-[#835782]  text-white  transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {t("Home")}
                  </button>
                  <button
                    onClick={() => handleScroll("about", "/")}
                    className="relative px-4 py-2 rounded-md bg-[#835782]  text-white  transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {t("About")}
                  </button>
                  <button
                    onClick={() => handleScroll("services", "/")}
                    className="relative px-4 py-2 rounded-md bg-[#835782]  text-white  transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {t("Services")}
                  </button>
                  <Link
                    to="/portfolio"
                    className="relative px-4 py-2 rounded-md bg-[#835782]  text-white  inline-block transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {t("Portfolio")}
                  </Link>
                  <Link
                    to="/contact"
                    className="relative px-4 py-2 rounded-md bg-[#835782]  text-white  inline-block transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {t("Contact")}
                  </Link>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MainNavbar;

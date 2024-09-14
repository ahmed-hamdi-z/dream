// Dependencies
import { FC } from "react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";

import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

import { Link } from "react-router-dom";
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
      className={`absolute w-[90%] top-8 mx-auto p-2 md:right-14 xl:right-14 right-5 rounded-xl z-50  text-black 
      transition-all duration-300 ease-out lg:px-12 
      ${
        scrolled
          ? "bg-white py-3 shadow-xl"
          : "bg-neutral-950/0  shadow-none bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <img src="/images/logo.png" />
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

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
        
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          to={href}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
           
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;
const LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },

  {
    text: "Services",
    href: "#",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

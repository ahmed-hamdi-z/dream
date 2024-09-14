// Dependencies
import { FC, lazy, useEffect } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

import i18n from "i18next";
import Cookies from "js-cookie";

// Config
import { CONFIG } from "@/utils/config";
import Footer from "@/components/footer";
import MainNavbar from "@/components/navbar";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import '@/components/lang/index'

//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const PortfolioDetails = lazy(() => import("@/pages/project-details"));

const Layout: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );

  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();

  }, [lng]);
  return (

    <main className={` direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
        <Route path={CONFIG.root_path} element={<LayoutStructure />} />
        <Route path={CONFIG.contact_path} element={<Contact />} />
        <Route path={CONFIG.portfolio_path} element={<Portfolio />} />
        <Route path={CONFIG.portfolio_details_path} element={<PortfolioDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </main>
    )
};

export default Layout;

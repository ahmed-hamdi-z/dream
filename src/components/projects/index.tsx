// src/EventPlanner.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { eventProjects } from "@/data/data";
import { useTranslation } from "react-i18next";


const Projects: React.FC = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";

  return (
    <div className="flex flex-col items-center justify-center w-full mb-10">
      <div className="flex flex-col items-center justify-center md:p-5 p-3">
        <p className="text-lg text-center text-[#495057] font-monotype">
            {t("Explore our Projects")}
        </p>
        <hr className="w-5 border-2 border-black pb-3" />
        <h1 className="text-2xl font-bold mb-3 text-[#495057] rtl:text-right">
            {t("Explore")}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse">
        {eventProjects.map((service, index) => (
          <div
            key={index}
            className="p-2 rounded-lg shadow-md flex flex-col-reverse items-center justify-center mb-2"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-96 h-[460px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-3">
        {isPortfolioPage ? (
          // Render pagination controls for the portfolio page
          <div className="flex gap-2">
            <button className="rounded-lg border-2 px-3 py-1 text-white bg-[#835782]">
              1
            </button>
            <button className="rounded-lg border-2 px-3 py-1 text-[#835782] bg-[#fff]">
             2
            </button>
          </div>
        ) : (
          // Render the Explore button for the home page
          <Link to="/portfolio" className="rounded-lg border-2 px-4 py-2 text-white bg-[#835782]">
            {t("Explore our Projects")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Projects;

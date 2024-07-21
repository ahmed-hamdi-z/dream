// src/EventPlanner.tsx
import React from "react";

import { eventProjects } from "@/data/data";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-lg mb-8 text-center px-4 md:px-0 text-black">
          Explore our Projects
        </p>
        <h1 className="text-4xl font-bold mb-4 text-black">
          Explore Projects From Intimate Affairs To Grand Celebrations
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse ">
        {eventProjects.map((service, index) => (
          <div
            key={index}
            className=" p-2 rounded-lg shadow-md flex flex-col-reverse items-center justify-center mb-2"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-96 h-[460px] object-cover rounded-xl  "
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-3">
        <button className="rounded-lg border-2  px-4 py-2 font-semibold text-white bg-[#835782] ">
          Explore Our Projects -
        </button>
      </div>
    </div>
  );
};

export default Projects;

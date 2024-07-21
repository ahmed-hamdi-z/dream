
import React from "react";
import { eventServices } from "@/data/data";



const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-serbg bg-cover bg-center bg-no-repeat w-full">
      <div className="flex p-10">
        <h1 className="text-4xl font-bold mb-4 text-white">
          From Vision to Reality: Complete Event Services for Every Occasion
        </h1>
        <p className="text-lg mb-8 text-center px-4 md:px-0 text-white">
          From initial planning to the final celebration, we offer a full range
          of event services to ensure your event is a seamless and memorable
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse ">
        {eventServices.map((service, index) => (
          <div
            key={index}
            className=" p-2 rounded-lg shadow-md flex flex-col-reverse items-center justify-center"
          >
            <div className="p-4 bg-white w-[85%] rounded-xl mt-[-40px] mb-10">
              <h2 className="text-xl font-semibold mb-1">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-96 h-96 object-cover rounded-xl border-[10px] border-white "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

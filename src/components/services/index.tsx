import React from "react";
import { eventServices } from "@/data/data";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-serbg bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="flex flex-col items-center justify-center px-5">
        <div className="flex p-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg text-white font-monotype px-4">services</h3>
            <hr className="w-5 ml-8  border-2 border-white " />
            <h1 className="text-4xl font-bold mb-4 text-white mt-3 md:mr-32">
              From Vision to Reality: Complete <br /> Event Services for Every Occasion
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] w-96 text-justify text-white mt-5 tracking-tight">
              From initial planning to the final celebration, we offer a full
              range of event services to ensure your event is a seamless and
              memorable experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse z-50 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {eventServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-2 rounded-lg  flex flex-col-reverse items-center justify-center"
              variants={itemVariants}
            >
              <div className="w-[75%] rounded-2xl mt-[-40px] hover:bg-[#835782] group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)]  group bg-white ">
                <div className=" group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] p-3 bg-white rounded-2xl">
                  <h2 className="text-xl font-semibold group-hover:text-white ">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 group-hover:text-white w-5/6 tracking-wider mt-2 text-base md:text-sm lg:text-sm transition-all duration-300 ease-in-out">
                    {service.description}
                  </p>
                </div>
              </div>

              <img
                src={service.image}
                alt={service.title}
                className="w-96 h-96 object-cover rounded-xl border-[10px] border-white group-hover:text-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

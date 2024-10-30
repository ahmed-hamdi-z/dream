import React from "react";
import { eventServices } from "@/data/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();

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
    <div
      className="bg-serbg bg-cover bg-center bg-no-repeat overflow-hidden rtl:text-right"
      id="services"
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="flex p-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg text-white font-monotype px-4 md:w-auto w-64 ">
              {t("Services")}
            </h3>
            <hr className="w-5 ml-8 border-2 border-white rtl:hidden" />
            <div className="flex md:flex-row flex-col w-full ">
              <h1 className="md:text-4xl text-3xl mx-5 font-bold  text-white ">
                {t("From Vision to Reality")}
              </h1>
              <p className="text-[16px] ltr:text-justify text-white tracking-tight md:mt-2 mt-4  ">
                {t("services disc")}
              </p>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>
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
              className="p-2 rounded-lg flex flex-col-reverse items-center justify-center"
              variants={itemVariants}
            >

              <div className="flex flex-col items-center justify-center rounded-2xl hover:bg-[#835782] group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] group  z-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-xl border-8 border-white group-hover:text-white"
                />
                <div className="group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] p-3 bg-white rounded-2xl w-[90%] mt-[-40px]">
                  <h2 className="text-xl text-[#495057] font-semibold group-hover:text-white ">
                    {t(service.title)}
                  </h2>
                  <p className="text-[#495057] group-hover:text-white w-full tracking-wider mt-2 text-base md:text-sm lg:text-sm transition-all duration-300 ease-in-out">
                    {t(service.description)}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

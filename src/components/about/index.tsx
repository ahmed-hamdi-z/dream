// Dependencies
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutComp: FC = () => {
  const { t } = useTranslation();
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Set once to true to animate only once

  return (
    <div className="flex flex-col md:flex-row items-start bg-white mb-10 p-2 md:mx-10 rtl:text-right text-[#495057] mt-4" id="about">
      <div className="md:w-1/2 w-full">
        <img
          src="/images/about.jpeg"
          alt="People planning a wedding event"
          className="rounded-3xl w-full md:h-[90vh] h-64 object-cover"
        />
      </div>
      <motion.div
        ref={ref}
        className="md:w-1/2 w-full md:ml-2 px-4 mt-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView
        transition={{ duration: 1, delay: 0.2 }}
        variants={textVariants}
      >
        <h6 className="mb-1 font-monotype"> {t("About us")}</h6>
        <hr className="w-5 ml-5 rtl:hidden border-2 border-black pb-3" />
        <h2 className="text-4xl font-bold mb-2">
          {t("A Passion for Creating Exceptional Events")}
        </h2>

        <p className="text-gray-700">{t("about disc")}</p>
        <div className="flex items-center gap-3 mt-3">
          <button className="rounded-lg border-2 px-4 py-2.5 font-semibold text-white bg-[#835782]">
            {t("Explore Services")}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutComp;

import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Vision: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center bg-white md:p-6 md:mb-10 overflow-hidden md:mx-5 rtl:text-right text-[#495057] mt-5">
      <motion.div
        className="md:w-1/2 w-full p-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      > 
        <img
          src="/images/vision.jpeg"
          alt="People planning a wedding event"
          className="rounded-3xl w-full h-[300px] object-cover"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 w-full p-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h6 className="mb-1 font-monotype">{t("Our Vision")}</h6>
        <hr className="w-5 ml-5  border-2 border-black pb-3" />
        <h2 className="md:text-4xl text-3xl font-bold mb-2 ">
        {t("Inspiring Moments, Creating Memories")}
        </h2>
        <p className="text-gray-700 mb-2">
        {t("vision disc")}
        </p>
      </motion.div>
    </div>
  );
};

export default Vision;

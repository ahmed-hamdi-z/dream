import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Mission: FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row items-center bg-white p-2 md:mb-10 md:mx-10 rtl:text-right text-[#495057]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 w-full p-4 mt-4">
        <h6 className="mb-1 font-monotype"> {t("Our Mission")}</h6>
        <hr className="w-5 ml-5 border-2 border-black pb-3" />
        <h2 className="text-4xl font-bold mb-2">
           {t("Crafting Unique and Exceptional Events")}
        </h2>
        <p className="text-gray-700 mb-2">
        {t("mission disc")}
        </p>
      </div>
      <div className="md:w-1/2 w-full  flex justify-end">
        <img
          src="/images/mission.jpeg"
          alt="People planning a wedding event"
          className="rounded-3xl w-full h-[300px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Mission;

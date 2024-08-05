import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Mission: FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center bg-white p-6 mb-10 md:mx-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 w-full p-4">
        <h6 className="mb-1 font-monotype ">Our Mission</h6>
        <hr className="w-5 ml-5  border-2 border-blackq pb-4" />
        <h2 className="text-4xl font-bold mb-2">
          Crafting Unique and Exceptional Events
        </h2>
        <p className="text-gray-700 mb-2">
          Our mission is to transform dreams into unforgettable realities by
          crafting extraordinary and personalized events. We are dedicated to
          exceeding client expectations through meticulous planning, innovative
          design, and impeccable execution. By forging strong partnerships built
          on trust and mutual respect, we aim to create events that resonate
          deeply, leaving a lasting impression on every guest.
        </p>
        {t("title")}
      </div>
      <div className="md:w-1/2 w-full p-4 flex justify-end">
        <img
          src="/images/sec.jpeg"
          alt="People planning a wedding event"
          className="rounded-3xl w-full h-[300px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Mission;

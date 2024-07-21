// Dependencies
import { FC } from "react";

import { useTranslation } from "react-i18next";

const Mission: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="md:w-1/2 w-full p-4">
        <h6> Our Mission </h6>
        <h2 className="text-4xl font-bold mb-4">
          Crafting Unique and Exceptional Events
        </h2>
        <p className="text-gray-700 mb-2">
          Our mission is to transform dreams into unforgettable realities by
          crafting extraordinary and personalized events. We are dedicated to
          exceeding client expectations through meticulous planning, innovative
          design, and impeccable execution. By forging strong partnerships built
          on trust and mutual respect, we aim to create events that resonate
          deeply, leaving a lasting impression on every guest.
        </p>{" "}
        {t("title")}
      </div>
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/images/sec.jpeg"
          alt="People planning a wedding event"
          className="rounded-lg w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default Mission;

// Dependencies
import { FC, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";



const CountUpStats: FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col justify-between rtl:font-bien my-24 font-monotype ">

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:grid-cols-4 text-[#fff] text-xl">
        <div className=" ">
          {" "}
          <Stat num={9} suffix="" subheading={t("Years Of Experience")} />
        </div>
        <div className=" ">
          <Stat
            num={125}
            decimals={0}
            suffix=""
            subheading={t("Satisfied Customers")}
          />
        </div>
        <div className="text-xl ">
          <Stat num={150} suffix="" subheading={t("Completed Projects")} />
        </div>
        <div className=" ">
          {" "}
          <Stat num={88} suffix="" subheading={t("Ready Equipment")} />
        </div>
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center ">
      <p className="mb-2 text-center text-6xl font-bold ">
        <span className="m-2">+</span>
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-white">{subheading}</p>
    </div>
  );
};

export default CountUpStats;

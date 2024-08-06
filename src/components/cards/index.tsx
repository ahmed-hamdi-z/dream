import img from "../../../public/images/idea.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();

  return (
    <motion.div className="w-[90%] mx-auto mt-[-50px] md:mb-24 md:pr-10"
    initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      >
      <div className=" grid gap-16 grid-cols-1 lg:grid-cols-3 rtl:text-right  ">
        <Card
          title= {t("Expertise & Creativity")}
          subtitle={t("Expertise sub")} 
          href="#"
          Icon={img}
        />
        <Card
          title= {t("Unmatched Service")}
          subtitle= {t("Unmatched sub")}
          href="#"
          Icon={img}
        />
        <Card
          title= {t("Extensive Network")}
          subtitle= {t("Extensive sub")}
          href="#"
          Icon={img}
        />
      </div>
    </motion.div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: string;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-[400px] h-[215px] p-4 rounded-xl relative overflow-hidden group bg-white hover:bg-[#835782] shadow-sm shadow-black">
      <div
        className="absolute inset-0  group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] group-hover:text-white transition-transform duration-300"/>
     
      <div className="mb-2 text-2xl flex rtl:justify-end group-hover:text-white transition-colors relative z-10 duration-300">
        <img src={Icon} alt="#" />
      </div>
      <h3 className="font-bold text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 mb-2">
        {title}
      </h3>
      <p className="text-slate-950 group-hover:text-white relative z-10 duration-300 ">
        {subtitle}
      </p>
    </a>
  );
};

export default Cards;

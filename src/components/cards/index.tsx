import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className=" md:mt-[-70px] mt-[-40px] md:p-10 flex items-center justify-center p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 rtl:text-right">
        <Card
          title={t("Expertise & Creativity")}
          subtitle={t("Expertise sub")}
          Icon={() => (
            <img
              src="/images/ex.svg"
              alt="Expertise & Creativity"
              className="w-10 h-10"
            />
          )}
        />
        <Card
          title={t("Unmatched Service")}
          subtitle={t("Unmatched sub")}
          Icon={() => <img src="/images/unmatched.svg" alt="Unmatched Service" className="w-10 h-10"/>}
        />
        <Card
          title={t("Extensive Network")}
          subtitle={t("Extensive sub")}
          Icon={() => <img src="/images/extensive.svg" alt="Extensive Network" className="w-10 h-10" />}
        />
      </div>
    </motion.div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: () => JSX.Element;
}

const Card = ({ title, Icon, subtitle }: CardType) => {
  return (
    <div className="md:w-[400px] md:h-[215px] p-4 rounded-xl relative overflow-hidden group bg-white hover:bg-[#835782] shadow-sm shadow-black">
      <div className="absolute inset-0 group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] group-hover:text-white transition-transform duration-300" />

      <div className="mb-2 w-full flex rtl:flex-row-reverse group-hover:text-white transition-colors relative z-10 duration-300">
        <Icon />
      </div>
      <h3 className="font-bold text-lg text-[#495057] group-hover:text-white relative z-10 duration-300 mb-2">
        {title}
      </h3>
      <p className="text-[#495057] group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Cards;

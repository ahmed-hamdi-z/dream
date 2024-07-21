import img from "../../../public/images/idea.png";

const Cards = () => {
  return (
    <div className="w-[90%] mx-auto mt-[-50px]">
      <div className=" grid gap-16 grid-cols-1 lg:grid-cols-3  ">
        <Card
          title="Expertise & Creativity"
          subtitle="Our team of experienced and creative event planners will guide you through every step of the process, ensuring your event is flawless and reflects your unique style."
          href="#"
          Icon={img}
        />
        <Card
          title="Unmatched Service "
          subtitle=" We pride ourselves on providing personalized service and close attention to detail, ensuring every aspect of your event is meticulously planned and executed."
          href="#"
          Icon={img}
        />
        <Card
          title="Extensive Network"
          subtitle="We have established relationships with the finest vendors in the region, from caterers and venues to florists and entertainment providers."
          href="#"
          Icon={img}
        />
      </div>
    </div>
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
      className="w-[400px] h-[215px] p-4 rounded-xl relative overflow-hidden group bg-white hover:bg-[#835782] "
    >
      <div className="absolute inset-0  group-hover:bg-[#835782] group-hover:text-white transition-transform duration-300" />

      <div className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-white  transition-transform duration-300">
        {" "}
        <img src={Icon} alt="#" />{" "}
      </div>
      <div className="mb-2 text-2xl text-[#D196C033] group-hover:text-white transition-colors relative z-10 duration-300">
        {" "}
        <img src={Icon} alt="#" />{" "}
      </div>
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 mb-1">
        {title}
      </h3>
      <p className="text-slate-950 group-hover:text-white relative z-10 duration-300 ">
        {subtitle}
      </p>
    </a>
  );
};

export default Cards;

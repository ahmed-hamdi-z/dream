// Dependencies
import { FC, lazy } from "react";

// Components

const AboutComp = lazy(() => import("@/components/about"));
const Cards = lazy(() => import("@/components/cards"));
// const Footer = lazy(() => import("@/components/footer"));
const Vision = lazy(() => import("@/components/vision"));
const Services = lazy(() => import("@/components/services"));
const Projects = lazy(() => import("@/components/projects"));
const Pricing = lazy(() => import("@/components/pricing"));
const Mission = lazy(() => import("@/components/mission"));



const Home: FC = () => {
  return (
    <div className="w-[100%] h-full">
      <div className="">
      <Cards />
      </div>
      <div className="">
      <AboutComp />
      </div>
      <Mission />
      <div className="">
      <Vision />
      </div>
      <Services />
      <div className="">
      <Projects />
      </div>
       <div className="">
       <Pricing />
      </div>
    </div>
  );
};

export default Home;

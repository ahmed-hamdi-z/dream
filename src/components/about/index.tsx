// Dependencies
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutComp: FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 } 
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Set once to true to animate only once

  return (
    <div className="flex flex-col md:flex-row items-start bg-white p-6 mb-10 md:mx-10">
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/images/sec.jpeg"
          alt="People planning a wedding event"
          className="rounded-3xl w-full h-[100vh] object-cover"
        />
      </div>
      <motion.div
        ref={ref} // Attach ref here
        className="md:w-1/2 w-full p-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView
        transition={{ duration: 1, delay: 0.2 }}
        variants={textVariants}
      >
        <h6 className="mb-1 font-monotype">About us</h6>
        <hr className="w-5 ml-5  border-2 border-blackq pb-4" />
        <h2 className="text-4xl font-bold mb-2">
          A Passion for Creating Exceptional Events.
        </h2>

        <p className="text-gray-700">
          We know how important happy memories are. We are a team of passionate
          experts who believe planning your event shouldn't be stressful. We've
          got years of experience in making events easy and comfortable for our
          clients. Offering understanding for every detail, from finding the
          perfect venue to creating stunning décor. We listen to your ideas and
          create a personalized plan that fits your budget. We'll be your
          trusted partner, keeping you informed and stress-free every step of
          the way.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <button className="rounded-lg border-2 px-4 py-2.5 font-semibold text-white bg-[#835782]">
            Explore Services
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutComp;

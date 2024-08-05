import { FC } from "react";
import { motion } from "framer-motion";

const Vision: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 mb-10 overflow-hidden md:mx-5">
      <motion.div
        className="md:w-1/2 w-full p-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      > 
        <img
          src="/images/sec.jpeg"
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
        <h6 className="mb-1 font-monotype"> Our Vision </h6>
        <hr className="w-5 ml-5  border-2 border-blackq pb-4" />
        <h2 className="text-4xl font-bold mb-2">
          Inspiring Moments, Creating <br /> Memories
        </h2>
        <p className="text-gray-700 mb-2">
          At <span className="text-pink-500 font-semibold">Dream Wedding</span>,
          We envision a world where every occasion is celebrated with
          unparalleled elegance and sophistication. We aspire to redefine the
          industry standards by consistently delivering exceptional experiences.
          Through our passion for creativity and our commitment to client
          satisfaction, we will be the preferred choice for those seeking to
          make their events truly extraordinary.
        </p>
      </motion.div>
    </div>
  );
};

export default Vision;

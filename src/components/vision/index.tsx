// Dependencies
import { FC } from "react";

const Vision: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/images/sec.jpeg"
          alt="People planning a wedding event"
          className="rounded-lg w-full h-[210px] object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full p-4">
        <h6> Our Vision </h6>
        <h2 className="text-4xl font-bold mb-4">
          Inspiring Moments, Creating <br /> Memories
        </h2>
        <p className="text-gray-700 mb-2">
          At <span className="text-pink-500 font-semibold">Dream Wedding</span>,
          We envision a world where every occasion is celebrated with
          unparalleled elegance and sophistication. We aspire to redefine the
          industry standards by consistently delivering exceptional experiences.
          Through our passion for creativity and our commitment to client
          satisfaction, we will be the preferred choice for those seeking to
          make their events truly extraordinary
        </p>
      </div>
    </div>
  );
};

export default Vision;

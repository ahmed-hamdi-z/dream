// Dependencies
import { FC } from "react";

const AboutComp: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="md:w-1/2 w-full p-4">
        <img
          src="/images/sec.jpeg"
          alt="People planning a wedding event"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full p-4">
        <h6> Abou us </h6>
        <h2 className="text-4xl font-bold mb-4">
          A Passion for Creating Exceptional Events
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
      </div>
    </div>
  );
};

export default AboutComp;

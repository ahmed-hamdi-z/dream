import React from 'react';

interface HeroSectionProps {
  image: string; 
  subText: string;
  mainText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, mainText, subText }) => {
  return (
    <div
      className={`relative flex items-center h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`absolute inset-0 bg-black opacity-50`}
      ></div>
      <div className="relative rtl:text-right text-left px-4 sm:px-8 max-w-xl top-16 text-white">
        <p className="mb-2 text-md font-monotype">{subText}</p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight">
          {mainText}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;

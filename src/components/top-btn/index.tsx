import React, { useState, useEffect } from 'react';

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" bg-[#835782] text-white w-12 h-12 rounded-full text-3xl shadow-md hover:bg-[#502850] focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default TopButton;

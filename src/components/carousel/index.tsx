import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { t } from "i18next";

const imgs = ["/images/bann1.jpeg", "/images/bann2.jpeg", "/images/bann3.jpeg"];
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
    </div>
  );
};

export default SwipeCarousel;

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 1 : 1,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-screen shrink-0 rounded-xl object-cover"
          >
            <div className="w-full flex flex-col rtl:items-end justify-center md:mt-64 mt-56 ml-3 md:ml-10 rtl:ml-[-40px] ">
              <h3 className="text-white font-monotype mx-2 mb-2" >{t("Creating Unforgettable Experiences")}</h3>
              <h1 className="text-white text-4xl md:text-6xl md:w-5/12  rtl:text-right">
                {t("To be the premier event planning service, inspiring lasting memories.")}
              </h1>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

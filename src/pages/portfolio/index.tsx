import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/hero-pages";

interface ImageData {
  img: string;
  i: number;
}
declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
  }

  interface HTMLElement {
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

const Gallery: FC = () => {
  const [data, setData] = useState<ImageData>({ img: "", i: 0 });
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { t } = useTranslation();

  const viewImage = useCallback((img: string, i: number) => {
    setData({ img, i });
    setIsPlaying(false);
  }, []);

  const selectImages = useCallback((imgs: string[]) => {
    setSelectedImages(imgs);
    setData({ img: imgs[0], i: 0 });
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying && selectedImages.length > 0) {
      interval = setInterval(() => {
        setData((prevData) => {
          let i = prevData.i;
          if (i < selectedImages.length - 1) {
            return { img: selectedImages[i + 1], i: i + 1 };
          } else {
            return { img: selectedImages[0], i: 0 };
          }
        });
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, selectedImages]);

  const imgAction = useCallback(
    (action: string) => {
      setData((prevData) => {
        let i = prevData.i;
        if (action === "next-img" && i < selectedImages.length - 1) {
          return { img: selectedImages[i + 1], i: i + 1 };
        } else if (action === "prev-img" && i > 0) {
          return { img: selectedImages[i - 1], i: i - 1 };
        } else if (action === "close") {
          return { img: "", i: 0 };
        }
        return prevData;
      });
      setIsPlaying(false);
    },
    [selectedImages]
  );

  const galleryItems = useMemo(
    () =>
      images.map(({ id, imgUrl, imgs }) => (
        <img
          key={id}
          src={imgUrl}
          className="xl:w-80 md:w-80 w-auto h-96 block cursor-pointer rounded-md transition-transform md:transition-opacity duration-300 ease-in-out transform hover:scale-95 hover:opacity-20 s"
          alt={`Gallery item ${id}`}
          onClick={() => selectImages(imgs)}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/images/placeholder.webp")}
        />
      )),
    [selectImages]
  );

  const thumbnailItems = useMemo(
    () =>
      selectedImages.map((image, i) => (
        <img
          key={`thumb-${i}`}
          src={image}
          className={`w-20 h-20 cursor-pointer m-1 rounded-md transition-transform duration-300 ease-in-out transform overflow-hidden ${
            i === data.i ? "border-2 border-white" : "hover:scale-105"
          }`}
          alt={`Thumbnail ${i}`}
          onClick={() => viewImage(image, i)}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = "/images/placeholder.webp")}
        />
      )),
    [selectedImages, data.i, viewImage]
  );

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 1));
  };

  return (
    <>
      {data.img && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-950 bg-opacity-90 flex flex-col justify-center items-center z-50"
          role="dialog"
          aria-labelledby="image-viewer"
        >
          <button
            onClick={() => imgAction("close")}
            className="absolute top-10 right-10 font-bold mt-1 w-7 h-7 text-white text-3xl z-50"
            aria-label="Close"
          >
            <IoCloseSharp />
          </button>
          <button
            onClick={() => imgAction("prev-img")}
            className="absolute left-10 text-white text-3xl z-50"
            aria-label="Previous Image"
          >
            <FaArrowLeft />
          </button>
          <img
            src={data.img}
            className="w-auto max-w-[90%] max-h-[70%]"
            alt="Enlarged view"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <button
            onClick={() => imgAction("next-img")}
            className="absolute right-10 text-white text-3xl z-50 "
            aria-label="Next Image"
          >
            <FaArrowRight />
          </button>
          <div className="mt-5 flex overflow-x-auto w-full justify-center">
            {thumbnailItems}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white text-2xl mt-5 absolute top-0 right-20"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="text-white text-2xl mt-5 absolute top-0 left-20"
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <div className="absolute top-12 left-32 flex space-x-5">
            <button
              onClick={zoomIn}
              className="text-white text-2xl"
              aria-label="Zoom In"
            >
              <FaSearchPlus />
            </button>
            <button
              onClick={zoomOut}
              className="text-white text-2xl"
              aria-label="Zoom Out"
            >
              <FaSearchMinus />
            </button>
          </div>
        </div>
      )}
      <div className="w-full overflow-hidden">
        <div>
          <HeroSection image="/images/bann3.jpeg"
          mainText={t("Showcasing A Diverse Range Of Events Projects")}
          subText={t("OUR PROJECTS")}  />
        </div>
        <div className="p-2">
          <div className="flex flex-col items-center justify-center p-3">
            <p className="text-lg text-center md:px-0 text-[#495057] font-monotype">
              {t("Explore our Projects")}
            </p>
            <hr className="w-5 border-2 border-black pb-4" />
            <h1 className="text-2xl font-bold mb-4 text-[#495057]">
              {t("Explore")}
            </h1>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="5px">{galleryItems}</Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default React.memo(Gallery);

export type ImageType = {
  id: number;
  imgUrl: string;
  imgs: string[];
};

export const images: ImageType[] = [
  {
    id: 1,
    imgUrl: "/images/p1.JPG",
    imgs: [
      "/images/p1.JPG",
      "/images/p7.JPG",
      "/images/p8.JPG",
      "/images/p9.JPG",
    ],
  },
  {
    id: 2,
    imgUrl: "/images/p2.JPG",
    imgs: [
      "/images/p2.JPG",
      "/images/p10.JPG",
      "/images/p11.JPG",
      "/images/p12.JPG",
    ],
  },
  {
    id: 3,
    imgUrl: "/images/p3.JPG",
    imgs: [
      "/images/p3.JPG",
      "/images/p13.JPG",
      "/images/p14.JPG",
      "/images/p15.JPG",
    ],
  },
  {
    id: 4,
    imgUrl: "/images/p4.JPG",
    imgs: [
      "/images/p4.JPG",
      "/images/p16.JPG",
      "/images/p17.JPG",
      "/images/p7.JPG",
    ],
  },
  {
    id: 5,
    imgUrl: "/images/p5.JPG",
    imgs: [
      "/images/p5.JPG",
      "/images/p8.JPG",
      "/images/p2.JPG",
      "/images/p1.JPG",
    ],
  },
  {
    id: 6,
    imgUrl: "/images/p6.JPG",
    imgs: [
      "/images/p6.JPG",
      "/images/p9.JPG",
      "/images/p2.JPG",
      "/images/p8.JPG",
    ],
  },
];

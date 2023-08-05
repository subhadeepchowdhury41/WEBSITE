import React, { useEffect, useState } from "react";
import "../../../styles/about/carousel/carousel.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Image from "next/image";
import "./page.css";

function Carousel(props) {
  const [i, setI] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const AddOne = () => {
    let len = props.carouselData.length;
    if (i < len - 1) {
      setI(i + 1);
    } else {
      setI(0);
    }
  };
  const ReduceOne = () => {
    let len = props.carouselData.length;
    if (i == 0) {
      setI(len - 1);
    } else {
      setI(i - 1);
    }
  };
  useEffect(() => {
    const id = setInterval(AddOne, 3000);
    return () => clearInterval(id);
  }, [AddOne]);
  return (
    <div className="w-fit m-auto pad-adjust flex items-center justify-center">
      <div
        className="relative max-w-[1250px] bg-gray-00 h-adjust animate rounded-2xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "59vh",
          width: "fit-content",
        }}
      >
        <Image
          className="carousel-image animate"
          src={require(`../../../assets/gallery/${props.carouselData[i].url}.jpg`)}
          alt="image"
        />
        <div className="absolute flex z-10 h-auto mb-8 gap-1 w-full bottom-0 items-center justify-center overflow-hidden">
          {props.carouselData.map((index) => {
            return (
              <div
                className={
                  index.index === i
                    ? "bg-white h-[5px] w-[20px] border cursor-pointer"
                    : "bg-[rgba(110,110,110,0.67)] h-[5px] w-[20px] cursor-pointer"
                }
                onClick={() => setI(index.index)}
                style={{
                  maxWidth: `${windowWidth > 500 ? 20 : 15}px`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

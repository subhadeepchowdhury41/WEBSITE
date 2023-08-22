import React, { useEffect, useState } from "react";
import "../../../styles/about/carousel/carousel.css";

function Carousel(props) {
  const [i, setI] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
  useEffect(() => {
    console.log("data changed");
    setI(0);
  }, [props.carouselData]);
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`relative w-full bg-gray-400 ${
          props.height === "small" ? `h-[300px]` : "h-adjust"
        } ${props.border === "none" ? "" : "rounded-2xl"}`}
        style={
          props.carouselData[i] && {
            backgroundImage: `url(${props.carouselData[i].url})`,
            backgroundSize: "100% 100%",
            borderRadius: "1rem",
          }
        }
      >
        <div
          className={`absollute w-full ${
            props.height === "small" ? "min-h-[250px]" : "h-adjust"
          } flex items-center`}
        >
          <div className="absolute flex z-[20] w-full items-center justify-between px-4">
            <div
              className="h-8 w-8 rounded-[50%] flex items-center justify-center pr-1 cursor-pointer"
              onClick={ReduceOne}
            ></div>
            <div
              className="h-8 w-8 rounded-[50%] flex items-center justify-center pl-1 cursor-pointer"
              onClick={AddOne}
            ></div>
          </div>
        </div>
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
                style={{ maxWidth: `${windowWidth > 500 ? 15 : 10}px` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

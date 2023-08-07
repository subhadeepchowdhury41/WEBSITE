import React, { useState, useEffect, useRef } from "react";
import styles from "./css/ImageCarousel.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(handleNextClick, 3000); // Auto-scroll every 3 seconds
    };
    const stopAutoScroll = () => clearInterval(intervalRef.current);

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="carouselContainer">
      <img
        className="carouselImage"
        src={images[currentImageIndex]}
        alt="Carousel Image"
      />
      <div className="buttonsContainer">
        <button className="previousButton" onClick={handlePreviousClick}>
          <NavigateBeforeIcon />
        </button>
        <button className="nextButton" onClick={handleNextClick}>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;

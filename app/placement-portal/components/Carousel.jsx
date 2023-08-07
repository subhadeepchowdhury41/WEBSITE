import React, { useEffect, useState } from "react";
import "./css/carousel.css"; // Make sure to import the CSS file

const Carousel = ({ images, autoScrollInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoScrollInterval);

    return () => {
      clearInterval(interval);
    };
  }, [autoScrollInterval, images.length]);

  return (
    <div className="carousel-container">
      {/* <img src="/img/pngwing.com.png" /> */}
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 20}vh)`, // Each slide's width is 10%
        }}
      >
        {images.map((imageUrl, index) => (
          <div className="carousel-slide" key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {images.map((imageUrl, index) => (
          <div className="carousel-slide" key={`${index}-clone`}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

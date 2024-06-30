/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "/blog-1.jpg",
    quote: "Make Your Home Like Garden",
  },
  {
    img: "/blog-2.jpg",
    quote: "Create Your Own Small Garden At Home",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Adjusted for smoother transition and to prevent image overflow
  const sliderContainerStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out", // Smoother transition
    transform: `translateX(-${currentIndex * 100}%)`,
    width: "100%", // Ensures the container does not overflow
  };

  const slideStyle = {
    minWidth: "100%", // Prevents image overflow by ensuring each slide only takes up its container width
    height: "100vh",
    display: "flex",
    alignItems: "center", // Centers the quote vertically
    justifyContent: "center", // Centers the quote horizontally
    position: "relative", // Needed for absolute positioning of children
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div style={sliderContainerStyle}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0" // Prevents the slide from shrinking
            style={{ ...slideStyle, backgroundImage: `url(${slide.img})` }}
          >
            <div className="text-center p-4">
              <h1
                className="text-white text-4xl lg:text-6xl mb-4 font-bold"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
              >
                {slide.quote}
              </h1>
              <button type="button" className="btn btn-primary py-sm-3 px-sm-4">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
          )
        }
        className="absolute top-1/2 left-4 z-10 bg-white text-black rounded-full p-2 transform -translate-y-1/2"
        style={{ opacity: 0.7 }}
      >
        <FaChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        className="absolute top-1/2 right-4 z-10 bg-white text-black rounded-full p-2 transform -translate-y-1/2"
        style={{ opacity: 0.7 }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSection;

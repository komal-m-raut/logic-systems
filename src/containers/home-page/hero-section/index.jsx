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
  {
    img: "/blog-3.jpg",
    quote: "Create Your Own Small Garden At Home",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length + 1));
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Duration of the transition
    }
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 1);
      }, 500); // Duration of the transition
    }
  }, [currentIndex]);

  const sliderContainerStyle = {
    display: "flex",
    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none", // Conditional transition
    transform: `translateX(-${(currentIndex + 1) * 100}%)`, // Adjusted for duplicate slides
  };

  const slideStyle = {
    minWidth: "100%", // Prevents image overflow by ensuring each slide only takes up its container width
    height: "90vh",
    display: "flex",
    alignItems: "center", // Centers the quote vertically
    justifyContent: "center", // Centers the quote horizontally
    position: "relative", // Needed for absolute positioning of children
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div style={sliderContainerStyle} className="w-full h-full">
        {/* Duplicate last slide */}
        <div
          className="flex-shrink-0 w-full h-full"
          style={{
            ...slideStyle,
            backgroundImage: `url(${slides[slides.length - 1].img})`,
          }}
        >
          <div className="text-center p-4">
            <h1
              className="text-white text-4xl lg:text-6xl mb-4 font-bold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
            >
              {slides[slides.length - 1].quote}
            </h1>
            <button type="button" className="btn btn-primary py-sm-3 px-sm-4">
              Explore More
            </button>
          </div>
        </div>
        {/* Original slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full"
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
        {/* Duplicate first slide */}
        <div
          className="flex-shrink-0 w-full h-full"
          style={{ ...slideStyle, backgroundImage: `url(${slides[0].img})` }}
        >
          <div className="text-center p-4">
            <h1
              className="text-white text-4xl lg:text-6xl mb-4 font-bold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
            >
              {slides[0].quote}
            </h1>
            <button type="button" className="btn btn-primary py-sm-3 px-sm-4">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-50% z-10"
        style={{ opacity: 0.7 }}
      >
        <FaChevronLeft size="24" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-50% z-10"
        style={{ opacity: 0.7 }}
      >
        <FaChevronRight size="24" />
      </button>
    </div>
  );
};

export default HeroSection;

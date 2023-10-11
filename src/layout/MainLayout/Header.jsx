import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

// const images = [
//   "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
//   "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
//   "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg",
//   "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg",
//   "https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg",
// ];

import Image from "../.././assets/images/building.jpeg";
const Header = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen  absolute min-h-screen z-10 w-full">
        <NavBar />

        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-white text-sm sm:text-lg  text-center">
            ENOCH PROPERTY MANGEMENT SERVICES
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-light w-[95vw] text-center bg-dark my-10 font-sans tracking-wide">
            COMPETENCY{" "}
            <span className="h-3 w-3 bg-white rounded-full inline-block mb-4"></span>{" "}
            TRANSPARENCY{" "}
            <span className="h-3 w-3 bg-white rounded-full inline-block mb-4"></span>{" "}
            PROFESSIONALISM{" "}
          </h1>

          <div className="flex justify-center flex-col items-center sm:flex-row">
            <Link
              to="contact"
              className="transition-colors duration-300 text-white px-5 py-3 text-md rounded-full outline outline-1 sm:mr-5 mb-4 sm:mb-0 hover:text-black hover:bg-white hover:outline-white min-w-[190px] text-center cursor-pointer"
            >
              GET STARTED TODAY
            </Link>
            <Link
              to="properties"
              className="transition-colors duration-300  text-black px-4 py-3 text-md rounded-full bg-white outline outline-1 outline-white hover:text-white hover:bg-transparent ease-out min-w-[190px] text-center cursor-pointer"
            >
              VIEW VACANCIES
            </Link>
          </div>
        </div>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        animationHandler="fade"
        swipeable={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={4000}
        stopOnHover={false}
      >
        <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-center"
            src={Image}
            alt="the "
          />
        </div>
        {/* <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-cover brightness-90"
            src={images[1]}
          />
        </div>
        <div className="carousel-image-item">
          <img
            className="h-full min-h-screen object-cover brightness-90"
            src={images[2]}
          />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Header;

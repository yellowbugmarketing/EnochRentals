import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const MiniHeader = ({ heading, subHeading }) => {
  return (
    <div
      className="overflow-hidden bg-black bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb",
      }}
    >
      <NavBar />
      <div className="max-w-screen-xl px-4 mx-auto mt-28 mb-20">
        <h1 className="text-white text-3xl sm:text-4xl font-primary bg-dark my-5 tracking-wide ">
          {heading}
        </h1>

        <p className="text-[#ffffff99] text-xl font-primary   bg-dark tracking-wide ">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default MiniHeader;

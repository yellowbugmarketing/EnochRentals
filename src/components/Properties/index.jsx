import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import Listings from "./Listings";

const Properties = () => {
  return (
    <>
      <MiniHeader
        heading={"FORT WORTH PROPERTIES FOR RENT"}
        subHeading={""}
      />
      <Listings />
      <Footer />
    </>
  );
};

export default Properties;

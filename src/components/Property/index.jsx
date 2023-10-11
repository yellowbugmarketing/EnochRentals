import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import SingleListing from "./SingleListing";

const Property = () => {
  return (
    <>
      <MiniHeader
        heading={"FORT WORTH PROPERTIES FOR RENT"}
        subHeading={"Find the Perfect Home"}
      />
      <SingleListing />
      <Footer />
    </>
  );
};

export default Property;

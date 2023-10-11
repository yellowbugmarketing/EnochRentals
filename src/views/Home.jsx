import React from "react";
import About from "../components/Home/About";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import ManagementServices from "../components/Home/ManagementServices";
import Reviews from "../components/Home/Reviews";
import SelfManagementBanner from "../components/Home/SelfManagementBanner";
import Vacancies from "../components/Home/Vacancies";
import Header from "../layout/MainLayout/Header";
import Footer from "../reusable/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ManagementServices />
      <SelfManagementBanner />
      <Vacancies />
      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      {/* <Reviews /> */}
      <Footer />
    </>
  );
};

export default Home;

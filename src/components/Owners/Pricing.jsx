import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const Pricing = () => {
  return (
    <div className="">
      <MiniHeader heading={"Plans & Pricing"} subHeading={""} />
      <div className="px-4 py-8  md:p-10  mx-auto font-primary">
        <h1 className="text-center font-semibold text-6xl my-4">
          Plans & Pricing
        </h1>
        <p className="text-center text-xl w-3/4 md:w-1/2 m-auto  font-semibold mb-8 ">
          Choose a property management plan that's right for you. Whether you're
          just getting started with real estate or you're an experienced
          investor, there's a plan for you.
        </p>
      </div>
      <div className=" bg-slate-100 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl  justify-items-center gap-5   mx-auto justify-center py-14">
          <div className=" bg-white p-8 text-center  rounded-md shadow-xl max-w-md">
            <img
              src="https://www.verdeigroup.com/hubfs/VerdeiGroup_February2022/image/5eaee7e523b1780ed7a70631_face-id.svg"
              width="96"
              alt="AUTOPILOT"
              className="mx-auto"
            />
            <h1 className="text-[32px] font-pricing font-bold my-4 ">
              AUTOPILOT
            </h1>
            <p className="font-semibold my-4 text-[#939494]">
              Perfect for investors that want peace of mind with all-inclusive
              service.
            </p>
            <p className="font-pricing text-3xl mb-4">
              <span className="text-6xl">12</span>%/mo
            </p>
            <div className="space-y-1 my-6">
              <p className="text-[#939494] font-semibold">
                per unit - monthly collected rent
              </p>
              <p className="text-[#939494] font-semibold">
                $195 monthly minimum required
              </p>
              <p className="font-bold">+ $0 zero tenant placement fees</p>
            </div>
            <button className="my-4 font-bold px-8 py-3 bg-[#fc9f5b] rounded-md text-white">
              Get Started
            </button>
            <p className="font-bold text-md tracking-wide">
              60-Day Risk Free Guarantee
            </p>
            <p className="font-bold text-md tracking-wide">
              No Upfront Money Required
            </p>
          </div>
          <div className="p-8 text-center  rounded-md shadow-xl bg-white  max-w-md">
            <button className="my-4 text-blue-800 font-bold px-3 py-1 bg-gray-200 rounded-full text-sm  absolute top-0 right-2">
              Most Popular
            </button>
            <img
              src="https://www.verdeigroup.com/hubfs/5eaee7e523b1784cf5a70601_organization.svg"
              width="96"
              alt="STANDARD"
              className="mx-auto"
            />
            <h1 className="text-[32px] font-pricing font-semibold my-4 ">
              STANDARD
            </h1>
            <p className="font-semibold my-4 text-[#939494]">
              Great for investors that want more traditional services with rent
              insurance.
            </p>
            <p className="font-pricing text-3xl mb-4">
              <span className="text-6xl">9</span>%/mo
            </p>
            <div className="space-y-1 my-6">
              <p className="text-[#939494] font-semibold">
                per unit - monthly collected rent
              </p>
              <p className="text-[#939494] font-semibold">
                $145 monthly minimum required
              </p>
              <p className="font-bold">+ $65 zero tenant placement fees</p>
            </div>
            <button className="my-4 font-bold px-8 py-3 bg-emerald-700 rounded-md text-white">
              Get Started
            </button>
            <p className="font-bold text-md tracking-wide">
              60-Day Risk Free Guarantee
            </p>
            <p className="font-bold text-md tracking-wide">
              No Upfront Money Required
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;

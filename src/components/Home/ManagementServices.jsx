import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

const ManagementServices = () => {
  return (
    <div className="min-h-screen px-4 py-8  md:p-10 max-w-screen-lg mx-auto">
      <h1 className="font-primary tracking-wide text-3xl text-center mt-8">
        MANAGEMENT SERVICES
      </h1>
      <h1 className="tracking-widest text-xl text-center mt-4 text-secondary">
        OWNERSHIP WITHOUT THE HASSLE
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full max-w-screen-xl mx-auto">
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <HiOutlineDocument />
          </div>

          <div>
            <h2 className="font-primary text-xl mb-1">RENT INVOICING</h2>
            <p className="text-secondary">
              In order to help your tenants stay on top of rent payments,
              we send out monthly invoices (including a detailed breakdown of charges to their account)
              to remind them payment is coming due.
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <RiMoneyDollarCircleLine />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">RENT COLLECTION</h2>
            <p className="text-secondary">
              Tenants can pay their rent online, in real time, via electronic
              fund transfers or even pay by credit card. Through this technology,
              we can offer our owners up-to-date information on demand and in a clean, detailed fashion.
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <SlGraph />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">EXPENSES</h2>
            <p className="text-secondary">
              We pay all vendors on behalf of the property on time,
              and such information is automatically compiled for owners
              to review at any time they desire. Our property managers
              adhere to strict standards of review when hiring & reviewing a vendor’s work.
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <VscTools />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">REPAIR & MAINTENANCE</h2>
            <p className="text-secondary">
              Outside of responsiveness and organization, we thoroughly screen all of
              the vendors we work with to ensure your property is getting the 
              best possible repair and/or maintenance work for the best possible price.
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <BsFileEarmarkBarGraph />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">FINANCIAL REPORTING</h2>
            <p className="text-secondary">
              Running a property is no different than running a business.
              We provide monthly, quarterly, and annual financial reports.
              Also, with our on-demand system, our clients can access financial reports
              in a moment’s notice.
            </p>
          </div>
        </div>
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            <BiBuildings />
          </div>
          <div>
            <h2 className="font-primary text-xl mb-1">
              APARTMENT TURNOVER SERVICE
            </h2>
            <p className="text-secondary">
              After a tenant notifies us of their intent to move, we reply
              by scheduling a pre-move out inspection, and we send them a Move Out Letter,
              which states the expectations regarding the condition of the property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementServices;

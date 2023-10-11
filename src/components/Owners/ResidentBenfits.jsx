import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
const ResidentBenfits = () => {
  return (
    <>
      <MiniHeader
        heading={"Resident Benefits"}
        subHeading={""}
      />

      <div className="min-h-screen px-4 py-8  md:p-10  mx-auto">
        <h1 className="font-primary tracking-wide text-3xl text-center mt-8">
          Exclusive Owner-Client Member Benefits
        </h1>
        <h1 className="tracking-widest text-xl text-center mt-4 text-secondary">
          18 Inclusive Benefits. 1 Property Management Company that has your
          back.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-screen-xl mx-auto">
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <HiOutlineDocument />
            </div>

            <div>
              <h2 className="font-primary text-xl mb-1">Utility Concierge</h2>
              <p className="text-secondary">
                A concierge service will assist you in setting up your utilities
                as well as any phone, cable, or security needs.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <RiMoneyDollarCircleLine />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Security Deposit Protection
              </h2>
              <p className="text-secondary">
                If your property is foreclosed for any reason, we guarantee the
                protection of your security deposit.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <SlGraph />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Online Rent Payments
              </h2>
              <p className="text-secondary">
                Save money on postage and never worry about lost mail. Set up
                one time or recurring secure bank transfers or eChecks... and
                with NO convenience fees!
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <VscTools />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Fair Lease Agreements
              </h2>
              <p className="text-secondary">
                Our lease is designed to be fair and transparent and is prepared and approved by Tschetter-Sulzer, PC - one
                of Texas most respected law firms.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BsFileEarmarkBarGraph />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                24 Hour Repair Hotline
              </h2>
              <p className="text-secondary">
                You will talk to a real live trained technician for after hours
                emergencies who will provide immediate help.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Secure Resident Portal
              </h2>
              <p className="text-secondary">
                Your password-protected portal allows you to view your payment
                history, print rent receipts, make repair requests, and update
                your information anytime.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Response Time Guarantee
              </h2>
              <p className="text-secondary">
                Nobody likes waiting for a response, which is why we promise to
                respond to all communication within 24 business hours.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Property Inspections
              </h2>
              <p className="text-secondary">
                We inspect your property during your lease term to ensure there
                are no outstanding repair issues.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Quality Repairs</h2>
              <p className="text-secondary">
                Our vendors are prescreened to ensure they are knowledgeable,
                friendly, and they leave your property clean after a job. We
                even send you a maintenance survey after the job so you can give
                your honest feedback.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Trust</h2>
              <p className="text-secondary">
                Our family owned business; has been serving residents since 1978,
                so you know we will be here tomorrow (and the next day and the
                next day) with honest, relationship-based service.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Online Pet Profile</h2>
              <p className="text-secondary">
                Our Pet Profile provides you a secure place online to store all
                the important information about your pets. Pet Profiles can
                easily be shared with pet service providers such as
                veterinarians, animal hospitals, pet sitters and doggie
                daycares.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Giving Back</h2>
              <p className="text-secondary">
                For every lease we sign we contribute money to our 'Grace Gives'
                fund. This money is used to help responsible residents pay their
                rent during unexpected financial emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResidentBenfits;

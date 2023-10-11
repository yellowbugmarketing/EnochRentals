import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
const Promises = () => {
  return (
    <>
      <MiniHeader heading={"Promises"} subHeading={""} />

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
              <h2 className="font-primary text-xl mb-1">Eviction Guarantee</h2>
              <p className="text-secondary">
                Our tenant screening is so tight we will personally
                reimburse you up to $1,000 in the event of eviction legal expenses.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <RiMoneyDollarCircleLine />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Contract Guarantee</h2>
              <p className="text-secondary">
                Long term contracts are scary, so we’ve created the only month-to-month
                management agreement in Texas with no termination fees or penalties.
                We believe we should earn your business every day.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <SlGraph />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Tenant Placement Guarantee
              </h2>
              <p className="text-secondary">
                If we place a tenant, and they break their lease during
                the first 12 months, we will release it for free.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <VscTools />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Rent Deposit Guarantee
              </h2>
              <p className="text-secondary">
                We know you want your money fast! So we ACH your tenant rent 
                into your bank account by the 10th day of each month.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BsFileEarmarkBarGraph />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Management Fee Guarantee
              </h2>
              <p className="text-secondary">
                We believe that if we can't collect the rent, then we should not get paid.
                You only pay us a management fee if we successfully collect the rent due.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Leasing Fee Guarantee
              </h2>
              <p className="text-secondary">
                You don't pay us a leasing fee until we have a signed lease
                and money paid from the tenant.
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
                Nobody likes waiting for a response; that is why we promise to
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
                Pet Damage Guarantee
              </h2>
              <p className="text-secondary">
                Our pet screening process is so tight we will personally
                reimburse you up to $1,000 if pet damage should occur.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Legal Compliance Guarantee
              </h2>
              <p className="text-secondary">
                Our lease agreement is reviewed and approved by THS,
                a top Texas landlord law firm. We operate in compliance
                with fair housing, Texas habitability, application screening,
                and right-to-cure laws.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">
                Premier Applicant Screening
              </h2>
              <p className="text-secondary">
                Advanced background search technology plus custom in-house
                applicant screening ensures only highly qualified applicants
                are approved to rent our properties.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">24/7 Online Reports</h2>
              <p className="text-secondary">
                We provide you with secure online access to monthly statements,
                inspection reports, invoice copies, tax reports, and
                rental history with a click of a mouse.
              </p>
            </div>
          </div>
          <div className="min-h-[150px]  w-full flex gap-5">
            <div className="mt-[-4px]">
              <BiBuildings />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1">Preferred Rates</h2>
              <p className="text-secondary">
                As an owner-client you enjoy reduced fees whenever you buy
                and sell properties with us. We have closed over $40,000,000
                in real estate sales exclusively for our owner-clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Promises;

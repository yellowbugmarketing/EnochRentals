import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const WhatWeDo = () => {
  return (
    <div>
      <MiniHeader heading={"What We Do"} subHeading={""} />

      <div className="min-h-screen max-w-screen-xl px-4 py-8  md:p-10  mx-auto font-primary ">
        <h1 className=" tracking-wide text-4xl text-center mt-8">
          What Do Property Managers Do?
        </h1>
        <h1 className="tracking-wide text-2xl font-semibold  my-6">
          Property managers are just glorified rent collectors, right?
        </h1>
        <p className="text-xl font-secondary my-4">
          This is a very common misconception that most people have about
          property managers, and that’s probably due to the poor reputation that
          property managers have in the real estate market. Lack of
          communication, slow response time, and poor management practices are
          known qualities of most property management companies.
        </p>
        <p className="text-xl font-secondary my-4">
          Good property managers, however, do a lot more than collect rent and
          take forever to return your phone calls.
        </p>

        <h1 className="font-primary tracking-wide text-2xl font-semibold  mt-6">
          Some services that all fall under property management are:
        </h1>

        <ul className="my-3 space-y-1 text-xl font-secondary">
          <li>Rent Collection</li>
          <li>Tenant Relations</li>
          <li>Property Marketing</li>
          <li>Applicant Screening</li>
          <li>Accounting and Reporting</li>
          <li>Ongoing Inspections</li>
          <li>Maintenance Coordination</li>
          <li>Tenant Turnover and Evictions</li>
        </ul>

        <h1 className="font-primary tracking-wide text-2xl font-semibold mt-8">
          What Makes a Good Property Manager
        </h1>
        <p className="text-xl font-secondary my-4">
          Good property managers do so much more than just what's listed here. A
          good property manager is ultimately responsible for a specific outcome
          for the property owner.
        </p>

        <p className="text-xl font-secondary my-4">
          Property managers are licensed real estate professionals that perform
          all of these tasks while ensuring compliance with real estate laws.
          Many can give investment advice to owners looking to expand their
          portfolio; and since they are licensed, they can act as the seller’s
          agent in any real estate transaction.
        </p>
        <p className="text-xl font-secondary ">
          Let’s dive a little bit deeper into the exact process that Enoch
          Properties uses to manage each and every one of our rental homes.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeDo;

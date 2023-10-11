import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const TenantScreening = () => {
  return (
    <div>
      <MiniHeader
        heading={"Screening and Qualifying Tenants"}
        subHeading={""}
      />

      <div className="min-h-screen max-w-screen-xl px-4 py-8  md:p-10  mx-auto font-primary ">
        <h1 className="tracking-wide text-5xl  font-medium mt-8 text-center">
          Screening and Qualifying Tenants
        </h1>
        <h1 className="tracking-wide text-2xl font-semibold  my-6">
          The most important step in being a good landlord?
        </h1>
        <p className="text-xl my-4">
          If a company or individual owner ever needed to have a “Secret Sauce”,
          this would be it! No job is more important in the entire rental
          process than screening and selecting tenants. The ultimate goal of any
          tenant selection is finding a tenant who you can be as assured as
          possible will pay the rent in full on time every month and take care
          of your property.
        </p>
        <p className="text-xl my-4">
          Before any discussion can begin on how to screen and qualify a tenant
          for a rental property, it must be understood that there are specific
          Fair Housing Guidelines that any owner or property management company
          must adhere to in screening and selecting tenants. There is a full
          list of Federal Laws you must comply with anytime you rent out
          residential property. Take the time to familiarize yourself with these
          laws and live by them!
        </p>
        <p className="text-xl my-4">
          Many companies and individual landlords will use an arbitrary cutoff
          on a person’s FICO score to make a placement decision. This is not the
          best way to screen tenants. The FICO does not tell the whole story on
          a person’s ability to pay the rent and take care of the property.
        </p>
        <p className="text-xl my-4">
          The most common example of a low FICO applicant who is a good risk is
          a person who just went through a divorce with a financially
          irresponsible spouse; they were the main source of income in the
          household, they have 20+ years on the job, and make well over three
          times the rent. This applicant, excluding other issues, could be a
          great placement because of their job.
        </p>
        <p className="text-xl my-4">
          Ultimately, you want to find an applicant that has something to lose
          by not paying the rent. It could be good FICO or other assets. In the
          worst case scenario, if you had to go after a tenant that stiffed you,
          had an already low FICO going into the lease but had over 20 years on
          the job, you can always get a judgement against that past tenant and
          then garnish their wages. They typically won’t quit their job just to
          avoid paying you off on a judgement.
        </p>
        <p className="text-xl my-4">
          In the words of Ronald Reagan, you need to “trust but verify.” Enoch
          Properties processes literally hundreds of applications every month,
          and we find tenant dishonesty the biggest obstacle to getting through
          all those applications. The deceit ranges from phony pay stubs to
          having their buddy give the landlord verification.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TenantScreening;

import React from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const GettingYourPropertyReady = () => {
  return (
    <div>
      <MiniHeader
        heading={"Getting Your Property Ready to Rent"}
        subHeading={""}
      />

      <div className="min-h-screen max-w-screen-xl px-4 py-8  md:p-10  mx-auto font-primary ">
        <h1 className="tracking-wide text-5xl font-medium mt-8 text-center">
          Getting Your Property Ready to Rent
        </h1>
        <h1 className="tracking-wide text-2xl font-semibold  my-6">
          Your rental property needs to be in great condition. Period.
        </h1>
        <p className="text-xl my-4">
          Residential rental property can range from a single family residence
          on a nice quiet cul-de-sac to a multi-unit complex with on-site
          management and maintenance in a downtown urban setting.
        </p>
        <p className="text-xl my-4">
          Regardless of the type of property you own, your most important
          variable (after location) is the condition and quality of your rental
          property. Yes, curb appeal does matter, even if the property is
          occupied by a renter. It matters to both the prospective tenant and
          the local community in the immediate area.
        </p>
        <p className="text-xl my-4">
          A real estate investor who understands this will be willing to invest
          the money needed to maximize the potential rent and attract the best
          possible long-term tenant. A good tenant is defined as one who takes
          care of the property and pays the rent in full, on time, every month.
          Very few tenants who fit this ideal description are willing to rent a
          property that is obviously out of date with lots of deferred
          maintenance.
        </p>
        <p className="text-xl my-4">
          This is not to say that you have to have the latest stainless steel,
          bluetooth enabled appliances and quartz countertops, but it does mean
          that the avocado green dishwasher that doesn’t always rinse well and
          the 10-year old carpet should probably be replaced. Beyond maximizing
          the aesthetic condition of the property, safety and habitability
          should also be a primary concern for a property owner.
        </p>

        <h1 className="font-primary tracking-wide text-2xl font-semibold  mt-6">
          Should you paint every time a tenant moves out?
        </h1>
        <p className="text-xl my-4">
          Although the paint does not need to be new, many multi-unit owners
          choose to repaint their rental units every time a tenant moves out.
          Sometimes you can get by with using touch up paint on the entire wall
          that needs touch up. Trying to use touch up paint mid-wall in specific
          spots often ends in failure. The new paint, even if it was from the
          same container that was originally used to paint the wall, will have a
          slightly different sheen and will look worse than the original blemish
          you were trying to cover up.
        </p>
        <p className="text-xl my-4">
          Regardless of the condition of the paint, there should be no existing
          nail holes in the walls when a tenant moves into a property. Trying to
          unwind which nail holes were pre-existing and which ones were done by
          the current tenant is a fool’s errand, and you end up being unable to
          charge for any of the damage to the walls caused by the nail holes.
        </p>
        <p className="text-xl my-4">
          At Enoch Properties, we have developed a standard Rent Ready
          Inspection Report that all of our property managers use to inspect the
          above list of items and much more. If you are interested in getting a
          copy, contact one of our property managers today.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default GettingYourPropertyReady;

import React from "react";
import { Link } from "react-router-dom";

const Vacancies = () => {
  return (
    <div className="my-6">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="uppercase text-center tracking-wide text-2xl font-primary my-4 text">
          Vacancies
        </h1>

        <Link
          to="/properties"
          className="outline outline-black text-center text-black px-10 py-3 uppercase text-sm outline-1 rounded-full"
        >
          View Listings
        </Link>
      </div>
    </div>
  );
};

export default Vacancies;

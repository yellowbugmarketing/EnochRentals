import React, { useEffect, useState } from "react";

import { GoLocation } from "react-icons/go";
import { TfiRulerPencil } from "react-icons/tfi";
import { BiBed, BiBath } from "react-icons/bi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Listings = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      minRent: 0,
      maxRent: 5000,
    },
  });

  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  console.log(allProperties);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const fetchedProperties = [];

    const querySnapshot = await getDocs(collection(db, "properties"));
    querySnapshot.forEach((doc) => {
      if (!doc.data().hideProperty) {
        fetchedProperties.push(doc.data());
      }
    });
    setProperties(fetchedProperties);
    setAllProperties(fetchedProperties);
  }
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  const onSubmit = (data) => {
    const {
      search,
      minRent,
      maxRent,
      beds: _beds,
      bath: _bath,
      propertyType: _propertyType,
      pets: _pets,
      datePosted,
    } = data;
    let filteredProperties = allProperties.filter((property) => {
      const { bath, beds, pets, price, propertyType } = property;

      if (!!search) {
        if (
          !JSON.stringify(property)
            .toLowerCase()
            .includes(data.search.toLowerCase())
        )
          return false;
      }
      if (!!minRent) {
        if (price < minRent) return false;
      }
      if (!!maxRent) {
        if (price > maxRent) return false;
      }
      if (!!_beds) {
        if (beds < _beds) return false;
      }
      if (!!_bath) {
        if (bath < _bath) return false;
      }
      if (!!_pets) {
        if (
          (_pets === "Cats Allowed" || _pets === "Dogs Allowed") &&
          pets === "Dogs & Cats Allowed"
        )
          return true;
        if (pets !== _pets) return false;
      }
      if (!!_propertyType) {
        if (propertyType !== _propertyType) return false;
      }
      return true;
    });

    switch (datePosted) {
      case "date|desc":
        filteredProperties = filteredProperties.sort((a, b) => {
          return b.date?.seconds - a.date?.seconds;
        });
        break;
      case "date":
        filteredProperties = filteredProperties.sort((a, b) => {
          return a.date?.seconds - b.date?.seconds;
        });
        break;
      case "amount|desc":
        filteredProperties = filteredProperties.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "amount":
        filteredProperties = filteredProperties.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case "beds|desc":
        filteredProperties = filteredProperties.sort((a, b) => {
          return b.beds - a.beds;
        });
        break;
      case "beds":
        filteredProperties = filteredProperties.sort((a, b) => {
          return a.beds - b.beds;
        });
        break;
      case "baths|desc":
        filteredProperties = filteredProperties.sort((a, b) => {
          return b.bath - a.bath;
        });
        break;
      case "baths":
        filteredProperties = filteredProperties.sort((a, b) => {
          return a.bath - b.bath;
        });
        console.log("hrer");
        break;
      case "area|desc":
        filteredProperties = filteredProperties.sort((a, b) => {
          return b.sft - a.sft;
        });
        break;
      case "area":
        filteredProperties = filteredProperties.sort((a, b) => {
          return a.sft - b.sft;
        });
        break;

      default:
        break;
    }

    setProperties(filteredProperties);
  };

  return (
    <div className="max-w-screen-xl mx-auto  p-8">
      <p className="my-8">
        We want to make your experience in finding your next dream home an
        enjoyable one! Find houses for rent in Fort Worth by selecting from our
        curated list of available properties, or by entering your search
        criteria below. Give us a call today, and we will help you find the
        perfect rental property!
      </p>
      {showFilters ? (
        <form
          className="bg-gray-600 px-4 py-8 md:p-12 w-full grid grid-cols-12 gap-5 items-end relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            className="text-white ml-auto outline px-5 py-1 absolute top-4 right-4"
            onClick={toggleFilter}
          >
            Filter
          </button>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-white">Search</p>
            <input
              className="w-full mt-2 h-10 outline-white rounded px-2"
              type="text"
              {...register("search")}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="text-white">
              Min Rent{" "}
              <span className="text-amber-300 font-bold tracking-normal ">
                {watch("minRent") || 0}$
              </span>
            </p>
            <input
              className="w-full mt-2 h-10 outline-white rounded px-2"
              type="range"
              min={0}
              max={10000}
              {...register("minRent")}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="text-white">
              Max Rent{" "}
              <span className="text-amber-300 font-bold tracking-normal  ">
                {watch("maxRent") || 0}$
              </span>
            </p>
            <input
              min={0}
              max={10000}
              className="w-full mt-2 h-10 outline-white rounded px-2"
              type="range"
              {...register("maxRent")}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="text-white">Beds</p>

            <select
              {...register("beds")}
              className="w-full mt-2 h-10 outline-white rounded px-2"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
              <option value="9">9+</option>
              <option value="10">10+</option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="text-white">Baths</p>

            <select
              {...register("bath")}
              className="w-full mt-2 h-10 outline-white rounded px-2"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>{" "}
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="text-white">Property Type</p>

            <select
              {...register("propertyType")}
              className="w-full mt-2 h-10 outline-white rounded px-2"
            >
              <option value="">Any</option>

              <option value="Single Family Home">Single Family Home</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Duplex">Duplex</option>
              <option value="Multiplex">Multiplex</option>
              <option value="Loft">Loft</option>
              <option value="Mobile Home">Mobile Home</option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="text-white">Pets</p>

            <select
              {...register("pets")}
              className="w-full mt-2 h-10 outline-white rounded px-2"
            >
              <option value="">Any Policy</option>
              <option value="Dogs Allowed">Dogs Allowed</option>
              {/*} <option value="Cats Allowed">Cats Allowed</option>
              <option value="Dogs & Cats Allowed">Dogs & Cats Allowed</option>*/}
              <option value="No Pets Allowed">No Pets Allowed</option>
            </select>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="text-white">Sort By</p>

            <select
              {...register("datePosted")}
              className="w-full mt-2 h-10 outline-white rounded px-2"
            >
              <optgroup label="Date Posted">
                <option value="date|desc">Date Posted (new - old)</option>
                <option value="date">Date Posted (old - new)</option>
              </optgroup>
              <optgroup label="Price">
                <option value="amount">Price (low - high)</option>
                <option value="amount|desc">Price (high - low)</option>
              </optgroup>
              <optgroup label="Beds">
                <option value="beds">Beds (low - high)</option>
                <option value="beds|desc">Beds (high - low)</option>
              </optgroup>
              <optgroup label="Baths">
                <option value="baths">Baths (low - high)</option>
                <option value="baths|desc">Baths (high - low)</option>
              </optgroup>
              <optgroup label="Area (Sq.Ft.)">
                <option value="area">SqFt (low - high)</option>
                <option value="area|desc">SqFt (high - low)</option>
              </optgroup>
              {/* <optgroup label="Availability Date">
                <option value="availabilityDate">
                  Availability (sooner - later)
                </option>
                <option value="availabilityDate|desc">
                  Availability (later - sooner)
                </option>
              </optgroup> */}
            </select>
          </div>
          <button className=" col-span-12 md:col-span-6 lg:col-span-3 px-8 py-3 bg-blue-700 text-white hover:bg-white hover:text-black font-semibold duration-200">
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-gray-600 px-4 py-4 md:p-4 w-full flex justify-between">
          <button
            className="text-white ml-auto outline px-5 py-1"
            onClick={toggleFilter}
          >
            Filter
          </button>
        </div>
      )}

      <div className="h-full bg-slate-200">
        <div className="pt-4 space-y-2">
          <h1 className="text-center text-xl">Current Listings</h1>
          <h1 className="text-center text-md">
            Showing all available listings
          </h1>
        </div>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {properties.map((property) => (
            <div
              className="group w-full bg-white p-3 flex flex-col gap-3 outline outline-1 outline-slate-300  max-h-[700px]"
              key={property.id}
            >
              {property.images.length > 0 && (
                <div className="w-full overflow-hidden  max-h-[250px]">
                  <img
                    src={property.images[0]}
                    className="group-hover:scale-110 ease-in duration-300 object-cover w-full h-full"
                    alt="property"
                  />
                </div>
              )}
              <div className="w-full relative">
                <h1 className="font-medium tracking-wide font-primary text-xl">
                  {property.name}
                </h1>
                <h1 className="font-medium tracking-widest font-primary text-sm mt-2">
                  <span className="text-blue-700 text-2xl">
                    ${Number(property.price).toLocaleString()}
                    {".00 "}
                  </span>{" "}
                  USD/Month (
                  <span className="font-bold text-green-600">
                    {property.propertyType}
                  </span>
                  )
                </h1>
                <div className="grid grid-cols-3 my-4">
                  <div className="flex items-center  gap-x-2 ">
                    <BiBed size={30} />
                    <div>
                      <p className="text-sm text-secondary">
                        {property.beds} bd
                      </p>
                    </div>{" "}
                  </div>
                  <div className="flex  items-center gap-x-2 ">
                    <BiBath size={30} />
                    <div>
                      <p className="text-sm text-secondary">
                        {property.bath} ba
                      </p>
                    </div>{" "}
                  </div>
                  <div className="flex items-center  gap-x-2 ">
                    <TfiRulerPencil size={30} />
                    <div>
                      <p className="text-sm text-secondary">
                        {property.sft} sqft
                      </p>
                    </div>{" "}
                  </div>
                </div>
                <a
                  className="flex items-center text-sm md:text-md  my-4 hover:underline hover:underline-offset-2"
                  href={property.mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GoLocation
                    style={{
                      marginRight: "10px",
                    }}
                    size={18}
                    color={"red"}
                  />
                  {property.location}
                </a>

                <p className="text-sm my-1 ">
                  Pet Policy: <span className="font-bold">{property.pets}</span>
                </p>

                <Link
                  className="w-full flex items-center justify-center mt-3 bg-white text-black ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-black hover:text-white h-10"
                  to={`/apply-online/${property.id}`}
                >
                  Apply Now
                </Link>
                <Link
                  className="w-full flex items-center justify-center mt-3 bg-black text-white ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-white hover:text-black h-10"
                  to={`/properties/${property.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;

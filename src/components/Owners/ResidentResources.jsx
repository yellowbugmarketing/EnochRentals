import React from "react";
import { RiMoneyDollarCircleLine, RiSpam2Line } from "react-icons/ri";
import { HiOutlineDocument, HiOutlineShoppingCart } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { MdPets } from "react-icons/md";
import { BsFileEarmarkBarGraph, BsHouse } from "react-icons/bs";
import { BiBuildings, BiDownload } from "react-icons/bi";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import { Link } from "react-router-dom";
const ResidentResources = () => {
  return (
    <>
      <MiniHeader
        heading={"Resident Resources"}
        subHeading={""}
      />
      <div className="px-4 py-8  md:p-10  mx-auto">
        <h1 className="font-primary tracking-wide text-3xl text-center mt-8">
          Resident Resources
        </h1>
        <h1 className="tracking-widest text-xl text-center mt-4 text-secondary">
          Leveraging tech and transparent communication to bring you a smooth
          and positive rental experience.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full max-w-screen-xl mx-auto">
          <Link
            to="/properties"
            className="w-full p-3 flex flex-col gap-5 justify-center items-center text-center"
          >
            <div className="hover:scale-90 duration-300">
              <BsHouse size={48} />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1 uppercase">
                View properties for rent
              </h2>
              <p className="text-secondary text-md">
                 
              </p>
            </div>
          </Link>

          <Link
            to="/properties"
            className="w-full p-3 flex flex-col gap-5 justify-center items-center text-center"
          >
            <div className="hover:scale-90 duration-300">
              <HiOutlineShoppingCart size={48} />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1 uppercase">
                Apply Online
              </h2>
              <p className="text-secondary text-md">
                 
              </p>
            </div>
          </Link>

          <a
            href="https://firebasestorage.googleapis.com/v0/b/enoch-177d6.appspot.com/o/Residential%20Rental%20Application.pdf?alt=media&token=fdf0a6fb-d2a9-4b9c-add1-a0e80926ceb5"
            className="w-full p-3 flex flex-col gap-5 justify-center items-center text-center"
            target="_blank"
          >
            <div className="hover:scale-90 duration-300">
              <BiDownload size={48} />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1 uppercase">
                Download residental rental application
              </h2>
              <p className="text-secondary text-md">
                 
              </p>
            </div>
          </a>
          <Link
            to="/pet-policy"
            className="w-full p-3 flex flex-col gap-5 justify-center items-center text-center"
          >
            <div className="hover:scale-90 duration-300">
              <MdPets size={48} />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1 uppercase">
                Pet Policy
              </h2>
              <p className="text-secondary text-md">
                
              </p>
            </div>
          </Link>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/enoch-177d6.appspot.com/o/Rental%20Scams.pdf?alt=media&token=43ba5e8d-4364-4bdd-9c26-1e38f9cd2f19"
            className="w-full p-3 flex flex-col gap-5 justify-center items-center text-center"
            target="_blank"
          >
            <div className="hover:scale-90 duration-300">
              <RiSpam2Line size={48} />
            </div>
            <div>
              <h2 className="font-primary text-xl mb-1 uppercase">
                avoiding rental scams{" "}
              </h2>
              <p className="text-secondary text-md">
                
              </p>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResidentResources;

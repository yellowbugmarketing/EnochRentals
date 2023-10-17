import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GoLocation } from "react-icons/go";
import { TfiRulerPencil } from "react-icons/tfi";
import { BiBed, BiBath } from "react-icons/bi";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link, useParams } from "react-router-dom";

const SingleListing = () => {
  const [property, setProperty] = useState(null);
  const { propertyId } = useParams();
  console.log(propertyId);

  // useEffect(() => {
  //   if (propertyId) fetchData();
  // }, []);
  
  // async function fetchData() {
  //   const docRef = doc(db, "properties", propertyId);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setProperty(docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "properties", propertyId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProperty(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }

    if (propertyId) {
      fetchData();
    }
  }, [propertyId]);

  if (!property) return "";
  return (
    <div className="max-w-screen-xl mx-auto  p-8">
      <div className="p-3">
        <div
          className={` w-full bg-white p-3 outline outline-1 outline-slate-300 grid  grid-cols-1 ${
            property?.images.length > 0 ? "lg:grid-cols-2" : ""
          }  gap-5`}
        >
          {property?.images.length > 0 && (
            <div className="max-w-md overflow-hidden max-h-[450px]  group mx-auto">
              <Carousel
                swipeable={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
              >
                {property.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt="prop" />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          <div className="w-full relative m-auto">
            <h1 className="font-medium tracking-wide font-primary text-xl">
              {property.name}
            </h1>
            <h1 className="font-medium tracking-widest font-primary text-sm mt-2">
              <span className="text-blue-700 text-2xl">
                ${Number(property.price).toLocaleString()}
                {".00 "}
              </span>{" "}
              USD/Month
            </h1>
            <h1 className="font-bold tracking-widest font-primary text-lg mt-2 text-green-600">
              {property.propertyType}
            </h1>
            <div className="grid grid-cols-3 my-4">
              <div className="flex items-center  gap-x-2 ">
                <BiBed size={30} />
                <div>
                  <p className="text-sm text-secondary">{property.beds} bd</p>
                </div>{" "}
              </div>
              <div className="flex  items-center gap-x-2 ">
                <BiBath size={30} />
                <div>
                  <p className="text-sm text-secondary">{property.bath} ba</p>
                </div>{" "}
              </div>
              <div className="flex items-center  gap-x-2 ">
                <TfiRulerPencil size={30} />
                <div>
                  <p className="text-sm text-secondary">{property.sft} sqft</p>
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
            <div
              className="text-sm  my-2"
              dangerouslySetInnerHTML={{ __html: property.about }}
            />

            <p className="text-sm my-1 ">
              Pet Policy: <span className="font-bold">{property.pets}</span>
            </p>
            <p className="text-sm my-1 ">
              Availablity : <span className="font-bold">Available</span>
            </p>
            <div className="flex gap-8">
              <Link
                className="w-full flex items-center justify-center mt-3 bg-white text-black ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-black hover:text-white h-10"
                to={`/apply-online/${property.id}`}
              >
                Apply Now
              </Link>
              <Link
                className="w-full flex items-center justify-center mt-3 bg-black text-white ease-in duration-150 outline outline-1 px-4 py-1 rounded-sm ml-auto hover:bg-white hover:text-black h-10"
                to={`/contact`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;

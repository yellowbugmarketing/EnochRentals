import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogoImg from "../../assets/images/black-logo.png";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useContext } from "react";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";

const OnlineHeader = () => {
  const { application, setApplication } = useContext(ApplyOnlineContext);
  const { listingId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (listingId && application?.id !== listingId) {
  //     // console.log("inide fetch");
  //     fetchData();
  //   } else if (!listingId && !application) {
  //     navigate("/properties");
  //   }
  // }, []);

  // async function fetchData() {
  //   const docRef = doc(db, "properties", listingId);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     localStorage.setItem("application", JSON.stringify(docSnap.data()));
  //     setApplication(docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //     navigate("/properties");
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "properties", listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        localStorage.setItem("application", JSON.stringify(docSnap.data()));
        setApplication(docSnap.data());
      } else {
        console.log("No such document!");
        navigate("/properties");
      }
    }

    if (listingId && application?.id !== listingId) {
      fetchData();
    } else if (!listingId && !application) { 
      navigate("/properties");
    }
  }, [application, listingId, navigate, setApplication]);


  return (
    <div className="my-6 px-4 border-b-2">
      <h1 className="text-4xl text-blue-600">Rental Application</h1>
      <div className="flex flex-col md:flex-row  my-4 justify-between">
        <Link to={"/"}>
          <h1 className="">ENOCH Properties </h1>
          <h2 className="font-primary text-xl my-1 ">(817) 600-6228</h2>
        </Link>
        <Link to={"/"} className="hidden md:block">
          <img
            src={LogoImg}
            alt="Logo"
            style={{
              width: "250px",
              marginTop: "-30px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default OnlineHeader;

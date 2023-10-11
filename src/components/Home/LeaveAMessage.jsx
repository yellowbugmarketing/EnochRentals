import React, { useRef, useState } from "react";
import MapImg from "../../assets/images/us.png";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

import uniqid from "uniqid";
const LeaveAMessage = ({ header }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      description: descriptionRef.current.value,
      date: new Date(),
    };
    try {
      emailjs
        .sendForm(
          "service_qmvz2k7",
          "template_p5sk22s",
          form.current,
          "pKr5g4rAla9WuxUbp"
        )
        .then((result) => {
          console.log(result.text);
          createEntry(data);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const createEntry = async (customer) => {
    const genratedID = uniqid();
    customer.id = genratedID;

    const customerRef = doc(db, "messages", genratedID);
    await setDoc(customerRef, customer);

    resetRef.current.click();
  };

  const form = useRef();
  return (
    <div
      className="min-h-[80vh] bg-contain bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(${MapImg})`,
        backgroundColor: "#111111",
      }}
    >
      <h1 className="uppercase tracking-wide text-3xl text-white text-center font-primary py-16">
        {header}
      </h1>
      {submitted && (
        <h1 className="text-white text-center font-primary text-xl">
          Submitted Successfully !!
        </h1>
      )}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/5 mx-auto">
        <div>
          <h1 className="uppercase tracking-wide text-2xl text-white  font-primary ">
            GET IN TOUCH
          </h1>
          <p className="text-secondary mt-4 text-md tracking-wide">
            Let's chat about your real estate management needs.
          </p>
        </div>
        <form onSubmit={handleSubmit} ref={form}>
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white"
            type="text"
            placeholder="First & Last Name"
            required
            ref={nameRef}
            name="from_name"
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white"
            type="email"
            placeholder="Email"
            required
            name="from_email"
            ref={emailRef}
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white"
            type="tel"
            placeholder="Phone"
            required
            ref={phoneRef}
            name="from_phone"
          />
          <textarea
            className="bg-transparent outline outline-1 outline-white mb-4 w-full max-w-screen-md rounded-sm p-4 text-white caret-white"
            name="message"
            id="description"
            required
            cols="30"
            rows="6"
            ref={descriptionRef}
            placeholder="Describe your property needs"
          ></textarea>

          <button
            type="submit"
            className="uppercase px-12 py-2 rounded-full outline outline-1 outline-white font-primary text-white hover:text-black hover:bg-white"
          >
            Submit
          </button>
          <button type="reset" className="hidden" ref={resetRef}>
            Rest
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveAMessage;

import React, { useState } from "react";

export const ApplyOnlineContext = React.createContext();

export const ApplyOnlineProvider = ({ children }) => {
  const [application, setApplication] = useState(
    JSON.parse(localStorage.getItem("application"))
  );

  const [status, setS] = useState(
    JSON.parse(localStorage.getItem("status_")) || [
      {
        id: 1,
        path: `/apply-online/:listingId`,
        name: "Before You Begin",
        status: 1,
        data: {},
      },
      {
        id: 2,
        path: "/apply-online/contact-info",
        name: " Your contact info",
        status: 0,
        data: {},
      },
      {
        id: 3,
        path: "/apply-online/address",
        name: "Where you've lived ",
        status: 0,
        data: {},
      },
      {
        id: 4,
        path: "/apply-online/co-applicants",
        name: "Co-Applicants/Occupants",
        status: 0,
        data: {},
      },
      {
        id: 5,
        path: "/apply-online/personal-info",
        name: "Personal information",
        status: 0,
        data: {},
      },
      {
        id: 6,
        path: "/apply-online/your-income",
        name: "Your income",
        status: 0,
        data: {},
      },

      {
        id: 7,
        path: "/apply-online/questions",
        name: "Questions",
        status: 0,
        data: {},
      },
      {
        id: 8,
        path: "/apply-online/documents",
        name: "Attach documents",
        status: 0,
        data: {},
      },
      {
        id: 9,
        name: "Review and confirm",
        path: "/apply-online/review-confirm",
        status: 0,
        data: {},
      },
    ]
  );
  const setStatus = (stat) => {
    setS(stat);
    localStorage.setItem("status_", JSON.stringify(stat));
  };
  return (
    <ApplyOnlineContext.Provider
      value={{
        application,
        setApplication,
        status,
        setStatus,
      }}
    >
      {children}
    </ApplyOnlineContext.Provider>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/white-logo.png";
import IndexPage from "./IndexPage";
import { FiMenu } from "react-icons/fi";

const LOGIN_URL = "https://login.enochrentals.com/";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRef = useRef(null);
  const navRef = useRef(null);
  const observer = useRef(null);
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver((entries) => {
      if (!navRef.current) return;
      if (!entries[0].isIntersecting) {
        navRef.current.style.backgroundColor = "black";
      } else {
        navRef.current.style.backgroundColor = "transparent";
      }
    });

    const { current: currentObserver } = observer;

    currentObserver.observe(hiddenRef.current);
  }, []);

  return (
    <>
      <div className="fixed z-50 w-full " ref={navRef}>
        <div className="h-16 hidden lg:flex items-center text-white p-10">
          <div className="mr-auto p-3">
            <Link to={"/"}>
              <img
                src={LogoImg}
                alt="Logo"
                style={{
                  width: "150px",
                }}
              />
            </Link>
          </div>
          <div className="p-3">
            <Link to={"/"}>HOME</Link>
          </div>
          <div className="p-3">
            <Link to={"/properties"}>PROPERTIES</Link>
          </div>
          <div className="dropdown p-3">
            <button className="dropbtn">OWNERS</button>
            <div className="dropdown-content">
              <Link to="/promises">Promises</Link>
              <Link to="/what-we-do">What do we do</Link>
              <Link to="/pricing">Pricing (Plans & pricing)</Link>
              <Link to="/getting-your-property-ready">
                Getting your property ready
              </Link>
              <Link to="/tenant-screening">Tenant Screening</Link>
              {/* <Link to="/">Fair Repair Costs</Link> */}
            </div>
          </div>
          <div className="dropdown p-3">
            <button className="dropbtn">RESIDENTS</button>
            <div className="dropdown-content">
              <Link to="/resident-benfits">Resident Benfits</Link>
              <Link to="/resident-resources">Resident Resources</Link>
            </div>
          </div>

          <div className="p-3">
            <Link to={"/about"}>ABOUT US</Link>
          </div>
          <div className="p-3">
            <Link to={"/contact"}>CONTACT</Link>
          </div>

          <div className="dropdown p-3 relative">
            <button className="dropbtn">LOGIN</button>
            <div className="dropdown-content login-btn">
              <a
                href={LOGIN_URL + "owner-login"}
                target="_blank"
                rel="noreferrer"
              >
                Owner Login
              </a>
              <a
                href={LOGIN_URL + "tenant-login"}
                target="_blank"
                rel="noreferrer"
              >
                Tenant Login
              </a>
            </div>
          </div>
        </div>
        <div className="h-16 flex lg:hidden items-center text-white p-10">
          <div className="mr-auto p-3">
            <img
              src={LogoImg}
              alt="Logo"
              style={{
                width: "120px",
              }}
            />
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu color="#fff" />{" "}
          </button>
        </div>

        <div
          className={`relative z-10 ${isOpen ? "block" : "hidden"} `}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-xs sm:max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black text-white pb-6 shadow-xl">
                    <div className="w-fit flex mt-5 mx-auto rounded-full p-2  border-2 justify-center items-center">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white "
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="4"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-5 mx-auto text-2xl font-bold underline underline-offset-4">
                      {/* ENCOH PROPERTIES */}

                      <img
                        src={LogoImg}
                        alt="Logo"
                        style={{
                          width: "70%",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                    <div className="relative mt-2 flex-1 px-4 sm:px-6">
                      <IndexPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" ref={hiddenRef}></div>
    </>
  );
};

export default NavBar;

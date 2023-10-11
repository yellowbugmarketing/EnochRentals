import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/images/white-logo.png";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-black text-white ">
      <div className="max-w-screen-xl p-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto py-10 gap-y-4">
          <div className="col-span-1 md:col-span-2 md:px-4">
            <img
              src={LogoImg}
              alt="Logo"
              style={{
                width: "250px",
              }}
            />
            <p className="mt-4 w-11/12 md:w-3/5">
              Enoch Properties is committed to ensuring that its website is
              accessible to people with disabilities. All the pages on our
              website will meet W3C WAI's Web Content Accessibility Guidelines
              2.0, Level A conformance. Any issues should be reported to
              rent@enochdfw.com. Website Accessibility Policy
            </p>
          </div>
          <div className="">
            <h1 className="font-primary text-white text-2xl tracking-wide">
              Quick Links
            </h1>
            <div className="flex flex-col space-y-1 text-secondary mt-4">
              <Link to="/properties">Properties</Link>
              <Link to="/promises">Owners</Link>
              <Link to="/resident-resources">Resident Resources</Link>
              {/* <Link to="/">Blog</Link> */}
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              {/*<Link to="/">Owner Login</Link>
              <Link to="/">Tenant Login</Link>*/}
            </div>
          </div>
          <div className="">
            <h1 className="font-primary text-white text-2xl tracking-wide">
              Contact Info
            </h1>
            <div className="flex flex-col space-y-1 text-secondary mt-4">
              <a href="tel:+1-817-600-6228">Phone: +1 (817) 600-6228</a>
              <a href="mailto:rent@enochdfw.com">E-mail: rent@enochdfw.com</a>
              <a href="https://www.bing.com/maps?osid=33722351-871f-4413-961a-de30d5342d6d&cp=32.763407~-97.155837&lvl=16&v=2&sV=2&form=S00027" target={"_blank"}>
                Location: <span>8940 Creek Run Rd Fort Worth, TX 76120</span>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center">
          Copyright {new Date().getFullYear()} Enoch Properties . All Rights
          Reserved. Property Manager Website powered by PMW | Sitemap
        </p>
      </div>
    </div>
  );
};

export default Footer;

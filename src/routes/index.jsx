import { Routes, Route, Navigate } from "react-router-dom";
import Promises from "../components/Owners/Promises";
import Properties from "../components/Properties";
import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import Pricing from "../components/Owners/Pricing";
import WhatWeDo from "../components/Owners/WhatWeDo";
import TenantScreening from "../components/Owners/TenantScreening";
import ResidentBenfits from "../components/Owners/ResidentBenfits";
import GettingYourPropertyReady from "../components/Owners/GettingYourPropertyReady";
import ResidentResources from "../components/Owners/ResidentResources";
import PetPolicy from "../components/Extra/PetPolicy";
import About from "../views/AboutView";
import Contact from "../views/Contact";
import Property from "../components/Property";
import ApplyOnlineLayout from "../layout/ApplyOnlineLayout";
import StartPage from "../components/ApplyOnline/StartPage";
import ContactInfo from "../components/ApplyOnline/ContactInfo";
import Address from "../components/ApplyOnline/Address";
import CoApplicants from "../components/ApplyOnline/CoApplicants";
import PersonalInfo from "../components/ApplyOnline/PersonalInfo";
import YourIncome from "../components/ApplyOnline/YourIncome";
import IncomeVerification from "../components/ApplyOnline/IncomeVerification";
import Questions from "../components/ApplyOnline/Questions";
import AttachDocuments from "../components/ApplyOnline/AttachDocuments";
import ReviewConfirm from "../components/ApplyOnline/ReviewConfirm";

// todo lazy loading

// import { lazy } from "react";
// import Loadable from "../Helpers/Loadable";
// const Component = Loadable(lazy(() => import("../views/Component")));

export default function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/properties" element={<Properties />} />

        <Route exact path="/properties/:propertyId" element={<Property />} />
        <Route exact path="/promises" element={<Promises />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/tenant-screening" element={<TenantScreening />} />
        <Route exact path="/resident-benfits" element={<ResidentBenfits />} />
        <Route
          exact
          path="/resident-resources"
          element={<ResidentResources />}
        />
        <Route
          exact
          path="/getting-your-property-ready"
          element={<GettingYourPropertyReady />}
        />
        <Route exact path="/pet-policy" element={<PetPolicy />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
      <Route path="/apply-online" element={<ApplyOnlineLayout />}>
        <Route exact path="/apply-online" element={<StartPage />} />
        <Route exact path="/apply-online/:listingId" element={<StartPage />} />
        <Route
          exact
          path="/apply-online/contact-info"
          element={<ContactInfo />}
        />
        <Route exact path="/apply-online/address" element={<Address />} />
        <Route
          exact
          path="/apply-online/co-applicants"
          element={<CoApplicants />}
        />
        <Route
          exact
          path="/apply-online/personal-info"
          element={<PersonalInfo />}
        />
        <Route
          exact
          path="/apply-online/your-income"
          element={<YourIncome />}
        />
        <Route
          exact
          path="/apply-online/income-verification"
          element={<IncomeVerification />}
        />
        <Route exact path="/apply-online/questions" element={<Questions />} />
        <Route
          exact
          path="/apply-online/documents"
          element={<AttachDocuments />}
        />
        <Route
          exact
          path="/apply-online/review-confirm"
          element={<ReviewConfirm />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

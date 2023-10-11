import React from "react";
import { useContext } from "react";
import { FcInfo } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import dayjs from "dayjs";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import uniqid from "uniqid";
const ReviewConfirm = () => {
  const { status, application, setStatus } = useContext(ApplyOnlineContext);
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const createProperty = async (propObj) => {
    console.log("uploaing");

    const genratedID = uniqid();
    propObj.applicationId = genratedID;
    propObj.applicationDate = new Date();

    const courseRef = doc(db, "tenants", genratedID);
    await setDoc(courseRef, propObj);
    console.log("done");
    setSubmit(true);
  };

  const handleMove = () => {
    setStatus([
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
    ]);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let prop = { ...application };
    status.forEach((state) => {
      if (state.data) {
        prop = { ...prop, ...state.data };
      }
    });
    try {
      createProperty(prop);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-[13px] my-4 bg-blue-100 p-2 rounded-lg flex gap-x-1 justify-center item">
        <FcInfo size={16} /> You're almost done! Please review and sign below to
        complete your rental application.
      </h1>
      <h1 className="text-xl font-semibold leading-6 pb-1 mb-4">
        Review and confirm
      </h1>
      <div className="mt-5">
        <h1 className="text-sm font-semibold leading-6 text-blue-400 border-b pb-1 mb-4">
          APPLICANT
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="col-span-full list-none text-center grid grid-cols-2 gap-x-4">
            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Name{" "}
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {status[1]?.data?.firstName} {status[1]?.data?.lastName}
            </h1>

            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Email
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {" "}
              {status[1]?.data?.email}
            </h1>

            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Phone Number(s){" "}
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {status[1]?.data?.phone}
            </h1>

            <h1 className="text-gray-500 text-sm font-semibold text-right">
              SSN{" "}
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {status[4]?.data?.ssn}{" "}
            </h1>

            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Date of Birth{" "}
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {" "}
              {dayjs(status[4]?.data?.dob).format("DD/MM/YYYY")}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-sm font-semibold leading-6 text-blue-400 border-b pb-1 mb-4 uppercase">
          Genral Information
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="col-span-full list-none text-center grid grid-cols-2 gap-x-4">
            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Property Address{" "}
            </h1>
            <h1 className="text-left font-semibold text-sm">
              <p className=" inline-block">{application?.location}</p>
            </h1>

            <h1 className="text-gray-500 text-sm font-semibold text-right">
              Desired Move-in
            </h1>
            <h1 className="text-left font-semibold text-sm">
              {status[0]?.data?.date}
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold leading-6 pb-1 mt-6">
        Terms of Agreement
      </h1>

      <div className="border shadow p-4 max-h-96 overflow-auto  scrollbar-hide">
        <h1 className="font-semibold text-lg mb-2">Enoch Properties</h1>
        <div className="text-[14px] mb-4">
          The following Application Agreement will be signed by all applicants
          prior to signing a lease contract. While some of the information below
          may not yet be applicable to your situation, there are some provisions
          that may become applicable prior to signing a lease contract. In order
          to continue with this online application, you'll need to review the
          Application Agreement carefully and acknowledge that you accept its
          terms.
        </div>
        <div className="space-y-2 text-[14px]">
          <p>
            1. Lease Contract Information. The Lease Contract contemplated by
            the parties is attached or, if no Lease Contract is attached, the
            Lease Contract will be the current Lease Contract noted above.
            Special information and conditions must be explicitly noted on an
            attached Lease Contract or in the Contemplated Lease Contract
            Information above.
          </p>
          <p>
            2. Application Fee (nonrefundable). You have delivered to our
            representative an application fee in the amount indicated below, and
            this payment partially defrays the cost of administrative paperwork.
            It's nonrefundable.
          </p>
          <p>
            3. Application Deposit (may or may not be refundable). In addition
            to any application fee, you have delivered to our representative an
            application deposit in the amount indicated below. The application
            deposit is not a security deposit. However, it will be credited
            toward the required security deposit when the Lease Contract has
            been signed by all parties; OR it will be refunded under paragraph
            10 if you are not approved; OR it will be retained by us as
            liquidated damages if you fail to sign or attempt to withdraw under
            paragraph 6 or 7.
          </p>
          <p>
            4. Approval When Lease Contract Is Signed in Advance. If you and all
            co-applicants have already signed the Lease Contract when we approve
            the Application, our representative will notify you (or one of you
            if there are co-applicants) of our approval, sign the Lease
            Contract, and then credit the application deposit of all applicants
            toward the required security deposit.
          </p>
          <p>
            5. Approval When Lease Contract Isn't Yet Signed. If you and all
            co-applicants have not signed the Lease Contract when we approve the
            Application, our representative will notify you (or one of you if
            there are co-applicants) of the approval, sign the Lease Contract
            when you and all co-applicants have signed, and then credit the
            application deposit of all applicants toward the required security
            deposit.
          </p>
          <p>
            6. If You Fail to Sign Lease Contract After Approval. Unless we
            authorize otherwise in writing, you and all co-applicants must sign
            the Lease Contract within 3 days after we give you our approval in
            person, by telephone or by email, or within 5 days after we mail you
            our approval. If you or any co-applicant fails to sign as required,
            we may keep the application deposit as liquidated damages, and
            terminate all further obligations under this Agreement.
          </p>
          <p>
            7. If You Withdraw Before Approval. You and any co-applicant may not
            withdraw your application or the application deposit. If you or any
            co-applicant withdraws an Application or notifies us that you've
            changed your mind about renting the dwelling unit, we'll be entitled
            to retain all application deposits as liquidated damages, and the
            parties will then have no further obligation to each other.
          </p>
          <p>
            {" "}
            8. Completed Application. An Application will not be considered
            "completed" and will not be processed until all of the following
            have been provided to us: a separate Application has been fully
            filled out and signed by you and each co-applicant; an application
            fee has been paid to us; an application deposit has been paid to us.
            If no item is checked, all are necessary for the Application to be
            considered completed.{" "}
          </p>
          <p>
            9. Nonapproval. We will notify you whether you've been approved
            within
          </p>
          <p>
            10 days after the date we receive a completed Application. Your
            Application will be considered "disapproved" if we fail to notify
            you of your approval within 10 days after we have received a
            completed Application. Notification may be in person or by mail or
            telephone unless you have requested that notification be by mail.
            You must not assume approval until you receive actual notice of
            approval. The 10-day time period may be changed only by separate
            written agreement.
          </p>
          <p>
            {" "}
            10. Refund After Nonapproval. If you or any co-applicant is
            disapproved or deemed disapproved under paragraph 9, we'll refund
            all application deposits within 30 days of such disapproval. Refund
            checks may be made payable to all co-applicants and mailed to one
            applicant.
          </p>
          <p>
            {" "}
            11. Extension of Deadlines. If the deadline for signing, approving,
            or re- funding under paragraphs 6, 9, or 10 falls on a Saturday,
            Sunday, or a state or federal holiday, the deadline will be extended
            to the end of the next day.
          </p>
          <p>
            {" "}
            12. Notice to or from Co-applicants. Any notice we give you or your
            co-applicant is considered notice to all co-applicants; and any
            notice from you or your co-applicant is considered notice from all
            co-applicants.
          </p>
          <p>
            13. Keys or Access Devices. We'll furnish keys and/or access devices
            only after: (1) all parties have signed the contemplated Lease
            Contract and other rental documents referred to in the Lease
            Contract; and (2) all applicable rents and security deposits have
            been paid in full.
          </p>
          <p>
            14. Signature. Our reception of this application is consent only to
            this Application Agreement. It does not bind us to accept applicant
            or to sign the proposed Lease Contract.
          </p>
        </div>
      </div>

      <div className="shadow p-4 mt-4 border-2 border-[#51bee1] bg-[#e6f7fb]">
        <fieldset>
          <div className="mb-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  value={checked}
                  onChange={setChecked}
                  required
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  I agree to the Terms and Conditions Above
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Authorized/Acknowledged by{" "}
            <span className="text-gray-500 text-sm">
              (Type your Full Name below)
            </span>
            : <span className="text-red-600">*</span>
          </label>
          <div className="mt-2">
            <textarea
              required
              value={text}
              onChange={({ target }) => setText(target.value)}
              id="about"
              name="about"
              rows="3"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/documents">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Previous
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit Application
        </button>
      </div>
      {!!submit && (
        <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      viewBox="0 0 117 117"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      stroke="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title></title> <desc></desc> <defs></defs>{" "}
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          {" "}
                          <g fill-rule="nonzero" id="correct">
                            {" "}
                            <path
                              d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                              fill="#17AB13"
                              id="Shape"
                            ></path>{" "}
                            <path
                              d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                              fill="#4A4A4A"
                              id="Shape"
                            ></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Successfully Submitted!!
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Our Agent Will talk to you on this ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={handleMove}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
export default ReviewConfirm;

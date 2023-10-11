import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";

import { MdOutlineAddCircle, MdRemoveCircle } from "react-icons/md";
import uniqid from "uniqid";

const CoApplicants = () => {
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const PAGE_ID = 4;
  const [coApp, setCoApp] = useState(false);

  const [coAppArr, setCoAppArr] = useState([0]);
  const [otherArr, setOtherArr] = useState([0]);
  const [petsArr, setPetsArr] = useState([0]);
  const [otherApp, setOtherApp] = useState(false);
  const [pets, setPets] = useState(false);
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const state = status.map((status) => {
      if (status.id === PAGE_ID)
        return {
          ...status,
          status: 2,
          data: {
            coAppArr,
            otherArr,
            petsArr,
          },
        };
      else if (status.status !== 2 && status.id === 5)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);
    navigation("/apply-online/personal-info");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-lg">Occupant Information</h1>

      <div className="p-4 bg-yellow-100 text-sm my-3">
        Co-Applicants are other individuals who are age 18 or older that will be
        residing in this unit/house. Each Co-Applicant must submit their own
        application and will sign the lease. Other Occupants are individuals who
        will live in the unit/house but will not sign the lease (e.g. a minor or
        child).
      </div>
      <h1 className="text-xs mt-5">Check all that apply</h1>
      <div className="mt-5">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-blue-400">
            CO-APPLICANTS
          </legend>
          <div className="mt-1 pt-3 border-t">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="coApp"
                  name="coApp"
                  type="checkbox"
                  checked={coApp}
                  onChange={() => {
                    setCoApp(!coApp);
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-xs leading-6">
                <label htmlFor="coApp" className="text-black">
                  I am applying with Co-Applicants who will be signing the lease
                </label>
              </div>
            </div>
          </div>
          {coApp && (
            <>
              {coAppArr.map((el) => (
                <div className="my-2">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Legal First name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="firstName"
                          className={`${"normal-input"}`}
                        />{" "}
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="lastName"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="phone"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>
                  </div>
                  {coAppArr.length > 1 && (
                    <button
                      type="button"
                      className="p-1 hover:bg-red-100  flex items-center gap-x-2 mt-3"
                      onClick={() => {
                        setCoAppArr((data) => data.filter((k) => k !== el));
                      }}
                    >
                      <MdRemoveCircle size={18} color="#d84030" />{" "}
                      <span>Remove This Additional Co-Applicant</span>
                    </button>
                  )}{" "}
                </div>
              ))}

              <button
                type="button"
                className="hover:bg-green-100 flex items-center gap-x-2 mt-3 p-1"
                onClick={() => {
                  setCoAppArr((data) => [...data, uniqid()]);
                }}
              >
                <MdOutlineAddCircle size={18} color="#409040" />{" "}
                <span>Add Additional Co-Applicant</span>
              </button>
            </>
          )}
        </fieldset>
      </div>
      <div className="mt-8">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-blue-400">
            OTHER OCCUPANTS
          </legend>
          <div className="mt-1 pt-3 border-t">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="other-applicants"
                  name="other-applicants"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={otherApp}
                  onChange={() => {
                    setOtherApp(!otherApp);
                  }}
                />
              </div>
              <div className="text-xs leading-6">
                <label htmlFor="other-applicants" className="text-black">
                  I will have other occupants living with me who will not be
                  signing the lease{" "}
                </label>
              </div>
            </div>
          </div>

          {otherApp && (
            <>
              {otherArr.map((el) => (
                <div className="my-2">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Legal First name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="firstName"
                          className={`${"normal-input"}`}
                        />{" "}
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="lastName"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>
                  </div>
                  {otherArr.length > 1 && (
                    <button
                      type="button"
                      className="p-1 hover:bg-red-100  flex items-center gap-x-2 mt-3"
                      onClick={() => {
                        setOtherArr((data) => data.filter((k) => k !== el));
                      }}
                    >
                      <MdRemoveCircle size={18} color="#d84030" />{" "}
                      <span>Remove This Additional Occupant</span>
                    </button>
                  )}{" "}
                </div>
              ))}

              <button
                type="button"
                className="hover:bg-green-100 flex items-center gap-x-2 mt-3 p-1"
                onClick={() => {
                  setOtherArr((data) => [...data, uniqid()]);
                }}
              >
                <MdOutlineAddCircle size={18} color="#409040" />{" "}
                <span>Add Additional Occupant</span>
              </button>
            </>
          )}
        </fieldset>
      </div>
      <div className="mt-8">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-blue-400">
            PETS
          </legend>
          <div className="mt-1 pt-3 border-t">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="pets"
                  name="pets"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={pets}
                  onChange={() => {
                    setPets(!pets);
                  }}
                />
              </div>
              <div className="text-xs leading-6">
                <label htmlFor="pets" className="text-black">
                  I have pets{" "}
                </label>
              </div>
            </div>
          </div>

          {pets && (
            <>
              {petsArr.map((el) => (
                <div className="my-2">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="petsName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Pet's Name <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="petsName"
                          id="petsName"
                          autoComplete="petsName"
                          className={`${"normal-input"}`}
                        />{" "}
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Age <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          id="age"
                          name="age"
                          type="text"
                          autoComplete="email"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Type/Breed <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          required
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="lastName"
                          className={`${"normal-input"}`}
                        />
                      </div>
                    </div>
                  </div>
                  {petsArr.length > 1 && (
                    <button
                      type="button"
                      className="p-1 hover:bg-red-100  flex items-center gap-x-2 mt-3"
                      onClick={() => {
                        setPetsArr((data) => data.filter((k) => k !== el));
                      }}
                    >
                      <MdRemoveCircle size={18} color="#d84030" />{" "}
                      <span> Remove This Additional Occupant</span>
                    </button>
                  )}{" "}
                </div>
              ))}

              <button
                type="button"
                className="hover:bg-green-100 flex items-center gap-x-2 mt-3 p-1"
                onClick={() => {
                  setPetsArr((data) => [...data, uniqid()]);
                }}
              >
                <MdOutlineAddCircle size={18} color="#409040" />{" "}
                <span>Add Additional Occupant</span>
              </button>
            </>
          )}
        </fieldset>
      </div>

      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/address">
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
          Continue
        </button>
      </div>
    </form>
  );
};

export default CoApplicants;

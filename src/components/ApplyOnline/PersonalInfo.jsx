import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    dob: yup
      .date()
      .max(new Date(), "Date Of Birth cannot be in the future")
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .test("valid-birthday", "Invalid birthday format", function (value) {
        if (!value) return true; // handled by `.required()` above
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        return age >= 0 && age < 120;
      })
      .required("Date Of Birth is required"),

    ssn: yup
      .string()
      .matches(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format (###-##-####)")
      .required("SSN or ITIN is Required"),
    governmentID: yup.string(),
    issuingState: yup.string(),
  })
  .required();
const PersonalInfo = () => {
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const PAGE_ID = 5;
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: status[PAGE_ID - 1]?.data,
  });

  const onSubmit = (data) => {
    const state = status.map((status) => {
      if (status.id === PAGE_ID) return { ...status, status: 2, data };
      else if (status.status !== 2 && status.id === 6)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);
    navigation("/apply-online/your-income");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg">Personal information</h1>

      <div className="mt-5">
        <h1 className="text-sm font-semibold leading-6 text-blue-400 border-b pb-1 mb-4">
          IDENTIFICATION
        </h1>

        <h1 className="text-[13px] my-4">
          {" "}
          🔒 We need this information to run credit and background checks.
          Everything submitted in this application is encrypted and stored
          securely.
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="dob"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-xs outline-none">
                <input
                  type="date"
                  name="dob"
                  {...register("dob")}
                  id="dob"
                  className={`${!!errors.dob ? "error-input" : "normal-input"}`}
                  placeholder="MM/DD/YYYY"
                  aria-required="true"
                />
              </div>
            </div>
            <p className="text-xs mt-1 text-red-500">{errors.dob?.message}</p>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="ssn"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Social Security Number (or ITIN){" "}
              <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                {...register("ssn")}
                type="text"
                name="ssn"
                id="ssn"
                autoComplete="ssn"
                className={`${!!errors.ssn ? "error-input" : "normal-input"}`}
              />
              <p className="text-xs mt-1 text-red-500">{errors.ssn?.message}</p>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="governmentId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Government Issued ID
            </label>
            <div className="mt-2">
              <input
                {...register("governmentId")}
                type="text"
                name="governmentId"
                id="governmentId"
                autoComplete="governmentId"
                className="normal-input"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="issuingState"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issuing State/Territory
            </label>
            <div className="mt-2">
              <input
                {...register("issuingState")}
                type="text"
                name="issuingState"
                id="issuingState"
                autoComplete="issuingState"
                className="normal-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/co-applicants">
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

export default PersonalInfo;

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\\-]?\d{3}[\s\\-]?\d{4}$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("First Name is Required"),
    lastName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Last Name is Required"),
    middleName: yup.string().matches(/^[a-zA-Z]+$/, "Only letters are allowed"),
    suffix: yup.string(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    email: yup.string().email().required("Email is Required"),
    confirmEmail: yup
      .string()
      .email()
      .required("Confirm Email is Required")
      .oneOf([yup.ref("email")], "Emails do not match"),
  })
  .required();

export default function ContactInfo() {
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const PAGE_ID = 2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: status[PAGE_ID - 1]?.data,
  });

  const navigation = useNavigate();
  const onSubmit = (data) => {
    const state = status.map((status) => {
      if (status.id === PAGE_ID) return { ...status, status: 2, data };
      else if (status.status !== 2 && status.id === 3)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);
    navigation("/apply-online/address");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Your contact info
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please let us know how we can best reach you.
          </p>

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
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  className={`${
                    !!errors.firstName ? "error-input" : "normal-input"
                  }`}
                />{" "}
                <p className="text-xs mt-1 text-red-500">
                  {errors.firstName?.message}
                </p>
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
                  {...register("lastName")}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  className={`${
                    !!errors.lastName ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Middle name
              </label>
              <div className="mt-2">
                <input
                  {...register("middleName")}
                  type="text"
                  name="middleName"
                  id="middleName"
                  autoComplete="middleName"
                  className="normal-input"
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.middleName?.message}
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="suffix"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Suffix
              </label>
              <div className="mt-2">
                <select
                  {...register("suffix")}
                  id="suffix"
                  name="suffix"
                  autoComplete="suffix"
                  className="normal-input"
                >
                  <option></option>
                  <option>Jr</option>
                  <option>Sr</option>
                  <option>I</option>
                  <option>II</option>
                  <option>IV</option>
                  <option>V</option>
                </select>
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
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`${
                    !!errors.email ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="confirmEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Email address <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  {...register("confirmEmail")}
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  autoComplete="email"
                  className={`${
                    !!errors.confirmEmail ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.confirmEmail?.message}
                </p>
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
                  {...register("phone")}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className={`${
                    !!errors.phone ? "error-input" : "normal-input"
                  }`}
                />
                <p className="text-xs mt-1 text-red-500">
                  {errors.phone?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/:listingId">
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
}

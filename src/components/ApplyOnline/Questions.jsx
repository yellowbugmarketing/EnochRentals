import { useContext } from "react";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
const schema = yup
  .object({
    _1: yup.string().required("This Field is Required"),
    _2: yup.string().required("This Field is Required"),
    _3: yup.string().required("This Field is Required"),
    _4: yup.string().required("This Field is Required"),

    _1answer: yup.string(),
    _2answer: yup.string(),
    _3answer: yup.string(),
    _4answer: yup.string(),
  })
  .required();
const Questions = () => {
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const PAGE_ID = 7;

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
  console.log(status[PAGE_ID - 1]?.data);
  const onSubmit = (data) => {
    const state = status.map((status) => {
      if (status.id === PAGE_ID) return { ...status, status: 2, data };
      else if (status.status !== 2 && status.id === 8)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);
    navigation("/apply-online/documents");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg mb-4">Questions</h1>
      <fieldset>
        <p className="mt-8 text-sm leading-6 font-semibold">
          Have you ever been convicted of a crime?{" "}
          <span className="text-red-600">*</span>
        </p>
        <div className="mt-3 space-y-4">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_1"
              id="_11"
              {...register("_1")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_11"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_1"
              id="_12"
              {...register("_1")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_12"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No
            </label>
          </div>
          <p className="text-xs mt-1 text-red-500">{errors._1?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="_1answer"
            className="block text-sm font-semibold leading-6 "
          >
            Please explain:
          </label>
          <div className="mt-2">
            <textarea
              id="_1answer"
              name="_1answer"
              rows="4"
              {...register("_1answer")}
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 px-2"
            ></textarea>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <p className="mt-8 text-sm leading-6 font-semibold">
          Have you ever filed suit against a landlord?{" "}
          <span className="text-red-600">*</span>
        </p>
        <div className="mt-3 space-y-4">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_2"
              id="_21"
              {...register("_2")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_21"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_2"
              id="_22"
              {...register("_2")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_22"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No
            </label>
          </div>
          <p className="text-xs mt-1 text-red-500">{errors._2?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="_2answer"
            className="block text-sm font-semibold leading-6 "
          >
            Please explain:
          </label>
          <div className="mt-2">
            <textarea
              id="_2answer"
              name="_2answer"
              rows="4"
              {...register("_2answer")}
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 px-2"
            ></textarea>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <p className="mt-8 text-sm leading-6 font-semibold">
          Do you have a water bed, an aquarium or any other water filled
          furniture? <span className="text-red-600">*</span>
        </p>
        <div className="mt-3 space-y-4">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_3"
              id="_31"
              {...register("_3")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_31"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_3"
              id="_32"
              {...register("_3")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_32"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No
            </label>
          </div>
          <p className="text-xs mt-1 text-red-500">{errors._3?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="_3answer"
            className="block text-sm font-semibold leading-6 "
          >
            Please explain:
          </label>
          <div className="mt-2">
            <textarea
              id="_3answer"
              name="_3answer"
              rows="4"
              {...register("_3answer")}
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 px-2"
            ></textarea>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <p className="mt-8 text-sm leading-6 font-semibold">
          Are you a smoker? <span className="text-red-600">*</span>
        </p>
        <div className="mt-3 space-y-4">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_4"
              id="_41"
              {...register("_4")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_41"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="_4"
              id="_42"
              {...register("_4")}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="_42"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No
            </label>
          </div>
          <p className="text-xs mt-1 text-red-500">{errors._4?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="_4answer"
            className="block text-sm font-semibold leading-6 "
          >
            Please explain:
          </label>
          <div className="mt-2">
            <textarea
              id="_4answer"
              name="_4answer"
              rows="4"
              {...register("_4answer")}
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 px-2"
            ></textarea>
          </div>
        </div>
      </fieldset>
      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/your-income">
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

export default Questions;

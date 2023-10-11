import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import dayjs from "dayjs";
const StartPage = () => {
  const PAGE_ID = 1;
  const { status, setStatus, application } = useContext(ApplyOnlineContext);
  const navigation = useNavigate();

  const [date, setDate] = useState(dayjs());

  const canContinue =
    dayjs(
      dayjs()
        .set("date", new Date(date).getDate())
        .set("month", new Date(date).getMonth())
        .set("year", new Date(date).getFullYear())
    ).diff(dayjs(), "day") >= 0;
  console.log(
    dayjs(
      dayjs()
        .set("date", new Date(date).getDate())
        .set("month", new Date(date).getMonth())
        .set("year", new Date(date).getFullYear())
    ).diff(dayjs(), "day")
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const state = status.map((status) => {
      if (status.id === PAGE_ID)
        return { ...status, status: 2, data: { date } };
      else if (status.status !== 2 && status.id === 2)
        return { ...status, status: 1 };
      else return status;
    });

    setStatus(state);

    navigation("/apply-online/contact-info");
  };
  return (
    <div className="p-4">
      <h1 className="text-xl my-2">Before you begin:</h1>

      <p className="my-2">
        Please be prepared to pay the application fee as outlined in the
        property listing. In addition to this rental application, you will also
        be required to provide a copy of a valid form of identification and
        proof of income.
      </p>

      <p className="my-2">
        To complete this rental application, you must be prepared to provide 3
        years of residential history as well as contact information for your
        rental references. You will also be asked to provide information on your
        monthly income, and please note that most properties require that
        applicant combined gross income is at least three (3) times the monthly
        rent amount.
      </p>
      <p className="my-2">
        Each resident over the age of 18 must submit a separate rental
        application.
      </p>
      <p className="my-2 font-semibold">Application Fee: $35.00</p>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4">
        <p className="text-lg font-semibold">You are applying to rent:</p>
        <p className="mt-4 ">{application?.name}</p>
        <p className="my-4 inline-block">{application?.location}</p>
        <Link
          to="/properties"
          className="inline-block rounded-md bg-black px-3 py-2 ml-3 text-xs font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Change Property
        </Link>
        <label
          htmlFor="username"
          className="block text-sm leading-6 text-gray-900 font-semibold"
        >
          Desired Move-in
        </label>
        <div className="mt-2">
          <div
            className={`flex rounded-md shadow-sm ring-1 ring-inset ${
              !canContinue ? "ring-red-300" : "ring-gray-300"
            } focus-within:ring-2 focus-within:ring-inset sm:max-w-xs outline-none`}
          >
            <input
              type="date"
              name="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`block flex-1 border-0 bg-transparent py-1.5 px-3  text-gray-900
              ${!canContinue ? "text-red-500" : "text-gray-900"}
              placeholder:text-gray-400
               focus:ring- sm:text-sm sm:leading-6`}
              placeholder="janesmith"
            />
          </div>
          {!canContinue && (
            <p className="text-red-600 text-xs ml-1 mt-1">
              Please select a date on or after {dayjs().format("DD/MM/YYYY")}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={!canContinue}
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default StartPage;

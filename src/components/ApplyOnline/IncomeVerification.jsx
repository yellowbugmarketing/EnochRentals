import { useContext } from "react";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { useNavigate } from "react-router-dom";

const IncomeVerification = () => {
  const { status, setStatus } = useContext(ApplyOnlineContext);

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    const state = status.map((status) => {
      if (status.status !== 2 && status.id === 7)
        return { ...status, status: 2 };
      else if (status.status !== 2 && status.id === 8)
        return { ...status, status: 1 };
      else return status;
    });
    setStatus(state);
    e.preventDefault();
    navigation("/apply-online/questions");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-lg">Income Verification</h1>

      <div className="mt-5">
        <h1 className="text-sm font-semibold leading-6 text-blue-400 border-b pb-1 mb-4">
          PROOF OF INC OME
        </h1>

        <h1 className="text-[13px] my-4">
          {" "}
          All you will need is your login credentials for the accounts you want
          considered. It's a simple and secure process similar to online banking
          and is more secure than emailing financial documents. .
        </h1>
        <p className="my-3 ">How it works:</p>
        <ol>
          <li className="text-sm ml-4 my-1">
            1. Select your financial institution
          </li>
          <li className="text-sm ml-4 my-1">
            2. Securely authenticate with your financial institution.
          </li>
          <li className="text-sm ml-4 my-1">
            3. Select the accounts you want considered & add multiple banks if
            necessary.
          </li>
          <li className="text-sm ml-4 my-1">4. Click submit. That's it!</li>
        </ol>

        <p className="text-sm my-4">
          Your data is accessed as a read-only report and all data is encrypted.
        </p>
      </div>

      <p className="text-xs">
        If you do not bank online or want to upload your own proof of income,
        you can do so on the Attach Documents page.
      </p>
      <div className="mt-4 flex items-center  gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Skip
        </button>
      </div>
    </form>
  );
};

export default IncomeVerification;

import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FcFile } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
const AttachDocuments = () => {
  const { status, setStatus } = useContext(ApplyOnlineContext);
  const navigation = useNavigate();
  const PAGE_ID = 8;
  const [fileNames, setFileNames] = useState([]);

  const [error, setError] = useState("");

  const [incomeProofs, setIncomeProofs] = useState([]);
  const [others, setOthers] = useState([]);
  const handleFileUpload = (event) => {
    const files = event.target.files;
    const names = Array.from(files).map((file) => file.name);
    setFileNames((e) => [...e, ...names]);
  };

  const handleIncomeProofs = (event) => {
    const files = event.target.files;
    const names = Array.from(files).map((file) => file.name);
    setIncomeProofs((e) => [...e, ...names]);
  };

  const handleOthers = (event) => {
    const files = event.target.files;
    const names = Array.from(files).map((file) => file.name);
    setOthers((e) => [...e, ...names]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (fileNames.length > 0 && incomeProofs.length > 0) {
      const state = status.map((status) => {
        if (status.id === PAGE_ID)
          return {
            ...status,
            status: 2,
            data: { fileNames, incomeProofs, others },
          };
        else if (status.status !== 2 && status.id === 9)
          return { ...status, status: 1 };
        else return status;
      });
      setStatus(state);
      navigation("/apply-online/review-confirm");
    } else {
      setError("Please Upload All Required Documents to continue");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-lg mb-4">Attach Documents</h1>
      <p className="my-4 text-sm">
        Please upload all required documentation including:
      </p>
      <p className="my-2 text-sm">- Photo ID</p>
      <p className="my-2 text-sm">
        - Proof of income (e.g. recent pay stubs, bank statements, or tax
        returns)
      </p>
      <div className="my-6">
        <label
          htmlFor="cover-photo"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Photo ID <span className="text-red-600">*</span>
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
              <label
                htmlFor="file-upload_1"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload_1"
                  name="file-upload_1"
                  type="file"
                  className="sr-only"
                  multiple
                  onChange={handleFileUpload}
                />
              </label>
              <p className="pl-1 text-center">or drag and drop</p>
            </div>
            {fileNames.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {fileNames.map((file) => (
                  <span className="col-span-2 p-1 px-2 bg-black font-semibold text-white flex items-center space-x-2 rounded-md">
                    <FcFile color="white" size={16} /> <span>{file}</span>
                    <AiFillDelete
                      color="red"
                      size={16}
                      className="cursor-pointer"
                      onClick={() => {
                        setFileNames((names) =>
                          names.filter((name) => name !== file)
                        );
                      }}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-6">
        <label
          htmlFor="cover-photo"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Proof of Income <span className="text-red-600">*</span>
        </label>
        <p className="text-xs">
          Upload additional offer letters, scholarship information, etc. below
        </p>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
              <label
                htmlFor="file-upload2"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload2"
                  name="file-upload2"
                  type="file"
                  className="sr-only"
                  onChange={handleIncomeProofs}
                />
              </label>
              <p className="pl-1 text-center">or drag and drop</p>
            </div>
            {/* <p className="text-xs leading-5 text-gray-600 justify-center">
              PNG, JPG, GIF up to 10MB
            </p> */}
            {incomeProofs.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {incomeProofs.map((file) => (
                  <span className="col-span-2 p-1 px-2 bg-black font-semibold text-white flex items-center space-x-2 rounded-md">
                    <FcFile color="white" size={16} /> <span>{file}</span>
                    <AiFillDelete
                      color="red"
                      size={16}
                      className="cursor-pointer"
                      onClick={() => {
                        setIncomeProofs((names) =>
                          names.filter((name) => name !== file)
                        );
                      }}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-xs my-1">
          * Upload additional offer letters, scholarship information, etc. below
        </p>
      </div>
      <div className="my-6">
        <label
          htmlFor="cover-photo"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Others
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
              <label
                htmlFor="file-upload3"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload3"
                  name="file-upload3"
                  type="file"
                  className="sr-only"
                  onChange={handleOthers}
                />
              </label>
              <p className="pl-1 text-center">or drag and drop</p>
            </div>

            {others.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {others.map((file) => (
                  <span className="col-span-2 p-1 px-2 bg-black font-semibold text-white flex items-center space-x-2 rounded-md">
                    <FcFile color="white" size={16} /> <span>{file}</span>
                    <AiFillDelete
                      color="red"
                      size={16}
                      className="cursor-pointer"
                      onClick={() => {
                        setOthers((names) =>
                          names.filter((name) => name !== file)
                        );
                      }}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {!!error && <p className="my-2 text-sm text-red-600">{error}</p>}

      <div className="mt-3 flex items-center justify-end gap-x-1">
        <Link to="/apply-online/questions">
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

export default AttachDocuments;

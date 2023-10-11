import React from "react";
import { useContext } from "react";
import { FiEdit2 } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { ApplyOnlineContext } from "../../context/ApplyOnlineContext";
import { Link } from "react-router-dom";

const Tracker = () => {
  const { status } = useContext(ApplyOnlineContext);
  return (
    <div className="p-4">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12 text-gray-50 max-h-full">
          {status?.map((tracker) => (
            <Link
              to={tracker.status === 0 ? "#" : tracker.path}
              className="flex md:contents"
              key={tracker.id}
            >
              {tracker.status === 1 ? (
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-5 flex items-center justify-center">
                    <div className="h-full w-1 bg-cyan-500 pointer-events-none"></div>
                  </div>
                  <div className="w-5 h-5 absolute top-1/2 -mt-3 flex items-center justify-center rounded-full bg-cyan-500 shadow">
                    <FiEdit2 color="#fff" size={12} />
                  </div>
                </div>
              ) : tracker.status === 2 ? (
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-5 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-5 h-5 absolute top-1/2 -mt-3 flex items-center justify-center rounded-full bg-green-500 shadow">
                    <FaCheck color="#fff" size={12} />
                  </div>
                </div>
              ) : (
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-5 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="w-5 h-5 absolute top-1/2 -mt-3 flex items-center justify-center rounded-full bg-gray-300 shadow ">
                    <BsCircleFill color="#11111137" size={12} />
                  </div>
                </div>
              )}

              {tracker.status === 1 ? (
                <div className="bg-cyan-500 col-start-4 col-end-12 px-2 py-1 rounded-md my-3 mr-auto shadow-md w-full">
                  <h3 className="font-bold font-primary text-[13px] text-white ">
                    {tracker.name}
                  </h3>
                </div>
              ) : tracker.status === 2 ? (
                <div className="bg-green-500 col-start-4 col-end-12 px-2 py-1 rounded-md my-3 mr-auto shadow-md w-full">
                  <h3 className="font-bold font-primary text-[13px] ">
                    {tracker.name}
                  </h3>
                </div>
              ) : (
                <div className="bg-gray-300 col-start-4 col-end-12 px-2 py-1 rounded-md my-3 mr-auto shadow-md w-full">
                  <h3 className="font-bold font-primary text-[13px] text-gray-500">
                    {tracker.name}
                  </h3>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;

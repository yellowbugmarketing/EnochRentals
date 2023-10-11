import { Outlet } from "react-router-dom";
import OnlineHeader from "./OnlineHeader";
import Tracker from "./Tracker";

const ApplyOnlineLayout = () => {
  return (
    <div className="px-6  max-w-screen-xl mx-auto">
      <OnlineHeader />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 p-3 pb-4 md:max-h-[75vh] md:overflow-auto pr-5">
          <Outlet />
        </div>
        <div className="hidden md:block md:col-span-4 lg:col-span-3">
          <Tracker />
        </div>
      </div>
    </div>
  );
};

export default ApplyOnlineLayout;

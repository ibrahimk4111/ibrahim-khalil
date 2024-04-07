import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";

const LayOut = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex ">
        <Asidebar />
        <div className="w-full h-[94vh] overflow-auto">
          <Outlet />
          <div className=" text-center h-[100vh]">footer</div>
        </div>
      </div>
    </div>
  );
};

export default LayOut;

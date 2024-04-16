import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <div className=" flex ">
        <Asidebar />
        <div className=" w-full md:ml-12 dark:bg-bgColorsInDark dark:text-white">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayOut;

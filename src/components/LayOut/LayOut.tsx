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
        <div className=" h-[100vh] w-full overflow-auto md:ml-12">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayOut;

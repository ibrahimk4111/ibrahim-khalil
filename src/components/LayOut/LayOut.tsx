import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <div className=" flex ">
      <Asidebar />
      <div className=" h-[100vh] w-full overflow-auto ml-12">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LayOut;

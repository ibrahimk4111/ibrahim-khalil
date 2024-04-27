import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Asidebar from "../Asidebar/Asidebar";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Asidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;

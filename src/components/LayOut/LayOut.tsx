import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Asidebar from "./Asidebar/Asidebar";
import Footer from "./Footer/Footer";
import TopButton from "../TopButton/TopButton";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Asidebar />
      <Outlet />
      <Footer />
      <TopButton />
    </>
  );
};

export default LayOut;

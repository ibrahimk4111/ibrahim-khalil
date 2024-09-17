import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkLightToggle from "./DarkLightToggle";
import { CreateContextProvider } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const size = 22;

  const { setExpanded } = React.useContext(CreateContextProvider);
  return (
    <div className=" px-2 flex justify-between items-center h-[8vh] w-full bg-white dark:bg-bgColorsInDark border-b-2 border-slate-200 sticky top-0 z-30">
      {/* Start head or toggle section */}
      <div
        onClick={() => setExpanded((curr) => !curr)}
        className=" cursor-pointer bg-slate-100 hover:bg-slate-200 p-1 rounded-md flex justify-center items-center"
      >
        <RxHamburgerMenu size={size} />
      </div>

      <ul className=" dark:text-white flex gap-2 items-center justify-between text-sm ">
        <li>
          <Link to="#" className=" px-2 py-1 bg-slate-200/30 backdrop-blur-md rounded-md hover:bg-slate-200 ">About</Link>
        </li>
        <li>
          <Link to="#" className=" px-2 py-1 bg-slate-200/30 backdrop-blur-md rounded-md hover:bg-slate-200 ">Projects</Link>
        </li>
        <li>
          <Link to="#" className=" px-2 py-1 bg-slate-200/30 backdrop-blur-md rounded-md hover:bg-slate-200 ">Skills</Link>
        </li>
        <li>
          <Link to="#" className=" px-2 py-1 bg-slate-200/30 backdrop-blur-md rounded-md hover:bg-slate-200 ">Contact</Link>
        </li>
      </ul>
      
      <DarkLightToggle />
    </div>
  );
};

export default Navbar;

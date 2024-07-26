import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkLightToggle from "./DarkLightToggle";
import { CreateContextProvider } from "../../Context/ContextProvider";

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

      <div className=" dark:text-white ">
        <h1 className=" text-2xl">Ibrahim Khalil</h1>
      </div>
      
      <DarkLightToggle />
    </div>
  );
};

export default Navbar;

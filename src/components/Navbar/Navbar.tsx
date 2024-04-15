import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CreateContextProvider } from "../Context/ContextProvider";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const size = 18
  const [toggleDark, setToggleDark] = React.useState<boolean>(false)
  const { setExpanded } = React.useContext(CreateContextProvider);
  return (
    <div className=" p-5 flex justify-between items-center h-10 w-full bg-white sticky top-0 z-30">
      {/* Start head or toggle section */}
      <div
        onClick={() => setExpanded((curr) => !curr)}
        className=" cursor-pointer bg-slate-100 hover:bg-slate-200 p-1 rounded-md flex justify-center items-center"
      >
        <RxHamburgerMenu size={size} />
      </div>
      {/* End head or toggle section */}
      <div>
        <h1>Personal Portfolio</h1>
      </div>
      <button onClick={()=>setToggleDark(curr => !curr)} className=" bg-slate-100 hover:bg-slate-200 p-1 ">
        {
          toggleDark? <FiMoon size={size}/>: <FiSun size={size}/>
        }
      </button>
    </div>
  );
};

export default Navbar;

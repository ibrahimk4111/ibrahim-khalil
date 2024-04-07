import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AsidebarItem from "./AsidebarItem";
import { NavLink } from "react-router-dom";

const Asidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const animation ="h-6 overflow-hidden transition-all duration-500 ease-in-out";
  const animatedClassName = `${expanded ? "w-full" : "w-0"} ${animation}`

  return (
    <div className={`${expanded? "w-[14vw]":"w-[3vw]"} ${animation} h-[94vh] bg-white text-sm`}>
      {/* Start head or toggle section */}
      <section className=" flex items-center p-2 ">
        <div
          className={animatedClassName}
        >
          Navigate Here
        </div>
        <div 
            onClick={() => setExpanded((curr) => !curr)} 
            className=" cursor-pointer bg-slate-100 hover:bg-slate-200 p-1 rounded-md flex justify-center items-center"
          >
            <RxHamburgerMenu size={20} />
        </div>
      </section>
      <hr className=" h-1 mt-2 mb-5 bg-slate-200" />
      {/* End head or toggle section */}

      {/* Start Asidebar Tabs section */}
      <section>
        <ul>
            <li><NavLink to="/resume"><AsidebarItem text="Resume" expanded={expanded} icon={<RxHamburgerMenu size={20} />}/></NavLink></li>
            <li><NavLink to="/"><AsidebarItem text="Blogs" expanded={expanded} icon={<RxHamburgerMenu size={20} />}/></NavLink></li>
        </ul>
      </section>
      {/* End Asidebar Tabs section */}
    </div>
  );
};

export default Asidebar;

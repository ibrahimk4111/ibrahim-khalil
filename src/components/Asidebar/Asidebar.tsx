import * as React from "react";
import AsidebarItem from "./AsidebarItem";
import { NavLink } from "react-router-dom";
import { CreateContextProvider } from "../Context/ContextProvider";
import { navItems } from "../../json/navItem";


const Asidebar = () => {
  const { expanded, setExpanded } = React.useContext(CreateContextProvider);
  // const [expanded, setExpanded] = React.useState<boolean>(true)
  const expandedColser = () =>{
    setExpanded(false)
  }
  const mouseEnterHandler = () =>{
    setExpanded(true)
  }

  const animation =
    "h-6 overflow-hidden transition-all duration-500 ease-in-out";

  return (
    <div>
      <div onClick={expandedColser} className={`${expanded? "fixed bg-black/30 h-[100vh] w-[100vw] z-40": ""}`}></div>
      <div
        className={`${
          expanded ? "w-52" : "md:w-12 w-0"
        } ${animation} text-sm bg-white z-50 h-full fixed left-0 top-12 border-r-2 border-slate-300 dark:bg-bgColorsInDark `}
      >
        {/* Start Asidebar Tabs section */}
        <section>
          <ul>
            {navItems &&
              navItems.map((item) => (
                <li key={item.text} onClick={expandedColser} onMouseEnter={mouseEnterHandler} onMouseLeave={expandedColser}>
                  <NavLink to={item.route}>
                    <AsidebarItem
                      text={item.text}
                      expanded={expanded}
                      icon={item.icon}
                    />
                  </NavLink>
                </li>
              ))}
          </ul>
        </section>
        {/* End Asidebar Tabs section */}
      </div>
    </div>
  );
};

export default Asidebar;

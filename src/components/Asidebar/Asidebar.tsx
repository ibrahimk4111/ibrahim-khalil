import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AsidebarItem from "./AsidebarItem";
import { NavLink } from "react-router-dom";
import { FaBlogger } from "react-icons/fa6";
import { BiCloudDownload } from "react-icons/bi";
import { CreateContextProvider } from "../Context/ContextProvider";
import { paths } from "../utils/paths";

const navItems = [
  {
    route: paths.layout.blogs,
    text: "Blogs",
    icon: <FaBlogger size={20} fill="orange" />,
  },
  {
    route: paths.Resume,
    text: "Resume",
    icon: <BiCloudDownload size={20} />,
  },
];

const Asidebar = () => {
  const { expanded, setExpanded } = React.useContext(CreateContextProvider);
  // const [expanded, setExpanded] = React.useState<boolean>(true)

  const animation =
    "h-6 overflow-hidden transition-all duration-500 ease-in-out";

  return (
    <>
      <div onClick={() => setExpanded((curr) => !curr)} className={`${expanded? "fixed bg-black/30 h-[100vh] w-[100vw] z-40": ""}`}></div>
      <div
        className={`${
          expanded ? "w-60" : "w-12"
        } ${animation} bg-white text-sm h-screen z-50 fixed left-0 top-0`}
      >
        {/* Start head or toggle section */}
        <section className=" flex justify-end items-center p-2 ">
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
            {navItems &&
              navItems.map((item) => (
                <li key={item.text}>
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
    </>
  );
};

export default Asidebar;

import * as React from "react";
import AsidebarItem from "./AsidebarItem";
import { NavLink } from "react-router-dom";
import { FaBlogger } from "react-icons/fa6";
import { BiCloudDownload } from "react-icons/bi";
import { CreateContextProvider } from "../Context/ContextProvider";
import { paths } from "../../utils/paths";

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
    <div className=" h-screen ">
      <div onClick={() => setExpanded((curr) => !curr)} className={`${expanded? "fixed bg-black/30 h-[100vh] w-[100vw] z-40": ""}`}></div>
      <div
        className={`${
          expanded ? "w-60" : "md:w-12 w-0"
        } ${animation} text-sm bg-white z-50 h-full fixed left-0 top-10`}
      >
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
    </div>
  );
};

export default Asidebar;

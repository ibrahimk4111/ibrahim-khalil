import { FaBlogger } from "react-icons/fa6";
import { BiCloudDownload } from "react-icons/bi";
import { paths } from "../utils/paths";
import { FaHome } from "react-icons/fa";

const size = 20

export const navItems = [
    {
      route: paths.layout.home,
      text: "Home",
      icon: <FaHome size={size} />
    },
    {
      route: paths.layout.blogs,
      text: "Blogs",
      icon: <FaBlogger size={size} fill="orange" />
    },
    {
      route: paths.Resume,
      text: "Resume",
      icon: <BiCloudDownload size={size} />
    },
  ];
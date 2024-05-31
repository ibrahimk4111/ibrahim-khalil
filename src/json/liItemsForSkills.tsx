import { AiFillGithub } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiHtml5, DiMongodb, DiNodejs } from "react-icons/di";
import { FaAmilia, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDjango, SiExpress, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

const size = 16

export const liItems = [
  {
    text: "Next.JS",
    url: "https://nextjs.org",
    icon: <SiNextdotjs size={size} fill="black" />,
  },
  {
    text: "React JS",
    url: "https://react.org",
    icon: <FaReact size={size} fill="skyblue" />,
  },
  {
    text: "Redux",
    url: "https://redux.org",
    icon: <SiRedux size={size} fill="blue" />,
  },
  {
    text: "Tailwind CSS",
    url: "https://tailwind.org",
    icon: <SiTailwindcss size={size} fill="cyan" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "Expres JS",
    url: "https://express.org",
    icon: <SiExpress size={size} fill="magenta" />,
  },
  {
    text: "Node JS",
    url: "https://node.org",
    icon: <DiNodejs size={size} fill="green" />,
  },
  {
    text: "Django",
    url: "https://django.org",
    icon: <SiDjango size={size} fill="green" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "MongoDB",
    url: "https://reactjs.org",
    icon: <DiMongodb size={size} fill="green" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "Shadcn/ui",
    url: "https://shadecn.com",
    icon: <FaAmilia size={size} fill="black" />,
  },
  {
    text: "Bootstrap",
    url: "https://bootstrap.org",
    icon: <BsBootstrap size={size} fill="purple" />,
  },
  {
    text: "Material UI",
    url: "https://material.com",
    icon: <svg stroke="currentColor" fill="blue" strokeWidth={0} role="img" viewBox="0 0 24 24" height="1em" width="1em"><title /><path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" /></svg>,
  },
  {
    text: "HTML",
    url: "https://html.org",
    icon: <DiHtml5 size={size} fill="red" />,
  },
  {
    text: "CSS",
    url: "https://css.org",
    icon: <DiCss3 size={size} fill="blue" />,
  },
  {
    text: "Typescript",
    url: "https://Typescript.org",
    icon: <RiJavascriptFill size={size} fill="orange" />,
  },
  {
    text: "Javascript",
    url: "https://Javascript.org",
    icon: <RiJavascriptFill size={size} fill="orange" />,
  },
  {
    text: "Github",
    url: "https://github.com/ibrahimk4111",
    icon: <AiFillGithub size={size} fill="black"/>,
  },
];

import { AiFillGithub } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiHtml5, DiMongodb } from "react-icons/di";
import { FaAmilia, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const sizeForResume = 16;
const sizeForSkills = 20;

export const skills = [
  {
    title: "User Interface",
    description:
      "A user interface (UI) is the critical point of interaction between users and computer systems, emphasizing intuitive usability, effective design, and enhancing the overall user experience.",
    icons: [
      <SiNextdotjs size={sizeForSkills} />,
      <FaReact size={sizeForSkills} fill="skyblue" />,
      <SiRedux size={sizeForSkills} fill="blue" />,
      <SiTailwindcss size={sizeForSkills} fill="cyan" />,
      <SiTypescript size={sizeForSkills} fill="#3178C8" />,
    ],
  },
  {
    title: "Backend",
    description:
      "A backend is the server of a application, responsible for data processing, database management which ensure smooth, secure and efficient functionality behind the scenes.",
    icons: [
      <SiExpress size={sizeForSkills} />,
      <SiNodedotjs size={sizeForSkills} fill="green" />,
      <SiDjango size={sizeForSkills} fill="green" />,
      <DiMongodb size={30} fill="green" />,
    ],
  },
  {
    title: "Others",
    description:
      "Version control is a system for tracking changes to code, managing revisions, enabling collaboration, and ensuring organized, secure, and efficient development workflows.",
    icons: [
      <AiFillGithub size={sizeForSkills} />,
      <DiHtml5 size={sizeForSkills} fill="red" />,
      <DiCss3 size={sizeForSkills} fill="blue" />,
      <RiJavascriptFill size={sizeForSkills} fill="orange" />,
      <BsBootstrap size={sizeForSkills} fill="purple" />,
      <svg
        stroke="currentColor"
        fill="blue"
        strokeWidth={0}
        role="img"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <title />
        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
      </svg>,
      <FaAmilia size={sizeForSkills} />,
    ],
  },
];

export const liItemsforResume = [
  {
    text: "Next.JS",
    url: "https://nextjs.org",
    icon: <SiNextdotjs size={sizeForResume} />,
  },
  {
    text: "React JS",
    url: "https://react.org",
    icon: <FaReact size={sizeForResume} fill="skyblue" />,
  },
  {
    text: "Redux",
    url: "https://redux.org",
    icon: <SiRedux size={sizeForResume} fill="blue" />,
  },
  {
    text: "Tailwind CSS",
    url: "https://tailwind.org",
    icon: <SiTailwindcss size={sizeForResume} fill="cyan" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "Expres JS",
    url: "https://express.org",
    icon: <SiExpress size={sizeForResume} fill="magenta" />,
  },
  {
    text: "Node JS",
    url: "https://node.org",
    icon: <SiNodedotjs size={sizeForResume} fill="green" />,
  },
  {
    text: "Django",
    url: "https://django.org",
    icon: <SiDjango size={sizeForResume} fill="green" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "MongoDB",
    url: "https://reactjs.org",
    icon: <DiMongodb size={sizeForResume} fill="green" />,
  },
  {
    text: ":",
    url: "#",
    icon: <></>,
  },
  {
    text: "Shadcn/ui",
    url: "https://shadecn.com",
    icon: <FaAmilia size={sizeForResume} fill="black" />,
  },
  {
    text: "Bootstrap",
    url: "https://bootstrap.org",
    icon: <BsBootstrap size={sizeForResume} fill="purple" />,
  },
  {
    text: "Material UI",
    url: "https://material.com",
    icon: (
      <svg
        stroke="currentColor"
        fill="blue"
        strokeWidth={0}
        role="img"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <title />
        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
      </svg>
    ),
  },
  {
    text: "HTML",
    url: "https://html.org",
    icon: <DiHtml5 size={sizeForResume} fill="red" />,
  },
  {
    text: "CSS",
    url: "https://css.org",
    icon: <DiCss3 size={sizeForResume} fill="blue" />,
  },
  {
    text: "Typescript",
    url: "https://Typescript.org",
    icon: <RiJavascriptFill size={sizeForResume} fill="orange" />,
  },
  {
    text: "Javascript",
    url: "https://Javascript.org",
    icon: <RiJavascriptFill size={sizeForResume} fill="orange" />,
  },
  {
    text: "Github",
    url: "https://github.com/ibrahimk4111",
    icon: <AiFillGithub size={sizeForResume} fill="black" />,
  },
];

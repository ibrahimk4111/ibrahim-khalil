import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiHtml5, DiMongodb, DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const size = 20

const liItems = [
  {
    text: "MongoDB",
    url: "https://reactjs.org",
    icon: <DiMongodb size={size} fill="green" />,
  },
  {
    text: "Expres JS",
    url: "https://express.org",
    icon: <SiExpress size={size} fill="magenta" />,
  },
  {
    text: "React JS",
    url: "https://react.org",
    icon: <FaReact size={size} fill="skyblue" />,
  },
  {
    text: "Node JS",
    url: "https://node.org",
    icon: <DiNodejs size={size} fill="green" />,
  },
  {
    text: "Tailwind CSS",
    url: "https://tailwind.org",
    icon: <SiTailwindcss size={size} fill="cyan" />,
  },
  {
    text: "Bootstrap",
    url: "https://bootstrap.org",
    icon: <BsBootstrap size={size} fill="purple" />,
  },
  {
    text: "Javascript",
    url: "https://Javascript.org",
    icon: <RiJavascriptFill size={size} fill="orange" />,
  },
  {
    text: "Redux",
    url: "https://Javascript.org",
    icon: <RiJavascriptFill size={size} fill="orange" />,
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
];

const Skills = () => {
  const liClassName =
    "border border-slate-300 rounded-full p-1 flex items-center gap-1";
  return (
    <div>
      <ul className=" flex flex-wrap gap-2 py-3">
        {liItems.map((item) => (
          <li key={item.text} className={liClassName}>
            {item.icon}
            <Link to={item.url} target="_blank" className="text-sm">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

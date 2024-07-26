import { Link } from "react-router-dom";
import { liItemsforResume } from "../../../api/liItemsForSkills";

const Skills = () => {

  return (
    <div>
      <ul className=" flex flex-wrap gap-2 py-3">
        {liItemsforResume.map((item, index) => (
          <li key={index} className="border border-slate-300 rounded-md p-1 flex items-center gap-1">
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

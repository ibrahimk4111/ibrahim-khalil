import { MdCall, MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Projects from "./resumeComponents/Projects";
import Skills from "./resumeComponents/Skills";
import { GoLocation } from "react-icons/go";

const Resume = () => {
  const liClassName =
    "border border-slate-300 rounded-full px-1 flex items-center gap-1";
  return (
    <div className="p-2">
      <Link
        to="/"
        className=" hover:bg-black/80 hover:text-white flex items-center gap-2 p-2 rounded-full w-28 text-sm transition-all duration-300 ease-in-out"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
        <span>Go Back</span>
      </Link>
      <div className=" container flex flex-col gap-1">
        <div className=" mb-5 ">
          <h1 className=" text-center font-semibold text-3xl uppercase">
            Md. Ibrahim Khalil
          </h1>
        </div>

        {/* Start address section */}
        <section>
          <ul className=" container flex sm:flex-row flex-col justify-center lg:gap-3 gap-1">
            <li className={liClassName}>
              <MdEmail size={15} />
              <span className=" text-xs">ibrahimk4111@gmail.com</span>
            </li>
            <li className={liClassName}>
              <MdCall size={15} />
              <span className=" text-xs">01517-833 878</span>
            </li>
            <li className={liClassName}>
              <GoLocation size={15} />
              <span className=" text-xs ">Kakrail, Dhaka, Bangladesh</span>
            </li>
            <li className={liClassName}>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <AiFillGithub size={18} />
              </Link>
            </li>
          </ul>
        </section>
        {/* End address section */}

        {/* Start Summary section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Summary</h1>
          <hr className=" h-1 bg-slate-300" />
          <p className=" p-3 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae
            suscipit ducimus ad iusto soluta obcaecati doloribus amet
            necessitatibus iure nulla optio dolore facere illo dignissimos esse?
            Repudiandae, commodi qui.
          </p>
        </section>
        {/* End Summary section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <Projects />
        </section>
        {/* End Projects section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <Skills />
        </section>
        {/* End Projects section */}

        {/* Start Language section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Languages</h1>
          <hr className=" h-1 bg-slate-300" />
          <div className=" p-3 ">
            <p>. English - Fluent</p>
            <p>. Bengali - Native</p>
          </div>
        </section>
        {/* End Language section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Communications</h1>
          <hr className=" h-1 bg-slate-300" />
        </section>
        {/* End Projects section */}
      </div>
    </div>
  );
};

export default Resume;

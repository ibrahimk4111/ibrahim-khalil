import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Projects from "./resumeComponents/WorkingExperiences";
import Skills from "./resumeComponents/Skills";
import Education from "./resumeComponents/Education";
import Contact from "./resumeComponents/Contact";
import { HiLocationMarker } from "react-icons/hi";

const Resume = () => {
  const liClassName =
    "border border-slate-300 rounded-full px-1 flex items-center gap-1";
  return (
    <div className="p-2 pb-10 dark:bg-bgColorsInDark dark:text-white">
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
            Ibrahim Khalil
          </h1>
        </div>

        {/* Start address section */}
        <section>
          <ul className=" flex sm:flex-row flex-col justify-center lg:gap-3 gap-1">
            <Link to="mailto:ibrahimk4111@gmail.com&subject:Invitation for Web development">
              <li className={liClassName}>
                <MdEmail size={15} />
                <span className=" text-sm">ibrahimk4111@gmail.com</span>
              </li>
            </Link>
            <Link to="">
              <li className={liClassName}>
                <MdCall size={15} />
                <span className=" text-sm">01517-833 878</span>
              </li>
            </Link>
            <Link to="">
              <li className={liClassName}>
                <HiLocationMarker size={15} />
                <span className=" text-sm ">Kakrail, Dhaka, Bangladesh</span>
              </li>
            </Link>
          </ul>
        </section>
        {/* End address section */}

        {/* Start Summary section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Career</h1>
          <hr className=" bg-slate-300" />
          <p className=" py-3 text-justify ">
            I have 5+ year working experience and 3+ years practicing experience
            in web development with some local projects and for the last few
            years I worked as a Computer Expert. I’m passionate about continual
            learning and keeping up with the newest tech trends. I will be glad
            and kind if your company gave me a chance to explore myself for the
            future by calling an interview.
          </p>
        </section>
        {/* End Summary section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Projects</h1>
          <hr className=" bg-slate-300" />
          <Projects />
        </section>
        {/* End Projects section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Skills</h1>
          <hr className=" bg-slate-300" />
          <Skills />
        </section>
        {/* End Projects section */}

        {/* Start Language section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Languages</h1>
          <hr className=" bg-slate-300" />
          <div className=" py-3 ">
            <p>English - Conversational</p>
          </div>
        </section>
        {/* End Language section */}

        {/* Start Projects section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Communications</h1>
          <hr className=" bg-slate-300" />
        </section>
        {/* End Projects section */}

        {/* Start Education section */}
        <section className=" mt-3 ">
          <h1 className=" text-xl font-semibold py-1">Education</h1>
          <hr className=" bg-slate-300" />
          <Education />
        </section>
        {/* End Education section */}
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Resume;

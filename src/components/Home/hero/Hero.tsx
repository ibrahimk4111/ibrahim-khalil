import { BiCloudDownload, BiCoffee } from "react-icons/bi";
import resume from "/Ibrahim_Khalil_Web_dev.pdf";
// import { paths } from "../../../utils/paths";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="py-10 min-h-screen h-auto flex justify-center items-center dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark overflow-hidden">
        <div className=" container grid grid-cols-12 gap-y-10">
          {/* left side */}
          <div className=" sm:col-span-9 col-span-12 flex justify-between items-center">
            <div className=" relative  md:w-3/4 p-3">
              <img
                src="./pyramid.png"
                alt="pyramin.png"
                className=" absolute bottom-0 right-0 h-20 w-20"
                loading="lazy"
              />
              <h1 className=" lg:text-6xl md:text-5xl text-3xl uppercase font-semibold dark:text-white">
                Ibrahim Khalil
              </h1>
              <p className=" dark:text-white ">Web Developer</p>
              <p className=" dark:text-slate-300 text-slate-500 text-sm my-3 text-justify">            
                I have 3+ years practicing experience in web development with some local projects and for 4+ years I worked as a Computer Expert. I’m passionate about continual learning, assisting other developers with communication, consistently ensuring documentation-friendly development and maintenance, aiming to maximize both project outcome and client compensation by keeping up with the newest tech trends.
              </p>
              <div className=" flex gap-2">
                <a href={resume} className="bg-cyan-500 relative inline-flex group p-2 mt-5 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                  <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                  <span className="flex items-center gap-2 z-10 text-white">
                    <BiCloudDownload size={20} />
                    <span>Resume</span>
                  </span>
                </a>
                <NavLink to="#getintouch" className=" bg-cyan-500 relative inline-flex group p-2 mt-5 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                  <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                  <span className="flex items-center gap-2 z-10 text-white">
                    <BiCoffee size={20} />
                    <span>Hire me</span>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className=" sm:col-span-3 col-span-12 flex justify-center items-center dark:text-white sm:order-last order-first ">
            <div className="h-60 sm:h-auto rounded-full border-cyan-400 border overflow-hidden shadow-xl shadow-cyan-400 dark:drop-shadow-glow ">
              <img
                src="./heroimg.png"
                alt="..."
                className=" w-auto h-auto max-h-full "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

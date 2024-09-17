import { Link } from "react-router-dom";
import { projects } from "../../../api/projectData";
import { CgExternal } from "react-icons/cg";

const Projects = () => {
  projects?.map((item) => {
    console.log(item.backend.length);
  });

  return (
    <div className=" relative h-auto min-h-screen flex justify-center items-center bg-slate-100 dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark overflow-hidden ">
      <div className=" container mx-auto py-10 ">
        <div>
          <h1 className=" text-xl mb-10 text-center underline underline-offset-8 ">
            <span className=" font-bold uppercase">Projects</span>
          </h1>
          <div className=" flex flex-col gap-5">
            {projects.map((item, index) => (
              <div
                key={index}
                className=" group grid lg:grid-cols-2 gap-5 bg-white dark:bg-[#0b3631] rounded-md border w-full overflow-hidden"
              >
                <div className=" h-60 lg:h-72 w-full relative overflow-hidden lg:group-odd:order-1">
                  <div
                    style={{ backgroundImage: `url('${item.img}')` }}
                    className=" brightness-90 bg-cover bg-top group-hover:bg-bottom transition-all duration-500 ease-in h-60 lg:h-72 w-full relative overflow-hidden lg:group-odd:order-1"
                  ></div>
                </div>

                <div className=" p-4 ">
                  <div className=" h-full flex flex-col justify-between items-start ">
                    <div className=" flex flex-col items-center justify-between mb-5 ">
                      <div className=" flex justify-between items-start w-full ">
                        <h2 className=" font-semibold text-lg uppercase">
                          {item.title}
                        </h2>
                        <div className=" flex items-center justify-between gap-3 text-slate-400 text-sm ">
                          <Link
                            to="#"
                            className=" flex items-center bg-slate-100 dark:bg-black/20 px-1 rounded-md hover:bg-slate-200 hover:text-slate-500 dark:hover:text-slate-200 cursor-pointer transition-all duration-300 ease-in-out"
                          >
                            <span>Github</span>{" "}
                            <CgExternal className=" w-4 h-6 " />
                          </Link>
                          <Link
                            to="#"
                            className=" flex items-center bg-slate-100 dark:bg-black/20 px-1 rounded-md hover:bg-slate-200 hover:text-slate-500 dark:hover:text-slate-200 cursor-pointer transition-all duration-300 ease-in-out"
                          >
                            <span>Live</span>{" "}
                            <CgExternal className=" w-4 h-6 " />
                          </Link>
                        </div>
                      </div>
                      <p className=" text-sm my-3 text-slate-600 dark:text-slate-300 ">
                        {item.description}
                      </p>
                    </div>
                    <div className=" text-sm ">
                      <div className=" flex items-center gap-2 w-full flex-wrap ">
                        <p>Frontend : </p>
                        {item?.frontend.map((item, index) => (
                          <a
                            key={index}
                            className=" bg-slate-300/30 backdrop-blur-sm px-2 py-1 rounded-md"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      <div
                        className={`${
                          item?.backend.length >= 1 ? "block mt-2" : "hidden"
                        }`}
                      >
                        <div className=" flex items-center gap-2 w-full ">
                          <p>Backend : </p>
                          {item?.backend.map((item, index) => (
                            <a
                              key={index}
                              className=" bg-slate-300/30 backdrop-blur-sm px-2 py-1 rounded-md"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

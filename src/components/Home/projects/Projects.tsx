import { projects } from "../../../api/projectData";

const Projects = () => {
  projects?.map((item) => {
    console.log(item.backend.length);
  });

  return (
    <div className=" relative h-auto min-h-screen flex justify-center items-center bg-slate-100 dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark overflow-hidden ">
      <div className=" container mx-auto py-20 ">
        <div>
          <h1 className=" text-xl mb-5">
            <span className=" font-bold uppercase">Projects</span>
          </h1>
          <div className=" flex flex-col gap-5">
            {projects.map((item, index) => (
              <div
                key={index}
                className=" bg-white dark:bg-[#0b3631] rounded-md flex lg:flex-row flex-col justify-between border w-full overflow-hidden"
              >
                <div className=" w-full p-4">
                  <div className=" w-11/12 h-full flex flex-col justify-between items-start ">
                    <div>
                      <h2 className=" font-semibold text-lg uppercase">
                        {item.title}
                      </h2>
                      <p className=" text-sm my-3 text-slate-600 dark:text-slate-300 ">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <div className=" flex gap-2 w-full ">
                        <p>Frontend : </p>
                        {item?.frontend.map((item, index) => (
                          <a
                            key={index}
                            className=" text-xs bg-slate-300/30 backdrop-blur-sm px-1 rounded-sm"
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
                        <div className=" flex gap-2 w-full ">
                          <p>Backend : </p>
                          {item?.backend.map((item, index) => (
                            <a
                              key={index}
                              className=" bg-slate-300/30 backdrop-blur-sm px-1"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" h-60 relative group w-full ">
                  {/* <div className=" absolute top-0 left-0 bg-slate-300/10 w-full h-full z-50"></div> */}
                  <img
                    src={item.img}
                    alt="item image"
                    className=" opacity-40 hover:opacity-70 lg:absolute lg:top-5 lg:-right-5 -rotate-2 group-hover:rotate-0 transition-all duration-500 ease-in-out"
                  />
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

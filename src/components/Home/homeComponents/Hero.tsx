import { BiCloudDownload, BiCoffee } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className=" py-10 ">
        <div className=" container grid grid-cols-12 gap-y-10">
          <div className=" sm:col-span-9 col-span-12 flex justify-center items-center">
            <div className=" relative ">
              <img
                src="./pyramid.png"
                alt="pyramin.png"
                className=" absolute -left-24 -top-14 h-20 w-20"
              />
              <h1 className=" lg:text-6xl md:text-5xl text-3xl uppercase font-semibold dark:text-white">
                Ibrahim Khalil
              </h1>
              <p className=" dark:text-white ">MERN Stack Developer</p>
              <div className=" flex gap-2">
                <button className=" flex items-center gap-2 mt-5 bg-slate-100 dark:bg-cyan-500 p-2 rounded-md hover:shadow hover:ring-1 ring-offset-1 dark:text-white hover:drop-shadow-glow">
                  <BiCloudDownload size={20}  />
                  <span>Resume</span>
                </button>
                <button className=" flex items-center gap-2 mt-5 bg-slate-100 dark:bg-cyan-500 p-2 rounded-md hover:shadow hover:ring-1 ring-offset-1 dark:text-white hover:drop-shadow-glow">
                  <BiCoffee size={20} />
                  <span>Hire me</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" sm:col-span-3 col-span-12 flex justify-center items-center dark:text-white sm:order-last order-first ">
            <div className="h-60 sm:h-auto rounded-full border-cyan-400 border overflow-hidden shadow-xl shadow-cyan-400 dark:drop-shadow-glow ">
              <img
                src="./heroimg.png"
                alt="..."
                className=" w-auto h-auto max-h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

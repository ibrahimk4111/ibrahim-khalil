import { BiCloudDownload } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const Hero = () => {
  return (
    <>
      <div className=" bg-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark dark:text-white">
        <div className=" container grid grid-cols-12">
          <div className=" sm:col-span-8 col-span-12 flex justify-center items-center">
            <div>
              <h1 className=" lg:text-6xl md:text-5xl text-3xl uppercase font-semibold">
                Ibrahim Khalil
              </h1>
              <p>MERN Stack Developer</p>
              <button className=" flex items-center gap-2 mt-5 bg-orange-400 p-2 rounded-md text-white hover:shadow hover:ring-1 ring-offset-1 ">
                <BiCloudDownload size={20} />
                <span>Resume</span>
              </button>
            </div>
          </div>
          <div className=" sm:order-last order-first sm:col-span-4 col-span-12 flex justify-center items-center overflow-hidden">
            <RxAvatar size={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

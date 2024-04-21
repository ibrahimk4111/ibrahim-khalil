import { BsSend } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className=" dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark py-10">
      <h1 className=" text-2xl text-center mb-5 lg:mb-10">
        Get <span className=" font-bold">In Touch</span>
      </h1>

      <div className=" container grid lg:grid-cols-3 md:grid-cols-12 grid-cols-1 gap-5">
        {/* left side form */}

        <div className=" lg:col-span-2 md:col-span-8 col-span-1">
          <form action="submit">
            <div className=" space-y-2 ">
              <div>
                <input
                  name="name"
                  type=" text "
                  placeholder="Your Name"
                  className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
                />
              </div>
              <div>
                <input
                  name="email"
                  type=" email "
                  placeholder="Email"
                  className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
                />
              </div>
              <div>
                <input
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
                />
              </div>
              <div>
                <textarea
                  rows={7}
                  placeholder="Message"
                  className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
                />
              </div>
            </div>

            <button className=" bg-cyan-500 relative inline-flex group p-2 mt-5 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
              <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
              <span className="flex items-center gap-2 z-10 text-white">
                <BsSend size={20} />
                <span>Send</span>
              </span>
            </button>
          </form>
          <div className=" md:hidden block">
            <h1 className=" my-5">Or</h1>
            <form action="" className=" flex justify-start items-center gap-2 ">
              <input
                name="name"
                type=" text "
                placeholder="leave an advice."
                className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
              />
              <button className=" bg-cyan-500 relative inline-flex group p-2 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                <span className="flex items-center gap-2 z-10 text-white">
                  <BsSend size={20} />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* right side contact */}
        <div className=" md:order-last order-first lg:col-span-1 md:col-span-4">
          <h1 className=" text-3xl font-semibold">
            Let's join us to explore your business in global map.
          </h1>
          <div className=" my-5 flex items-center gap-2">
            <IoCallOutline size={20} />
            <div className=" flex flex-wrap gap-1">
              <p>01517-833 878,</p>
              <p>01766-993 449</p>
            </div>
          </div>
          <div className=" md:block hidden">
            <h1 className=" my-5">Or</h1>
            <form
              action=""
              className="flex justify-start items-center gap-2 "
            >
              <input
                name="name"
                type=" text "
                placeholder="leave an advice."
                className=" bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
              />
              <button className=" bg-cyan-500 relative inline-flex group p-2 rounded-md animate-bounce hover:animate-none hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                <span className="flex items-center gap-2 z-10 text-white">
                  <BsSend size={20} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

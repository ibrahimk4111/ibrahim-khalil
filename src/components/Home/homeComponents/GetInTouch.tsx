import { BsSend } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className=" bg-slate-200 dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark lg:py-10 py-5">
      <h1 className=" text-2xl text-center mb-5">
        Get <span className=" font-bold">In Touch</span>
      </h1>

      <div className=" container ">
        {/* left side form */}
        <div>
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
        </div>
        {/* right side contact */}
      </div>
    </div>
  );
};

export default GetInTouch;

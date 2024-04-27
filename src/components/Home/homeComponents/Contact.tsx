import { AiFillFacebook, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  const iconClassName = "hover:scale-125 transition-all duration-300 ease-in";
  return (
    <div>
      <div className="fixed bottom-3 w-full hover:animate-none">
        <div className="flex justify-center items-center">
          <div className=" bg-slate-100 flex justify-between items-center py-1 px-5 shadow-lg dark:bg-[#0d463f] rounded-full w-48">
            <button>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <AiFillGithub size={20} className={iconClassName} />
              </Link>
            </button>
            <button>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <IoLogoWhatsapp size={20} fill="green" className={iconClassName} />
              </Link>
            </button>
            <button>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <FaXTwitter size={20} className={iconClassName} />
              </Link>
            </button>
            <button>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <AiFillFacebook size={20} fill="blue" className={iconClassName} />
              </Link>
            </button>
            <button>
              <Link to="https://github.com/ibrahimk4111" target="_blank">
                <AiFillYoutube size={20} fill="red" className={iconClassName} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

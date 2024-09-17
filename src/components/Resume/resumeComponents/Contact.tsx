/* eslint-disable @typescript-eslint/no-unused-vars */
import { AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="fixed bottom-3 w-full animate-pulse hover:animate-none">
        <div className="flex justify-center items-center">
          <div className=" bg-slate-100 flex justify-center items-center gap-2 py-1 px-5 shadow-lg dark:bg-[#0d463f] rounded-md w-48">
            <Link to="https://github.com/ibrahimk4111" target="_blank">
              <AiFillGithub size={20} className="hover:scale-125 transition-all duration-300 ease-in" />
            </Link>

            <Link to="https://github.com/ibrahimk4111" target="_blank">
              <IoLogoWhatsapp
                size={20}
                className="hover:scale-125 transition-all duration-300 ease-in text-green-400"
              />
            </Link>

            {/* <Link to="https://github.com/ibrahimk4111" target="_blank">
              <FaXTwitter size={20} className={iconClassName} />
            </Link> */}

            <Link to="https://github.com/ibrahimk4111" target="_blank">
              <MdFacebook
                size={20}
                className="hover:scale-125 transition-all duration-300 ease-in text-blue-400"
              />
            </Link>

            {/* <Link to="https://github.com/ibrahimk4111" target="_blank">
              <AiFillYoutube size={20} fill="red" className={iconClassName} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

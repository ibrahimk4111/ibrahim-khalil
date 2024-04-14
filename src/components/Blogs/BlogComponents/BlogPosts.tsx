import { BiSolidCommentDetail } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { posts } from "../../../json/FakeData";

const BlogPosts = () => {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className=" border border-slate-400 p-1 rounded-md ">
          <div key={index} className=" grid grid-cols-12 gap-5 ">
            <div className="lg:col-span-4 col-span-12 overflow-hidden rounded-md flex justify-center items-center ">
              <img src="./assunnah-complex.jpg" alt=".." />
            </div>
            <div className="lg:col-span-8 col-span-12 flex flex-col justify-between gap-2 p-2">
              <header>
                <h1 className=" cursor-pointer text-xl hover:text-orange-400 hover:underline underline-offset-4 ">
                  {post.blogHeader}
                </h1>
              </header>
              <main>
                <div className=" text-sm text-justify ">
                  {post.blogBody.trim().length > 200
                    ? post.blogBody.slice(0, 150) + "...."
                    : post.blogBody}
                </div>
              </main>
              <footer className=" flex justify-between items-center text-sm ">
                <div className=" flex items-center gap-3">
                  <button>
                    <FaThumbsUp fill="green" size={20} />
                  </button>
                  <button>
                    <BiSolidCommentDetail fill="green" size={20} />
                  </button>
                </div>
                <div className=" text-slate-400 ">3 min Read</div>
                <div className=" text-slate-400 ">{post.date}</div>
              </footer>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPosts;

import { BiSolidCommentDetail } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";

interface propsType {
  post: {
    img: string;
    blogHeader: string;
    blogBody: string;
    date: string;
    likes: number;
    comment: string[];
  };
}

const BlogPosts = ({ post }: propsType) => {
  return (
    <>
      <div className=" bg-white dark:bg-[#082f2b] rounded-md">
        <div className=" h-52 lg:h-48 overflow-hidden rounded-t-md flex justify-center items-center ">
          <img
            src={post.img}
            alt=".."
            loading="lazy"
            className=" h-auto w-auto "
          />
        </div>
        <div className="flex flex-col justify-between gap-3 p-3 ">
          <header>
            <h1 className=" cursor-pointer text-base font-medium underline underline-offset-4 hover:text-cyan-500 dark:text-white ">
              {post.blogHeader}
            </h1>
          </header>
          <main>
            <div className=" text-sm text-justify text-slate-700 dark:text-slate-300">
              {post.blogBody.trim().length > 200
                ? post.blogBody.slice(0, 100) + "...."
                : post.blogBody}
            </div>
          </main>
          <footer className=" flex justify-between items-center ">
            <div className=" ">
              <button className=" flex items-center gap-1">
                <BiSolidCommentDetail fill="green" size={20} />
                <span className=" text-sm text-slate-400 hover:text-slate-500 dark:hover:text-slate-200 ">{post.comment.length} comments</span>
              </button>
            </div>
            <div className=" flex gap-1 items-center ">
              <CiCalendarDate size={18} fill="green"/>
              <span className=" text-sm text-slate-400">{post.date}</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;

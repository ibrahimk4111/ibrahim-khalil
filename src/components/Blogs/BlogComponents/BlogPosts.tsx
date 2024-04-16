import { BiSolidCommentDetail } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

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
        <div className=" h-52 lg:h-36 overflow-hidden rounded-t-md flex justify-center items-center ">
          <img
            src={post.img}
            alt=".."
            loading="lazy"
            className=" h-auto w-auto "
          />
        </div>
        <div className="flex flex-col justify-between gap-1 p-3 ">
          <header>
            <h1 className=" cursor-pointer text-base font-semibold underline underline-offset-4 hover:text-orange-500 ">
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
            <div className=" flex items-center gap-2 ">
              <button className=" flex items-center gap-1 text-sm ">
                <FaThumbsUp fill="green" size={20} />
                <span className=" text-sm ">{post.likes}</span>
              </button>
              <button className=" flex items-center gap-1">
                <BiSolidCommentDetail fill="green" size={20} />
                <span className=" text-sm ">{post.comment.length}</span>
              </button>
            </div>
            <div className=" text-slate-400 text-sm ">3M Read</div>
            <div className=" text-slate-400 text-sm ">{post.date}</div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;

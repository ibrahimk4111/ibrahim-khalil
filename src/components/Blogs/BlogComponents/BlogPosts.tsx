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
      <div className=" dark:bg-[#082f2b] rounded-md">
        <div className=" grid grid-cols-12 gap-2 p-1">
          <div className="h-full lg:col-span-3 col-span-12 overflow-hidden rounded-md flex justify-center items-center ">
            <img
              src={post.img}
              alt=".."
              loading="lazy"
              className=" h-auto w-auto "
            />
          </div>
          <div className="lg:col-span-9 col-span-12 flex flex-col justify-between gap-1 lg:pr-5 ">
            <header>
              <h1 className=" cursor-pointer text-xl underline underline-offset-4 ">
                {post.blogHeader}
              </h1>
            </header>
            <main>
              <div className=" text-sm text-justify text-slate-300">
                {post.blogBody.trim().length > 200
                  ? post.blogBody.slice(0, 100) + "...."
                  : post.blogBody}
              </div>
            </main>
            <footer className=" flex justify-between items-center ">
              <div className=" flex items-center gap-2 ">
                <button className=" flex items-center gap-1 text-sm ">
                  <FaThumbsUp fill="green" size={15} />
                  <span>{post.likes}</span>
                </button>
                <button className=" flex items-center gap-1">
                  <BiSolidCommentDetail fill="green" size={15} />
                  <span>{post.comment.length}</span>
                </button>
              </div>
              <div className=" text-slate-400 text-sm ">3M Read</div>
              <div className=" text-slate-400 text-sm ">{post.date}</div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;

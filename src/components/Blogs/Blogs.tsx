import { posts } from "../../api/FakeBlogData";
import BlogPosts from "./BlogComponents/BlogPosts";

const Blogs = () => {
  return (
    <div className=" md:ml-12 p-2 bg-slate-200 dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark ">
      {/* left side or news feed */}
      <div className=" grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
        {posts.map((post, index) => (
          <BlogPosts key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

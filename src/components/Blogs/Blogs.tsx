import { posts } from "../../json/FakeData";
import BlogPosts from "./BlogComponents/BlogPosts";

const Blogs = () => {
  return (
    <div className=" w-full ">
      <div className=" grid grid-cols-12 gap-x-3 ">
        {/* left side or news feed */}
        <div className=" md:col-span-8 col-span-12 p-2 flex flex-col gap-2">
          <div className=" grid lg:grid-cols-1 grid-cols-2 gap-2">
            {posts.map((post, index) => (
              <BlogPosts key={index} post={post} />
            ))}
          </div>
        </div>

        {/* right side or table of content */}
        <div className=" md:col-span-4 col-span-12 p-2 relative order-first md:order-last">
          {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis eius cupiditate dignissimos deleniti similique nisi dolor! Ipsa minima assumenda totam maiores dolor beatae, ullam, vel est sint eaque animi.</div> */}
          <div className=" border border-slate-400 p-2 rounded-md md:sticky md:top-12 ">
            <h1 className=" text-xl ">Table of content</h1>
            <hr className=" border-black mb-5  " />
            <details>
              <summary className=" ">heller</summary>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                doloribus cumque sequi nam voluptatibus, vitae tempore quas
                obcaecati ipsam accusamus veniam culpa dignissimos, maiores ad
                beatae id delectus ipsum similique!
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

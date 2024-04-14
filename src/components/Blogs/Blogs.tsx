import BlogPosts from "./BlogComponents/BlogPosts";

const Blogs = () => {
  return (
    <div className=" w-full ">
      <div className=" container grid md:grid-cols-12 gap-3 ">
        {/* left side or news feed */}
        <div className=" md:col-span-8 p-2 flex flex-col gap-2">
          <BlogPosts />
        </div>

        {/* right side or table of content */}
        <div className=" md:col-span-4 p-2 ">
          <div className=" border border-slate-400 lg:sticky lg:top-10 p-2 rounded-md">
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

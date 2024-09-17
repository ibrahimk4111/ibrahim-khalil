import { skills } from "../../../api/liItemsForSkills";

const Skills = () => {
  return (
    <div className=" relative h-auto min-h-screen flex justify-center items-center dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark overflow-hidden ">
      <div
        className={` absolute -right-1/4 top-0 rotate-45 h-20 w-full transition-all duration-500 ease-in bg-blue-500/30 -z-10 `}
      ></div>
      {/* <div className={` absolute -left-[500px] bottom-0 rotate-45 h-20 w-full transition-all duration-500 ease-in bg-sky-500/30 -z-10 `}></div> */}
      {/* Your div content here */}
      <div className=" container mx-auto py-10 ">
        <div>
          <h1 className=" text-xl mb-10 uppercase text-center underline underline-offset-8 ">
            My <span className=" font-bold">Skillsets</span>
          </h1>
          <div>
            <SkillsTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

export function SkillsTab() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3">
      {skills &&
        skills.map((item, index) => (
          <div key={index} className=" border p-5 rounded-md w-full">
            <h2 className=" font-semibold text-lg">{item.title}</h2>
            <p className=" text-sm my-3 text-slate-600 dark:text-slate-300 ">
              {item.description}
            </p>
            <div className=" flex flex-wrap gap-2 justify-start items-center mt-5">
              {item?.icons.map((iconItem, index) => (
                <div key={index} className=" flex items-center justify-center gap-1" >
                  <span>{iconItem.icon}</span>
                  <p className=" text-sm bg-slate-300/30 px-1 rounded-md">{iconItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

// const [isInView, setIsInView] = useState<boolean>(false);
// const boxRef = useRef<HTMLDivElement>(null);
// const handleScroll = () => {
//   if (boxRef.current) {
//     const windowHeight = window.innerHeight;
//     const scrollY = window.scrollY || window.pageYOffset;
//     const scrollPosition = scrollY + windowHeight;
//     const elementPosition =
//       boxRef.current.getBoundingClientRect().top +
//       scrollY +
//       (boxRef.current.clientHeight || 0); // Added null check for clientHeight
//     setIsInView(scrollPosition >= elementPosition);
//     console.log(`${windowHeight} = window.innerHeight;
//       ${scrollY} = window.scrollY || window.pageYOffset;
//       ${scrollPosition} = scrollY + windowHeight;
//       ${elementPosition} = elementPosition `);
//   }
// };
// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

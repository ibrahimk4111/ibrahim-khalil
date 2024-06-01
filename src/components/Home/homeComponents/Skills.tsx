import { skills } from "../../../json/liItemsForSkills";

interface IProps {
  title: string;
  description: string;
  icons: React.ReactNode[];
}

export function SkillsTab({ title, description, icons }: IProps) {
  return (
    <div className=" border p-5 rounded-md w-full">
      <h2 className=" font-semibold">{title}</h2>
      <p className=" text-sm my-3 text-slate-600 dark:text-slate-300 ">{description}</p>
      <div className=" flex gap-3 justify-start items-center mt-5">{icons.map((icon, index) => <div key={index}>{icon}</div>)}</div>
    </div>
  );
}

const Skills = () => {
  
  return (
    <div
      className=" relative snap-start h-auto min-h-screen flex justify-center items-center dark:text-white dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark overflow-hidden "
    >
      <div className={` absolute -right-1/4 top-0 rotate-45 h-20 w-full transition-all duration-500 ease-in bg-blue-500/30 -z-10 `}></div>
      {/* <div className={` absolute -left-[500px] bottom-0 rotate-45 h-20 w-full transition-all duration-500 ease-in bg-sky-500/30 -z-10 `}></div> */}
      {/* Your div content here */}
      <div className=" container mx-auto py-20 ">

          <div >
            <h1 className=" text-2xl mb-10">
              My <span className=" font-bold">Skillsets</span>
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3">
              {skills &&
                skills.map((item, index) => (
                  <SkillsTab
                    key={index}
                    title={item.title}
                    description={item.description}
                    icons={item.icons}
                  />
                ))}
            </div>
          </div>

      </div>
    </div>
  );
};

export default Skills;



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
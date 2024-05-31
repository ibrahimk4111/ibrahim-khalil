
interface propsType {
  text: string;
  expanded: boolean;
  icon: React.ReactNode;
}

const AsidebarItem = ({text, expanded, icon }: propsType) => {
  const animation ="h-6 overflow-hidden transition-all duration-500 ease-in-out dark:text-white ";
  const animatedClassName = `${expanded ? "w-full ml-2" : "w-0 ml-0"} ${animation}`;

  return (
    <div>
      <section className=" flex items-center p-2 hover:underline underline-offset-8 ">
            <div
            className=" cursor-pointer bg-slate-100 p-1 rounded-md flex justify-center items-center dark:text-cyan-900 "
            >
            {icon}
            </div>
            <div className={animatedClassName}>{text}</div>
      </section>
    </div>
  );
};

export default AsidebarItem;

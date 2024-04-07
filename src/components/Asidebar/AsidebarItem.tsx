
interface propsType {
  text: string;
  expanded: boolean;
  icon: React.ReactNode;
}

const AsidebarItem = ({text, expanded, icon }: propsType) => {
  const animation ="h-6 overflow-hidden transition-all duration-500 ease-in-out";
  const animatedClassName = `${expanded ? "w-full ml-5" : "w-0 ml-0"} ${animation}`;

  return (
    <div>
      <section className=" flex items-center p-2">
            <div
            className=" cursor-pointer bg-slate-100 hover:bg-slate-200 p-1 rounded-md flex justify-center items-center"
            >
            {icon}
            </div>
            <div className={animatedClassName}>{text}</div>
      </section>
    </div>
  );
};

export default AsidebarItem;

import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkLightToggle = () => {
  const size = 18;
  const [toggleDark, setToggleDark] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<string>("light");
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHanlder = () => {
    setToggleDark((curr) => !curr);
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <button
        onClick={themeHanlder}
        className=" bg-slate-100 hover:bg-slate-200 p-1 rounded-md"
      >
        {toggleDark ? <FiSun size={size} /> : <FiMoon size={size} />}
      </button>
    </div>
  );
};

export default DarkLightToggle;

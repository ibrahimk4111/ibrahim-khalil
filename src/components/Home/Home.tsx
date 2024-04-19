import GetInTouch from "./homeComponents/GetInTouch";
import Hero from "./homeComponents/Hero";

const Home = () => {
  return (
    <div>
      <div className="dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark">
        <Hero />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Home;

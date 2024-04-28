import GetInTouch from "./homeComponents/GetInTouch";
import Hero from "./homeComponents/Hero";
import Skills from "./homeComponents/Skills";

const Home = () => {
  return (
    <div className=" md:ml-12 ">
      <Hero />
      <Skills />
      <GetInTouch />
    </div>
  );
};

export default Home;

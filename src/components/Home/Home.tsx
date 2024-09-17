import GetInTouch from "./getInTouch/GetInTouch";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <div className=" md:ml-12 ">
      <Hero />
      <Projects />
      <Skills />
      <GetInTouch />
    </div>
  );
};

export default Home;

import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollPosition = scrollY + windowHeight;
        const elementPosition =
          boxRef.current.getBoundingClientRect().top +
          scrollY +
          (boxRef.current.clientHeight || 0); // Added null check for clientHeight
        setIsInView(scrollPosition >= elementPosition);
        console.log(`${windowHeight} = window.innerHeight;
        ${scrollY} = window.scrollY || window.pageYOffset;
        ${scrollPosition} = scrollY + windowHeight;
        ${elementPosition} = elementPosition `);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" snap-start h-[100vh] pt-16" ref={boxRef}>
      {/* Your div content here */}
      <div>{isInView ? "Element is in view" : "Element is not in view"}</div>
    </div>
  );
};

export default Skills;

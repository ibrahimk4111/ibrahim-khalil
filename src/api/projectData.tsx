import postImage from "/assunnah-complex.jpg";

type projectsType = {
  title: string;
  description: string;
  img: string;
  frontend: string[];
  backend: string[];
}[];

export const projects: projectsType = [
  {
    title: "Blog Web App",
    description:
      "A user interface (UI) is the  design, and enhancing the overall user experience. A user interface (UI) is the critical point of interaction between users and computer systems, emphasizing intuitive usability, effective design, and enhancing the overall user experience.",
    img: postImage,
    frontend: ["React Vite", "Typescript", "Tailwindcss", "Redux" ],
    backend: []
  },
  {
    title: "Weather",
    description:
      "A backend is the server of a application, responsible for data processing, database management which ensure smooth, secure and efficient functionality behind the scenes.",
    img: postImage,
    frontend: ["React Vite", "Typescript", "Tailwindcss", "Redux" ],
    backend: []
  },
  {
    title: "NextJs Web App",
    description:
      "Version control is a system for tracking changes to code, managing revisions, enabling collaboration, and ensuring organized, secure, and efficient development workflows.",
    img: postImage,
    frontend: ["NextJs", "Typescript", "Framer Motion"],
    backend: []
  },
  {
    title: "Fullstack Web App",
    description:
      "Version control is a system for tracking changes to code, managing revisions, enabling collaboration, and ensuring organized, secure, and efficient development workflows.",
    img: postImage,
    frontend: ["React Vite", "Javascript", "Redux", "Tailwindcss"],
    backend: ["Strapi"]
  },
];

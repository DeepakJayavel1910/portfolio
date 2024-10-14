// src/components/Projects.jsx
import { Typography } from "@material-tailwind/react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";


const projectsData = [
  {
    title: "Todo List Generator",
    description:
      "A user-friendly Todo List application designed to help users manage their tasks efficiently. This project allows users to add, delete, and the completion status of tasks.",
    image: `${p1}`,
    badges: ["React", "MongoDB", "Express", "Tailwind Css"],
  },
  {
    title: "Omnifood - Static Site",
    description:
      "This project is a Restaurant App created to showcase my front-end design skills. The app provides a visually appealing and user-friendly interface while focusing on modern, responsive web design techniques.",
    image: `${p2}`,
    badges: ["HTML", "Css", "Javascript"],
  },
  {
    title: "Authentication Form",
    description: "Users can register and log in using secure authentication methods, with proper session management.Local Strategy to authenticate users by verifying credentials stored in a MongoDB database.",
    image: `${p3}`,
    badges: ["Express js", "ejs", "mongodb", "passportjs"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-10 mt-12 md:mt-20 lg:mt-30">
      <Typography
        variant="h2"
        className="text-[#4EA571] text-center text-2xl font-bold mb-10 lg:text-4xl"
      >
        Projects
      </Typography>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:p-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold text-[#000000] mt-2 lg:text-2xl lg:mt-5">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 lg:text-lg lg:mt-2">{project.description}</p>
            <div className="flex space-x-1 lg:space-x-2">
              {project.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-[#4EA571] text-white text-sm px-2 py-1 rounded lg:text-lg"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

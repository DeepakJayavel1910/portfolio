// src/components/Skills.jsx
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss, SiBootstrap, SiMongoose, SiGit, SiGithub } from 'react-icons/si';
import { Typography } from "@material-tailwind/react";


const skillsData = [
  { name: "HTML", icon: <SiHtml5 className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "CSS", icon: <SiCss3 className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Express", icon: <SiExpress className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Mongoose", icon: <SiMongoose className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6 lg:w-10 lg:h-10" /> },
  { name: "GitHub", icon: <SiGithub className="w-6 h-6 lg:w-10 lg:h-10" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-10 mt-12 md:mt-20 lg:mt-32">
      <Typography variant="h2" className="text-[#4EA571] text-center text-2xl font-bold mb-10 lg:text-4xl">
            Skills
          </Typography>
      <div className="grid grid-cols-3 lg:mt-24 lg:grid-cols-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-2 p-3 lg:m-4 lg:p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-10 w-10 lg:h-16 lg:w-16 mb-2 bg-[#4EA571] rounded-full">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-center text-[12px] lg:text-lg text-[#000000]">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

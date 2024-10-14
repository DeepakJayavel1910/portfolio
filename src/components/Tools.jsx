// src/components/ToolsAndTechnologies.jsx
import { SiVisualstudiocode, SiPostman, SiNodemon, SiMongodb, SiUbuntu } from 'react-icons/si';
import { Typography } from "@material-tailwind/react";

// src/components/ToolsAndTechnologies.jsx
const toolsAndTechnologiesData = [
    { name: "Visual Studio Code", icon: <SiVisualstudiocode className="w-6 h-6 lg:w-10 lg:h-10" /> },
    { name: "Postman", icon: <SiPostman className="w-6 h-6 lg:w-10 lg:h-10" /> },
    { name: "Nodemon", icon: <SiNodemon className="w-6 h-6 lg:w-10 lg:h-10" /> },
    { name: "Ubuntu", icon: <SiUbuntu className="w-6 h-6 lg:w-10 lg:h-10" /> },
    { name: "MongoDB Compass", icon: <SiMongodb className="w-6 h-6 lg:w-10 lg:h-10" /> },
  ];
  
  const ToolsAndTechnologies = () => {
    return (
      <section id="tools-and-technologies" className="pt-10 mt-12 md:mt-20">
        <Typography variant="h2" className="text-[#4EA571] text-center text-2xl lg:text-4xl font-bold mb-10 ">
            Tools and Technologies
          </Typography>
        <div className="grid grid-cols-3 lg:grid-cols-5 lg:mt-20">
          {toolsAndTechnologiesData.map((tool, index) => (
            <div key={index} className="flex flex-col items-center m-2 p-3 lg:m-4 lg:p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-10 w-10 lg:h-16 lg:w-16 mb-2 bg-[#4EA571] rounded-full">
                {tool.icon}
              </div>
              <h3 className="font-semibold text-center text-[12px] lg:text-lg text-[#000000]">{tool.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ToolsAndTechnologies;
  
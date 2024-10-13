import { FaUniversity } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";


const Education = () => {
  const educationData = [
    {
      institution: "Government College of Technology",
      degree: "Bachelor of Information Technology",
      duration: "2010 - 2024",
    },
    {
      institution: "SRV Boys High School",
      degree: "Higher Secondary Education",
      duration: "2018-2020",
    }
  ];

  return (
    <section id="education" className="py-20 ">
        <Typography variant="h2" className="text-[#4EA571] text-center font-bold mb-10">
            Education
          </Typography>
      <div className="max-w-screen-xl mx-auto px-6 grid gap-12 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative  p-1 rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-[#4EA571] w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-[#000000]">{edu.institution}</h3>
                  <p className="text-lg text-[#337CA0]">{edu.degree}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-md text-[#4EA571] font-medium">{edu.duration}</span>
                <p className="text-md text-[#000000] mt-2">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

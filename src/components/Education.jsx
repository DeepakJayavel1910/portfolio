import { FaUniversity } from 'react-icons/fa';
import { Typography } from "@material-tailwind/react";


const Education = () => {
  const educationData = [
    {
      institution: "Government College of Technology",
      degree: "Bachelor of Information Technology",
      duration: "2020 - 2024",
    },
    {
      institution: "SRV Boys High School",
      degree: "Higher Secondary Education",
      duration: "2018 - 2020",
    }
  ];

  return (
    <section id="education" className="pt-10 md:mt-20 lg:mt-30">
        <Typography variant="h2" className="text-[#4EA571] text-center font-bold mb-8 text-2xl lg:text-4xl">
            Education
          </Typography>
      <div className="max-w-full mx-auto px-3 grid gap-5 md:grid-cols-2 lg:px-6 lg:gap-6 lg:mt-24">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative p-1 rounded-lg"
          >
            <div className=" bg-white p-6  lg:mx-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 place-items-center mb-4">
                <FaUniversity className="text-[#4EA571] w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-md text-center mt-4 font-semibold text-[#000000] lg:text-xl">{edu.institution}</h3>
                  <p className="text-sm text-center text-[#337CA0] lg:text-lg">{edu.degree}</p>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-[#4EA571] font-medium">{edu.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

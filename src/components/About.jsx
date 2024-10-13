// src/components/About.jsx
import { Typography } from "@material-tailwind/react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import deepak from "../assets/deepak.jpg";

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2 p-8">
          <Typography variant="h1" className="text-[#4EA571] font-bold mb-4">
            Hey, I&apos;m Deepak Jayavel
          </Typography>
          <Typography variant="h2" className="text-[#337CA0] font-bold mb-4">
            MERN STACK DEVELOPER
          </Typography>
          <Typography className="text-gray-700">
            I&apos;m passionate of building web applications. I love creating
            efficient and scalable software solutions.
          </Typography>
          <div className="flex justify-center items-center mt-10">
            <div className="flex space-x-6">
              <a
                href="tel:6381717263"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaPhoneAlt className="size-6" />
              </a>
              <a
                href="mailto:jayaveldeepak19@gmail.com"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaEnvelope className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-jayavel-7144591bb/"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaLinkedin className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://drive.google.com/file/d/1bHWRaRAdpA_AnASFF-iBSHvF06p1Punq/view?usp=drive_link"
              className="bg-[#4EA571] text-white py-2 px-4 rounded-lg hover:bg-[#337CA0]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 p-4">
          <div className="w-3/4">
            <img
              src={deepak}
              alt="About Me"
              className="w-[25rem] h-[25rem] rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// src/components/About.jsx
import { Typography } from "@material-tailwind/react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import deepak from "../assets/deepak.jpg";

const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="grid content-center place-items-center md:grid-cols-2 md:mt-10 lg:mt-16">
        <div className="flex justify-center items-center w-full p-2">
          <div className="flex justify-center items-center w-3/4">
            <img
              src={deepak}
              alt="About Me"
              className="rounded-2xl w-3/4"
            />
          </div>
        </div>
        <div className="w-full p-8 lg:p-10">
          <Typography
            variant="h1"
            className="text-[#4EA571] font-bold mb-4 text-2xl lg:text-4xl"
          >
            Hey, I&apos;m Deepak Jayavel
          </Typography>
          <Typography
            variant="h2"
            className="text-[#337CA0] font-bold mb-4 text-xl lg:text-2xl"
          >
            MERN STACK DEVELOPER
          </Typography>
          <Typography className="text-gray-700 text-sm lg:text-lg">
            I&apos;m passionate of building web applications. I love creating
            efficient and scalable software solutions.
          </Typography>
          <div className="flex justify-center items-center my-6 lg:my-10">
            <div className="flex space-x-6">
              <a
                href="tel:6381717263"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaPhoneAlt className="size-5 lg:size-7" />
              </a>
              <a
                href="mailto:jayaveldeepak19@gmail.com"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaEnvelope className="size-5 lg:size-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-jayavel-7144591bb/"
                className="text-[#337CA0] hover:text-[#4EA571]"
              >
                <FaLinkedin className="size-5 lg:size-7" />
              </a>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <a
              href="https://drive.google.com/file/d/1glQR8ztEPmP5f-cP9sRJTVdHfCRo3vYW/view?usp=sharing"
              className="bg-[#4EA571] text-white text-sm py-1 px-2 lg:text-lg rounded-lg hover:bg-[#337CA0]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

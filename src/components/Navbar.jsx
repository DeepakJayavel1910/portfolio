// src/components/Navbar.jsx
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-full mx-auto flex justify-center items-center p-4">
        <ul className="flex space-x-3 md:space-x-4 lg:space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold text-sm md:text-md lg:text-lg"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold text-sm md:text-md lg:text-lg"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="tools-and-technologies"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold text-sm md:text-md lg:text-lg"
            >
              TOOLS
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold text-sm md:text-md lg:text-lg"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold text-sm md:text-md lg:text-lg"
            >
              CONTACTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.jsx
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center p-4">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="tools-and-technologies"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold"
            >
              TOOLS
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-blue-700 hover:text-blue-500 cursor-pointer font-bold"
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

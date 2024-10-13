import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-11/12 ">
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Tools></Tools>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;

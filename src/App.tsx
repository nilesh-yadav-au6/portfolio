import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="w-full bg-primary fixed top-0 z-50">
        <div className="border-b border-orange flex justify-between w-full px-6 md:px-16">
          <div className="border-x border-orange flex justify-between w-full p-5">
            <h1 className="text-purple font-Bungee text-2xl">Nilesh Yadav</h1>
            <div className="flex gap-10">
              <div className="text-white text-lg hover:text-orange cursor-pointer">
                Home
              </div>
              <div className="text-white text-lg hover:text-orange cursor-pointer">
                About
              </div>
              <div className="text-white text-lg hover:text-orange cursor-pointer">
                Contact
              </div>
              <div className="text-white text-lg hover:text-orange cursor-pointer">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

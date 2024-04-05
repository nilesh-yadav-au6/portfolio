import portfolio from "../assets/portfplio.png";
import chat from "../assets/chat.png";
import thread from "../assets/thread.png";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="border-b bg-cream border-orange justify-between w-full px-6 md:px-16"
      >
        <h1 className="w-full text-center border-x border-orange font-extrabold text-3xl py-10">
          Projects
        </h1>
        <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full px-16 py-10">
          <div className="flex justify-center w-full relative flex-wrap gap-10">
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={portfolio} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className=" font-semibold">Portfolio</h3>
                <a
                  href="https://nileshyadavportfolio.vercel.app/"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/nilesh-yadav-au6/portfolio"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={thread} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className=" font-semibold">Threads</h3>
                <a
                  href="https://thread-clone-butn.onrender.com"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/nilesh-yadav-au6/thread-clone"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={chat} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className=" font-semibold">Chat App</h3>
                <a
                  href="https://chat-app-mern-hsi6.onrender.com"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/nilesh-yadav-au6/chat-app-mern"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

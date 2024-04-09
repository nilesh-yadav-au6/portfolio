import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaAlignJustify } from "react-icons/fa6";

export default function Navbar() {
  const [openSidebar, setOpenSideBar] = useState(false);
  return (
    <>
      <div className="w-full bg-primary fixed top-0 z-10">
        <div className="border-b border-orange flex justify-between w-full px-6 md:px-16">
          <div className="border-x border-orange flex justify-between w-full p-5">
            <h1 className="text-purple font-Bungee text-2xl">Nilesh Yadav</h1>
            <div className="hidden md:flex md:gap-10 ">
              <a
                href="/"
                className="text-white text-lg hover:text-orange cursor-pointer"
              >
                Home
              </a>
              <a
                href="/#skills"
                className="text-white text-lg hover:text-orange cursor-pointer"
              >
                Skills
              </a>
              <a
                href="/#contacts"
                className="text-white text-lg hover:text-orange cursor-pointer"
              >
                Contact
              </a>
              <a
                href="/#projects"
                className="text-white text-lg hover:text-orange cursor-pointer"
              >
                Projects
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setOpenSideBar(!openSidebar)}
            >
              <FaAlignJustify color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
      {openSidebar ? (
        <Sidebar
          openSidebar={openSidebar}
          closeSidebar={() => setOpenSideBar(!openSidebar)}
        />
      ) : null}
    </>
  );
}

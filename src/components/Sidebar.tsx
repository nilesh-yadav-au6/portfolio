import { RxCross2 } from "react-icons/rx";

interface Props {
  openSidebar: boolean;
  closeSidebar: () => void;
}
export default function Sidebar({ openSidebar, closeSidebar }: Props) {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-40 translate-x-0 transition-all delay-75 duration-75 ${
        openSidebar ? "translate-x-0 " : "-translate-x-100"
      }`}
    >
      <div className="flex absolute top-0 bottom-0 right-0 flex-col gap-10 bg-cream w-80 shadow-xl shadow-primary">
        <div onClick={closeSidebar} className="text-black ml-10 mt-10">
          <RxCross2 />
        </div>
        <a
          onClick={closeSidebar}
          href="#"
          className="text-lg ml-10 hover:text-orange cursor-pointer text-black"
        >
          Home
        </a>
        <a
          onClick={closeSidebar}
          href="#skills"
          className="text-lg ml-10 hover:text-orange cursor-pointer text-black"
        >
          Skills
        </a>
        <a
          onClick={closeSidebar}
          href="#contacts"
          className="text-lg ml-10 hover:text-orange cursor-pointer text-black"
        >
          Contact
        </a>
        <a
          onClick={closeSidebar}
          href="#projects"
          className="text-lg ml-10 hover:text-orange cursor-pointer text-black"
        >
          Projects
        </a>
      </div>
    </div>
  );
}

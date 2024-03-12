import Card from "./Card";
import CssIcon from "../assets/css-3.svg";
import HTMLIcon from "../assets/html-1.svg";
import JavascriptIcon from "../assets/logo-javascript.svg";
import ReactIcon from "../assets/react-2.svg";
import NodeIcon from "../assets/nodejs-1.svg";
import PostgresIcon from "../assets/postgresql.svg";
import MongodbIcon from "../assets/mongodb-icon-2.svg";
import GIthubIcon from "../assets/github-icon-1.svg";

function Skills() {
  return (
    <>
      <div className="border-b bg-cream border-orange justify-between w-full h-full px-6 md:px-16">
        <h1 className="w-full text-center border-x border-orange font-extrabold text-3xl py-10">
          My Skills
        </h1>
        <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-10">
          <div className="flex justify-center  w-full relative flex-wrap gap-10">
            <Card
              children={
                <div className="">
                  <img
                    src={HTMLIcon}
                    className="w-20 h-20 flex justify-center"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    HTML
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img
                    src={CssIcon}
                    className="w-20 h-20 flex justify-center"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    CSS
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img
                    src={JavascriptIcon}
                    className="w-full h-20 flex justify-end"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    JAVASCRIPT
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img
                    src={ReactIcon}
                    className="w-20 h-20 flex justify-center"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    React
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img src={NodeIcon} className="w-20 h-20 flex justify-end" />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    NODE JS
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img src={PostgresIcon} className="w-full h-20 mx-auto" />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    POSTGRES
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img
                    src={MongodbIcon}
                    className="w-full h-20 flex justify-end"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    MONGO DB
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div className="">
                  <img
                    src={GIthubIcon}
                    className="w-full h-20 flex justify-end"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    GIT & GITHUB
                  </h1>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

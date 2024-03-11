import pic from "../assets/nilesh.jpeg";
import Button from "./Button";
import { BackgroundGradient } from "./Background-Gradient";

function Hero() {
  return (
    <div className="flex border-b bg-black border-orange justify-between w-full h-full px-16">
      <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-32">
        <div className="flex-1 text-center">
          <h3 className="text-white text-xl my-6">Hello</h3>
          <h1 className="text-green text-2xl mb-3 font-Bungee animate-bounce">
            I am Nilesh Yadav
          </h1>
          <p className="text-white mb-10">Fullstack Developer</p>
          <p className="text-white font-Bungee">
            I am Software Engineer with 3 years of experience in the industry. I
            like to contribute to cutting-edge projects, collaborate with
            talented professionals, and continuously grow your skills in a
            dynamic and innovative environment. I am passionate about
            technology, enjoy solving complex problems, and thrive in a
            collaborative setting.
          </p>
          <div className="flex mt-10 gap-10 justify-center w-full">
            <Button
              variant="primary"
              onClick={() => console.log("Primary Clicked!")}
            >
              Download CV
            </Button>
            <Button
              variant="secondary"
              onClick={() => console.log("Secondary Clicked!")}
            >
              Contact Info
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center flex-1 w-full">
          <BackgroundGradient>
            <img className="w-96 h-96 rounded-lg m-6" src={pic} />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

export default Hero;

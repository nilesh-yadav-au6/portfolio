import portfolio from "../assets/portfplio.png";
import Button from "./Button";

function Projects() {
  return (
    <>
      <div className="border-b bg-cream border-orange justify-between w-full px-6 md:px-16">
        <h1 className="w-full text-center border-x border-orange font-extrabold text-3xl py-10">
          Projects
        </h1>
        <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full px-16 py-10">
          <div className="flex justify-center w-full relative flex-wrap gap-10">
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between">
              <img src={portfolio} className="w-full rounded-md" />
              <div className="flex gap-10 justify-between w-full p-6">
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
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between">
              <img src={portfolio} className="w-full h-full rounded-md" />
              <div className="flex gap-10 justify-between w-full p-6">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

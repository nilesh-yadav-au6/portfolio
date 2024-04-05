import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const ContactForm: React.FC = () => {
  return (
    <section
      id="contacts"
      className="border-b bg-primary border-orange justify-between w-full h-full px-6 md:px-16"
    >
      <div className="border-x border-orange w-full h-full px-16 flex flex-col">
        <h1 className="text-white text-2xl py-10">Let's Chat</h1>
        <div className="flex flex-1 justify-between flex-wrap-reverse pb-10">
          <p className="w-60 text-white text-lg">
            Need an experienced full-stack developer to help out? Send me an
            email on nilesh221990@gmail.com to discuss your project.
          </p>
          <div className="flex gap-10 pb-10">
            <a
              aria-label="Github"
              href="https://github.com/nilesh-yadav-au6"
              target="_blank"
              title="Github"
              id="github"
              rel="noreferrer"
            >
              <FaGithub size={50} color={`#FFFFFF`} />
            </a>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/nilesh-yadav-b87697129/"
              target="_blank"
              title="linkedin"
              id="linkedin"
              rel="noreferrer"
              className="hover:text-red"
            >
              <FaLinkedin size={50} color={`#FFFFFF`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

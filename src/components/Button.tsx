import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Define your button variants
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  let buttonStyle = "py-2 px-4 rounded";

  switch (variant) {
    case "primary":
      buttonStyle += " bg-white text-black p-4 rounded-full";
      break;
    case "secondary":
      buttonStyle +=
        " bg-primary text-white rounded-full p-4 border border-white p-10 text-white";
      break;
    default:
      buttonStyle += " bg-blue-500 hover:bg-blue-700 text-white";
  }

  return <button className={buttonStyle} {...props} />;
};

export default Button;

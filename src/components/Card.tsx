import React from "react";

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-60 h-60 border border-black bg-green  rounded-lg flex items-center justify-center shadow-xl shadow-primary">
      {children}
    </div>
  );
}

export default Card;

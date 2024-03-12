import React from "react";

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-60 h-60 border border-black bg-black relative rounded-lg">
      <div className="w-60 h-60 border border-black bg-green absolute -left-2 -top-2 rounded-lg flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Card;

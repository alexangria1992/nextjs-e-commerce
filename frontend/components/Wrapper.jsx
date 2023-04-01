import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={`w-full max-w-[1280px] border-red-300 border-2 border-solid 
    px-5 md:px-10 mx-auto ${className || ""}  `}
    >
      {children}
    </div>
  );
};

export default Wrapper;

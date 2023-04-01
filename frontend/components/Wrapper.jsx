import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={`w-full max-w-[1280px] border-red-300 border-2 border-solid 
    px-5 md:px-10 mx-auto ${
      className || ""
    } h-[60px] flex justify-between items-center `}
    >
      {children}
    </div>
  );
};

export default Wrapper;

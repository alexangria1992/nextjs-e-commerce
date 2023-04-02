import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

import React from "react";

const Category = () => {
  return (
    <div className="w-full md:py-20  border-pink-500 border-2 border-solid ">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

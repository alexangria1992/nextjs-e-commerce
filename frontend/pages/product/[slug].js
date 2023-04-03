import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/*  Left Column Start */}
          <div className="w-full flex-[1.5] max-w-[500px] mx-auto md:w-auto lg:max-w-full lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/*  Left Column End */}

          {/* Right Column Start */}

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            <div className="text-lg font-semibold ">MRP: $150.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. taxes
            </div>
            <div
              className="text-md font-medium text-black/[0.5]
            mb-20"
            >
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2 border-cyan-500 border-2 border-solid">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Size
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2 border-yellow-400 border-2 border-solid">
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 6.7
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 7
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 7.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 8
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 8.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 9
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 9.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50"
                >
                  UK 10
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50"
                >
                  UK 10.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50"
                >
                  UK 11
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className=" w-full py-4 rounded-full 
            bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3  
            hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WISHLIST BUTTON START */}
            <button
              className=" w-full rounded-full py-4 border border-black 
              text-lg font-medium transition-transform active:scale-95 
            flex items-center justify-center gap-2 mb-10
            hover:opacity-75"
            >
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Feel unbeatbale from the tee box to the final putt in a design
                thats's pure early MJ: speed, class and laden with true early
                90's touches like visible Air and a translucent rubber sole that
                continue to stand the test of time. This model fuses the strut
                of 1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
              <div className="text-md mb-5">
                Feel unbeatbale from the tee box to the final putt in a design
                thats's pure early MJ: speed, class and laden with true early
                90's touches like visible Air and a translucent rubber sole that
                continue to stand the test of time. This model fuses the strut
                of 1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
            </div>
          </div>
          {/* Right Column End */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

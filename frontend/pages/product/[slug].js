import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/*  Left Column Start */}
          <div className="w-full flex-[1.5] max-w-[500px] mx-auto md:w-auto lg:max-w-full lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/*  Left Column End */}

          {/* Right Column Start */}

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">&#36;{p.price}</p>

              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#36;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

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
              <div
                id="sizesGrid"
                className="grid grid-cols-3 gap-2 border-yellow-400 border-2 border-solid"
              >
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium
                 ${
                   item.enabled
                     ? "hover:border-black cursor-pointer"
                     : "cursor-not-allowed bg-black/[0.1] opacity-50"
                 } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className=" w-full py-4 rounded-full 
            bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3  
            hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
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
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* Right Column End */}
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const paths = products.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}

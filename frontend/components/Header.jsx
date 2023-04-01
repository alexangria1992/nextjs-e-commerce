import Link from "next/link";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[30wh] border-green-300 border-2 border-solid md:h-[80px] bg-white flex items-center 
      justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className=" h-[60px] flex justify-between items-center  ">
        <Link href="/">
          <img src="/logo.svg" className="w-[140px] md:w-[60px]" alt="" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black border-pink-400 border-2 border-solid">
          {/* Icon Start */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full 
          flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative
           border-orange-400 border-2 border-solid"
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />

            <div
              className="h-[14px]  min-w-[14px] 
              rounded-full bg-red-600 absolute top-1 left-5 text-white text-[10px]
             flex justify-center items-center px-[2px] md:h-[18px] md:min-w-[18px] md:left-7 md:text-[12px] md:px-[5px]"
            >
              51
            </div>
          </div>
          {/* Icon End */}
          {/* Icon Start */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full 
          flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative
           border-orange-400 border-2 border-solid"
          >
            <BsCart className="text-[15px] md:text-[20px]" />

            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
              rounded-full bg-red-600 absolute top-1 left-5 text-white text-[10px]
             flex justify-center items-center px-[2px] md:left-7 md:text-[12px] md:px-[5px]"
            >
              5
            </div>
          </div>
          {/* Icon End */}
          {/* Mobile Icon Start */}
          <div
            className="w-8  h-8 rounded-full 
          flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2
           border-purple-500-400 border-2 border-solid md:w-12  md:h-12"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

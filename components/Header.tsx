import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#A29875] ">
      <div className=" mx-8 ">
        <div className=" flex justify-center items-center mx-auto h-48 sm:h-auto">

          {/* Logo */}

          <div className="flex py-4 items-baseline flex-shrink-0 ">
            <Image
              src="/p-letter.png"
              alt="P-letter"
              width={63.52}
              height={70.35}
            />
            <p className="font-rye font-normal text-[66.78px] text-white">
              urity
            </p>
          </div>
          <div className="relative ml-8 xl:ml-[132.38px]">
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
              className="bg-white  w-[769.89px] h-[70px] sm:h-[56.24px] max-w-screen-sm sm:max-w-[1557.03] rounded-[13.83px] font-nunito text-[21px] sm:text-[18.68px] text-[#6C757D] py-[16.6px] pl-[26.74px] "
            />
            <button>
              <Image
                src="/search-icon.svg"
                alt="search icon"
                width={21.5}
                height={21.5}
                className="absolute top-6 right-4 sm:top-4"
              />
            </button>
          </div>

          {/* Icons */}
        
          <div className="flex flex-shrink-0 max-w-xs gap-x-[38.7px] ml-[50px]">
            <Link href="">
            <Image
              src="/favourite-icon.svg"
              alt="favourites"
              width={33.42}
              height={29.71}
            />
            </Link>

             <Link href="">
            <Image
              src="/profile-icon.svg"
              alt="profile"
              width={28.97}
              height={29.26}
              />
              </Link>

              <Link href="">
            <Image
              src="/shop-icon.svg"
              alt="shop"
              width={38.01}
              height={30.08}
              />
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

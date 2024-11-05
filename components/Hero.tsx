import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-8 ">
      <div className="flex flex-col sm:flex-row sm:justify-self-center sm:gap-x-[60.74px] sm:max-w-screen-xl mx-auto items-center gap-8 my-32 ">
        {/* L.H.S */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-libre-bodoni text-black text-5xl sm:text-[37.84px] sm:max-w-[472.97px] sm:leading-normal">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-libre-bodoni font-medium text-[#787054] text-5xl max-w-[798.9px] mt-[60.2px] text-center sm:text-left sm:text-[29.24px] leading-relaxed">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
            
          <button className="bg-[#A29875] font-libre-bodoni font-medium text-3xl rounded-[8.6px] px-[47.33px] py-[8.6px] mt-[42.61px] sm:text-[25.8px]">
            Explore Now
          </button>
        </div>

        {/* R.H.S */}
        
        <div className="relative flex-shrink-0 ">
          <Image
            src="/image.png"
            alt="hero image"
            width={700}
            height={573.59}
            className="sm:w-[421.38px]"
          />
          <Image
            src="/border.png"
            alt="border"
            width={640}
            height={525.43}
            className="absolute top-8 right-7 sm:w-[380.1px] sm:top-6 sm:right-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

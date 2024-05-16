import Image from "next/image";
import React from "react";
import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";

type Props = {};

function Hero2({}: Props) {
  return (
    <div className="w-full   relative h-screen bg-white flex justify-center items-center">
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 z-[2] bg-black w-full h-full opacity-[0.5]"></div>
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src={HeroEverestBg}
            alt="hero-bg"
            className="w-full h-full object-cover object-center"
          ></Image>
        </div>
      </div>

      <div className="grid px-[5vw] z-20 absolute grid-cols-2 gap-3 top-0 left-0 w-full h-full text-white">
        <div className="border-2 w-full h-full flex justify-center items-start flex-col gap-5">
          <span className="font-bold text-3xl">ABOUT US</span>
          <p className="w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            animi expedita repudiandae omnis officia quisquam.
          </p>

          <div className="w-full h-40 flex items-center justify-start cursor-pointer">
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                Explore
              </span>
            </div>
          </div>
        </div>

        <div className="border-2 w-full h-full"></div>
      </div>
    </div>
  );
}

export default Hero2;

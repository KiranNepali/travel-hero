"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";

// place image
import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";
import HeroPerson from "@/public/HeroImage/HeroPerson.png";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";

type Props = {};

function Hero2({}: Props) {
  const imageContainerRef = useRef(null);
  const placeCardContainerRef = useRef(null);
  // animation slide
  const { contextSafe } = useGSAP();
  const handleNextImage = contextSafe(() => {
    gsap.to(".image-container", {
      scale: "0.8",
      opacity: 0,
      duration: 0.8,
      ease: Expo.easeOut,
    });
  });
  const handlePrevImage = contextSafe(() => {
    gsap.to(".image-container", {
      scale: "1",
      opacity: 1,
      duration: 0.8,
      ease: Expo.easeOut,
    });
  });

  return (
    <>
      {/* navbar  */}
      <div className="w-full fixed top-0 left-0  h-[4rem]  z-50">
        <div className="px-[10%] mx-auto flex justify-between items-center h-full">
          <span className="text-xl font-bold">LOGO</span>

          {/* NAVLINKS  */}
          <div className="flex text-[12px] font-medium gap-5">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>SERVICE</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>

      <div className="w-full    relative h-screen bg-white flex justify-center items-center">
        <div className="relative w-full h-screen">
          <div className="absolute top-0 left-0 z-[2] bg-black w-full h-full opacity-[0.2]"></div>
          <div className="absolute top-0 left-0 w-full h-screen">
            <Image
              src={HeroMustangBg}
              alt="hero-mustang"
              className="w-full h-full object-cover object-center"
            ></Image>
          </div>
        </div>

        <div className="grid z-20 absolute grid-cols-2 gap-3 top-0 left-0 w-full h-full text-white">
          {/* left part  */}
          <div className="pl-[10%] w-full h-full flex justify-start items-center gap-10">
            {/* line track */}
            <div className="h-[80vh] w-[1px] bg-white"></div>
            <div className="w-full h-full flex justify-center items-start flex-col gap-5">
              <span className="font-semibold text-5xl">MT. EVEREST</span>
              <p className="w-[70%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio animi expedita repudiandae omnis officia quisquam.
              </p>

              <div className="w-full  flex items-center justify-start cursor-pointer">
                <div className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
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
          </div>

          {/* RIGHT PART  */}
          <div
            ref={placeCardContainerRef}
            className="w-full h-full flex justify-center gap-10 items-center flex-col overflow-hidden"
          >
            <div className="w-full flex gap-2 justify-start items-center">
              {/* cards  */}
              {PlaceMapData.map((item, id) => (
                <div
                  ref={imageContainerRef}
                  key={id}
                  className="min-w-[35%] image-container overflow-hidden flex-nowrap  h-[50vh]"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
              ))}
            </div>
            {/* button  */}
            <div className="flex w-full justify-start gap-5">
              <span
                onClick={() => handlePrevImage()}
                className="prev text-2xl md:text-3xl hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer"
              >
                <Icon icon="gg:arrow-left-o" />
              </span>
              <span
                onClick={() => handleNextImage()}
                className="next text-2xl md:text-3xl  hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer"
              >
                <Icon icon="gg:arrow-right-o" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;

const PlaceMapData = [
  {
    id: "1",
    name: "Mustang",
    image: HeroMustangBg,
  },
  {
    id: "2",
    name: "Phoksundo",
    image: HeroPhoksundoBg,
  },
  {
    id: "3",
    name: "Tilicho",
    image: HeroTilichoBg,
  },
  {
    id: "3",
    name: "Mt. Everest",
    image: HeroEverestBg,
  },
];

"use client";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import React, { useEffect, useReducer, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

// images
import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";
import HeroPersonImage from "@/public/HeroImage/HeroPerson.png";
import LogoImage from "@/public/travel-logo.png";

import Image from "next/image";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
export default function TryTransition({}: Props) {
  // for navbar animation
  const sideNavRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  const handleHam = () => {
    const tl1 = gsap.timeline();
    if (!openNav) {
      tl1.to(
        ".ham1",
        {
          rotate: "45deg",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl1.to(
        ".ham2",
        {
          top: "40%",
          rotate: "-45deg",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl1.to(
        sideNavRef.current,
        {
          display: "flex",
          right: "0",
          duration: 0.7,
          ease: "power4.inOut",
        },
        "ham"
      );
      tl1.to(
        ".nav-links",
        {
          delay: 0.1,
          opacity: 1,
          marginLeft: 0,
          marginTop: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.inOut",
        },
        "ham"
      );
      setOpenNav(true);
    }
    if (openNav) {
      const tl2 = gsap.timeline();
      gsap.to(".nav-links", {
        marginLeft: "-30px",
        marginTop: "30px",
        opacity: 0,
        y: "0",
        x: "0",
        stagger: 0.2,
        duration: 1,
        ease: "power4.inOut",
      });
      tl2.to(
        ".ham1",
        {
          rotate: "0",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl2.to(
        ".ham2",
        {
          top: "80%",
          rotate: "0",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl2.to(sideNavRef.current, {
        delay: 0.5,
        right: "-100%",
        display: "none",
        duration: 0.7,
        ease: "power4.inOut",
      });

      setOpenNav(false);
    }
  };

  // hover side nav links animation
  const handleHoverNav = (id: number) => {
    gsap.to(`.hover-link-${id}`, {
      y: "-36px",
    });
  };

  const handleLeaveNav = (id: number) => {
    gsap.to(`.hover-link-${id}`, {
      y: "0",
    });
  };

  const mainContainerRef = useRef(null);
  const pinContainerRef = useRef(null);
  const slider2Ref = useRef(null);
  const openContainerRef = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    // text animation
    gsap.from(".slide1Text", {
      opacity: 0,
      duration: 0.8,
      top: "50%",
      ease: Expo.easeInOut,
    });
  });
  const handleScroll1 = contextSafe((e: any) => {
    const delta = e.deltaY;
    if (delta > 0) {
      const tl = gsap.timeline();
      tl.to(
        ".slide1",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide2",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide3",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide4",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );

      // text animation
      gsap.from(".slide2Text", {
        opacity: 0,
        duration: 0.8,
        top: "50%",
        ease: Expo.easeInOut,
      });
    }
  });

  const handleScroll2 = contextSafe((e: any) => {
    const delta = e.deltaY;
    // scroll down
    if (delta > 0) {
      gsap.to(".slide1", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });

      gsap.to(".slide4", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });

      // text animation
      gsap.from(".slide3Text", {
        opacity: 0,
        duration: 0.8,
        top: "50%",
        ease: Expo.easeInOut,
      });
    }
    // scroll up
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
    }
  });

  const handleScroll3 = contextSafe((e: any) => {
    const delta = e.deltaY;

    // scroll down
    if (delta > 0) {
      gsap.to(".slide1", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });

      // text animation
      gsap.from(".slide4Text", {
        opacity: 0,
        duration: 0.8,
        top: "50%",
        ease: Expo.easeInOut,
      });
    }

    // scroll  up
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
    }
  });

  const handleScroll4 = contextSafe((e: any) => {
    const delta = e.deltaY;
    //  scroll down
    if (delta > 0) {
      gsap.to(openContainerRef.current, {
        top: 0,
        height: "auto",
        duration: 0.8,
        ease: "power4",
      });
      gsap.to(".start-button", {
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "power4.inOut",
      });
    }

    // scroll ups
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(openContainerRef.current, {
        height: "0",
        duration: 0.8,
        ease: "power4",
      });
    }
  });

  return (
    <>
      {/* top  */}
      <div className="w-full text-white  px-[10%] z-[1000] fixed top-0 left-0 h-[5rem] md:h-[10rem] flex justify-between items-center">
        {/* logo  */}
        <span className="font-semibold text-sm w-[8.5rem] opacity-[0.9]  h-[2rem] cursor-pointer  overflow-hidden">
          <Image
            src={LogoImage}
            alt="travel-logo"
            className="w-full h-full  object-cover object-center"
          ></Image>
        </span>
        {/* ham  */}
        <div
          onClick={handleHam}
          className="flex relative justify-center hover:scale-110 duration-150 items-center w-[1.5rem] md:w-[2rem] cursor-pointer py-2 flex-col gap-1"
        >
          <span className="ham1 absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-100 w-full h-[2px]"></span>
          <span className="ham2  absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-zinc-100 w-full h-[2px]"></span>
        </div>
      </div>

      {/* side nav  */}
      <div
        ref={sideNavRef}
        className="w-full h-screen  justify-center items-center hidden text-white z-[500] fixed top-0 right-[-100%] bg-zinc-900"
      >
        <div className="flex justify-center items-center   flex-col h-full w-full">
          <div className="flex flex-col md:flex-row justify-center h-full items-center gap-[4%] w-full text-3xl font-medium">
            {["About", "Purchased Confirm", "Contacgggg"].map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHoverNav(index)}
                onMouseLeave={() => handleLeaveNav(index)}
                className="ml-[-30px] mt-[30px] nav-links opacity-0 flex justify-center items-center h-[36px] overflow-hidden"
              >
                <div
                  className={`nav-link-container hover-link-${index} flex w-full h-full flex-col`}
                >
                  <span className="cursor-pointer  text-zinc-100">{item}</span>
                  <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9] ">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*main div */}
      <div
        ref={mainContainerRef}
        className="w-full relative flex overflow-hidden  text-nowrap  overflow-x-hidden bg-black text-white h-screen"
      >
        <div className=" hero-person absolute w-[20rem] md:w-[23rem] pointer-events-none bottom-0 z-[30] left-[50%] -translate-x-[50%]">
          <Image
            src={HeroPersonImage}
            className="object-cover object-center w-full"
            alt="hero-person"
          ></Image>
        </div>
        {/* pin */}
        <div className="w-full relative overflow-hidden h-screen flex">
          {/* slide 1  */}
          <div
            onWheel={handleScroll1}
            className="min-w-[100vw] slide1 h-full relative  flex justify-center items-center"
          >
            <span className="text-[3rem] md:text-[8rem] slide1Text  absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              EVEREST
            </span>
            <div className="w-full h-screen  overflow-hidden">
              <Image
                src={HeroEverestBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
          </div>

          {/* slide 2  */}
          <div
            onWheel={handleScroll2}
            ref={slider2Ref}
            className="min-w-[100vw] slide2  h-full relative  flex justify-center items-center"
          >
            <span className="text-[3rem] md:text-[8rem] slide2Text  absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              PHOKSUNDO
            </span>

            <div className="w-full h-screen  overflow-hidden">
              <Image
                src={HeroPhoksundoBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
          </div>

          {/* slide 3  */}
          <div
            onWheel={handleScroll3}
            className="slide3  min-w-[100vw] relative h-full flex justify-center items-center"
          >
            <span className="text-[3rem] md:text-[8rem] slide3Text  absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              MUSTANG
            </span>
            <div className="w-full h-screen  overflow-hidden">
              <Image
                src={HeroMustangBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
          </div>

          {/* slide 4  */}
          <div
            onWheel={handleScroll4}
            className="min-w-[100vw] slide4 relative h-full  flex justify-center items-center"
          >
            <span className="text-[3rem] md:text-[8rem] slide4Text  absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              TILICHO
            </span>
            <div className=" w-full h-screen  overflow-hidden">
              <Image
                src={HeroTilichoBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <button className="start-button border-[2px] fixed border-zinc-300  cursor-pointer bg-zinc-800  text-white hover:bg-zinc-900  hover:scale-95 duration-200   bottom-[15%] z-[100]  left-[50%] translate-x-[-50%] px-10 py-2 text-nowrap rounded-3xl text-[12px] font-semibold">
        START TOUR
      </button>

      {/* BOTTOM  */}
      <div className="px-[10%] z-[100]  w-full mx-auto fixed bottom-0 left-0 h-[7rem] flex justify-between items-center">
        {/* ham  */}
        <div className="h-full hidden  md:flex justify-center text-sm font-medium items-center gap-6 text-nowrap">
          {["About", "Purchased Confirm", "Contact"].map((item) => (
            <span className="cursor-pointer w-full hover:scale-110 duration-200 text-zinc-100 hover:text-white">
              {item}
            </span>
          ))}
        </div>
        {/* bottom dot  */}
        <div className="w-full md:w-auto text-end text-[12px] text-white">
          {" "}
          &copy; Copyright WebX
        </div>
      </div>
      {/* {slide 5} */}
      <div
        ref={openContainerRef}
        className="w-full  h-0  bg-zinc-900 text-white  left-0 overflow-hidden"
      >
        <div className=" w-full h-full">
          <div className="text-5xl font-bold w-full h-screen flex justify-center items-center">
            Section1
          </div>
          <div className="text-5xl  font-bold w-full h-screen flex justify-center items-center">
            Section2
          </div>
          <div className="text-5xl  font-bold w-full h-screen flex justify-center items-center">
            Section3
          </div>
        </div>
      </div>
    </>
  );
}

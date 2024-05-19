"use client";
import Image from "next/image";
import React from "react";
import Hero3BgImage from "@/public/HeroImage/Hero3Bg.avif";

import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
type Props = {};

gsap.registerPlugin(ScrollTrigger);

function Hero3({}: Props) {
  const containerImgRef = useRef();
  const scaleDownRef = useRef();

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerImgRef.current,
        // markers: true,
        start: "10% top",
        end: "40% top",
        scrub: 0.3,
        
      },
    });
    tl1.to(".hero-text", {
      y: "-80px",
      ease: "power4.inOut",
      stagger: 0.3,
      duration: "1",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerImgRef.current,
        markers: true,
        start: "50% top",
        end: "80% top",
        scrub: 0.3,
      },
    });

    // tl1.to(, {
    //   y: "-80px",
    //   ease: "power4.inOut",
    //   stagger: 0.3,
    //   duration: "1",
    // });
  });
  return (
    <div className="w-full  relative h-screen bg-black tex-white ">
      <div className="fixed top-[5%] left-[50%] -translate-x-[50%] z-10 font-bold slate-x-[50%]">
        NAV
      </div>

      {/* hero text  */}
      <div className="fixed bottom-[5%] w-[50vw] left-[50%] z-10 -translate-x-[50%]  flex justify-center items-center flex-col gap-5">
        <span className="hero-text font-bold text-6xl">JUMP IN</span>

        <p className="hero-text text-sm w-[80%]  text-center font-medium text-zinc-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dicta
          voluptatum quam quidem, nesciunt eligendi!
        </p>
      </div>
      <div
        ref={containerImgRef}
        className="w-full h-[150vh]  relative  overflow-hidden"
      >
        <div className="absolute bg-black left-0 top-0 w-full h-full opacity-[0.4]"></div>
        <Image
          src={Hero3BgImage}
          alt="hero-bg-nature"
          className="hero-img w-full h-full object-cover object-center"
        ></Image>
      </div>

      <div
        ref={scaleDownRef}
        className="w-full hidden fixed scale-[2] bg-black overflow-hidden  justify-center items-center z-40 h-screen  top-0 left-0"
      >
        <span className="text-[10rem] font-black text-black">TRAVEL TOUR</span>
      </div>
    </div>
  );
}

export default Hero3;

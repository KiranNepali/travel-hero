// "use client";

// import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
// import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
// import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
// import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";
// import HeroPerson from "@/public/HeroImage/HeroPerson.png";

// import LogoImage from "@/public/travel-logo.png";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Icon } from "@iconify/react";
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import Image from "next/image";

// import { useGSAP } from "@gsap/react";
// import { gsap, Expo } from "gsap";
// import { useRef } from "react";

// const Hero1 = () => {
//   const swiperRef = useRef<any>(); // Move useRef inside the functional component
//   const { contextSafe } = useGSAP();
//   const handleSlideChange = contextSafe(() => {
//     const swiper = swiperRef.current.swiper; // Get the Swiper instance
//     const activeIndex = swiper.activeIndex; // Get the active index

//     // Animate only the active slide
//     gsap.to(swiper.slides[activeIndex], {
//       scale: 1.3,
//       duration: 1.5,
//       ease: "power4.inOut",
//       width: "100vw",
//       scaleX: 0,
//     });
//     // animate the sliide except active slide
//     swiper.slides.forEach((slide: any, index: number) => {
//       if (index !== activeIndex) {
//         gsap.to(slide, {
//           scale: 1,
//           scaleX: 1,
//           duration: 1.5,
//           width: "0",
//           ease: "power4.inOut",
//         });
//       }
//     });

//     gsap.set(swiper.slides[activeIndex].querySelector(".text"), {
//       height: 0,
//     });
//     gsap.to(swiper.slides[activeIndex].querySelector(".text"), {
//       height: "auto",
//       delay: "0.5",
//       duration: 0.9,
//       ease: "power3.inOut",
//     });
//   });

//   return (
//     <>
//       {/* top  */}
//       <div className="w-full text-white  px-[10%] z-10 fixed top-0 left-0 h-[6rem] md:h-[10rem] flex justify-between items-center">
//         {/* logo  */}
//         <span className="font-semibold text-sm w-[8.5rem] opacity-[0.9]  h-[2rem] cursor-pointer  overflow-hidden">
//           <Image
//             src={LogoImage}
//             alt="travel-logo"
//             className="w-full h-full  object-cover object-center"
//           ></Image>
//         </span>
//         {/* ham  */}
//         <div className="flex justify-center hover:scale-110 duration-150 items-center w-[1.5rem] md:w-[2rem] cursor-pointer py-2 flex-col gap-1">
//           <span className="bg-zinc-100 w-full h-[2px]"></span>
//           <span className="bg-zinc-100 w-full h-[2px]"></span>
//         </div>
//       </div>

//       <button className="border-[2px] border-zinc-300  cursor-pointer bg-zinc-800  text-white hover:bg-zinc-900  hover:scale-95 duration-200  absolute bottom-[15%] z-[15]  left-[50%] translate-x-[-50%] px-10 py-2 text-nowrap rounded-3xl text-[12px] font-semibold">
//         START TOUR
//       </button>

//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         slidesPerView={1}
//         loop={true}
//         onSlideChange={() => handleSlideChange()}
//         navigation={{
//           prevEl: ".prev",
//           nextEl: ".next",
//         }}
//         speed={1200}
//         mousewheel={true}
//         ref={swiperRef}
//         className="w-full h-screen relative flex justify-center items-center"
//       >
//         {/* hero person */}
//         <div className="fixed bottom-0 z-[3] overflow-hidden w-[15rem] md:w-[18rem]    flex justify-start left-[50%] translate-x-[-50%]">
//           <Image src={HeroPerson} alt="hero-person"></Image>
//         </div>
//         {/* Sliders */}
//         {/* Map each slider */}
//         {sliderData.map((sliderDat) => (
//           <SwiperSlide
//             key={sliderDat.id}
//             className="min-w-[100vw] z-[30] min-h-[100vh] overflow-hidden"
//           >
//             <div className="w-full h-full flex justify-center items-center relative">
//               <div className="w-full h-screen bg-black opacity-[0] absolute top-0 left-0"></div>
//               <Image
//                 src={sliderDat.img}
//                 alt={sliderDat.name}
//                 className="w-full img h-full object-cover object-center"
//               />
//               <span className="absolute text-zinc-100 z-[40] overflow-hidden text top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-center w-full  md:text-6xl uppercase tracking-wide font-black">
//                 {sliderDat.name}
//               </span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* BOTTOM  */}
//       <div className="px-[10%] z-10 w-full mx-auto fixed bottom-0 left-0 h-[7rem] flex justify-between items-center">
//         {/* bottom dot  */}
//         <div className="w-full flex gap-4 justify-center md:justify-start font-bold text-sm uppercase">
//           <span className="prev text-2xl md:text-3xl hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer">
//             <Icon icon="gg:arrow-left-o" />
//           </span>
//           <span className="next text-2xl md:text-3xl  hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer">
//             <Icon icon="gg:arrow-right-o" />
//           </span>
//         </div>
//         {/* ham  */}
//         <div className="h-full hidden  md:flex justify-center text-sm font-medium items-center gap-6 text-nowrap">
//           {["About", "Purchased Confirm", "Contact"].map((item) => (
//             <span className="cursor-pointer hover:scale-110 duration-200 text-zinc-100 hover:text-white">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero1;

// const sliderData = [
//   { id: 1, name: "Mt. Everest", img: HeroEverestBg },
//   { id: 2, name: "Phoksundo", img: HeroPhoksundoBg },
//   { id: 3, name: "Tilicho", img: HeroTilichoBg },
//   { id: 4, name: "Mustang", img: HeroMustangBg },
// ];

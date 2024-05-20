"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";

type Props = {};

function Trending({}: Props) {
  return (
    <div className="w-11/12 mx-auto overflow-hidden my-[5rem] px-5 flex justify-center items-center flex-col">
      {/* title  */}

      <span className="text-2xl md:text-4xl font-semibold">
        Trending Destinations
      </span>

      <Swiper
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        breakpoints={{
          924: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1256: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1576: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full h-full flex justify-start items-start "
      >
        {TrendingTrekData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="p-1 h-full flex justify-start items-start"
          >
            <CardContainer className="p-3 border-t-[1px] rounded-xl cursor-pointer  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <CardBody className="flex w-full h-[20rem] flex-col gap-2">
                <CardItem
                  translateZ="100"
                  className="w-full h-[60%] overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full object-cover object-center  group-hover/card:shadow-xl"
                  ></img>
                </CardItem>

                <div className="flex gap-2 w-full">
                  {/* desc  */}
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-black text-sm">
                      {item.name}
                    </span>
                    {/* distance  */}
                    <span className="text-[12px] font-semibold text-zinc-500">
                      {item.distance}
                    </span>

                    {/* days */}
                    <span className="text-[10px] font-semibold text-zinc-500">
                      7 days
                    </span>
                    {/* rating  */}
                    <div className="flex gap-1 w-full justify-start items-center">
                      <Icon icon="twemoji:star" />
                      <Icon icon="twemoji:star" />
                      <Icon icon="twemoji:star" />
                      <Icon icon="twemoji:star" />
                      <Icon icon="twemoji:star" />
                    </div>
                  </div>
                  {/* price  */}
                  <span className="w-full text-end text-[12px] font-semibold text-zinc-700  justify-center  items-end">
                    {item.price}
                  </span>
                </div>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Trending;

const TrendingTrekData = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Annapurna Base Camp",
    distance: "120 km",
    rating: "5",
    price: "Rs. 25000",
    discount: "Rs. 2500", // 10% of 25000
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Everest Base Camp",
    distance: "130 km",
    rating: "4.8",
    price: "Rs. 30000",
    discount: "Rs. 4500", // 15% of 30000
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Manaslu Circuit",
    distance: "177 km",
    rating: "4.7",
    price: "Rs. 22000",
    discount: "Rs. 2640", // 12% of 22000
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Langtang Valley",
    distance: "75 km",
    rating: "4.5",
    price: "Rs. 18000",
    discount: "Rs. 1440", // 8% of 18000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
];

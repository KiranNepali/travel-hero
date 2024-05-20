import React from "react";

type Props = {};

function Service({}: Props) {
  return (
    <div className="w-11/12 mx-auto text-center  my-[5rem]">
      <div className="flex flex-col gap-3 w-10/12 mx-auto">
        {/* title  */}
        <span className="text-2xl md:text-4xl font-semibold">
          Why chose us?
        </span>
        {/* sub desc title  */}
        <p className="text-sm text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          placeat labore, asperiores temporibus nisi odio suscipit deserunt
          nobis? Debitis, eius? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat, facere.
        </p>
      </div>
      <div className="w-full mt-[3rem] flex justify-center items-center">
        <div className="w-10/12 grid grid-cols-3 gap-5 place-content-center  place-items-center">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3 w-full h-[35vh] flex flex-col justify-start items-center gap-2"
            >
              {/* sevie img  */}
              <div className="w-[5rem] h-[5rem] rounded-full bg-black"></div>
              {/* service name  */}
              {/* sevive description */}
              <span className="font-semibold text-sm">{item.name}</span>
              <p className="text-center text-sm text-zinc-700 mt-[10px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

const ServiceData = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Mountain Trekking",
    desc: "Experience the thrill of mountain trekking with our expert guides and customized routes.",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Camping",
    desc: "Enjoy an unforgettable camping experience under the stars with all amenities provided.",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Guided Tours",
    desc: "Join our guided tours to explore the most breathtaking locations with local experts.",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Wildlife Safaris",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Cultural Tours",
    desc: "Immerse yourself in the local culture and traditions with our curated cultural tours.",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Adventure Sports",
    desc: "Get your adrenaline pumping with our range of adventure sports activities.",
  },
];

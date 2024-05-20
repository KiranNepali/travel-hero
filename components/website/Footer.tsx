import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg')",
        backgroundPosition: "center",
        backgroundSize: "100vw",
      }}
      className="w-full relative bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-[0.4]"></div>
      <div className="w-11/12  relative mx-auto  flex justify-center items-center">
        <div className="w-full grid grid-cols-6  text-white py-10 place-content-center place-items-center">
          {/* left  */}
          <div className="w-full flex  col-span-2 flex-col gap-5 text-left">
            <div>Logo</div>
            {/* socio icons  */}
            <div className="flex gap-3 ">
              <span>icon</span>
              <span>icon</span>
              <span>icon</span>
            </div>
          </div>

          {/* ---- */}
          <div className="w-full flex flex-col gap-5">
            {/* title  */}
            <span>Menu</span>
            <div className="flex flex-col gap-2  ">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
          {/* ---- */}
          <div className="w-full flex flex-col gap-5">
            {/* title  */}
            <span>Menu</span>
            <div className="flex flex-col gap-2">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
          {/* ---- */}
          <div className="w-full flex flex-col gap-5">
            {/* title  */}
            <span>Menu</span>
            <div className="flex flex-col gap-2">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
          {/* ---- */}
          <div className="w-full flex flex-col gap-5">
            {/* title  */}
            <span>Menu</span>
            <div className="flex flex-col gap-2">
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
              <span>Home</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  border-t-[1px] border-zinc-300 py-4">
        <div className="flex justify-between mx-auto items-center w-11/12">
          <span className="font-semibold text-[11px] text-zinc-500">
            Copyright 2024 | All rights reserved
          </span>
          <span className="font-semibold text-[11px] text-zinc-500">
            Designed by <span className="text-blue-600">WebX</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

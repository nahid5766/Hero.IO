import React from "react";
import gStoreImg from "../../assets/icons8-google-play-store-48.png";
import aStoreImg from "../../assets/icons8-app-store-48.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="border bg-[#D2D2D2]/30 ">
      <h1 className="text-4xl text-center font-extrabold mt-10 leading-normal">
        We Build <br />{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-center text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex mt-10 items-center justify-center gap-3">
        <button className="border border-gray-400 flex p-2 rounded-sm">
          <img className="w-5" src={gStoreImg} alt="" />{" "}
          <span className="ml-2 font-extrabold">Google Play</span>
        </button>
        <button className="border border-gray-400 flex p-2 rounded-sm">
          <img className="w-7" src={aStoreImg} alt="" />{" "}
          <span className="ml-2 font-extrabold">App Store</span>
        </button>
      </div>
      <div className="mt-15">
        <img
          className="w-1/2 items-center justify-center mx-auto"
          src={heroImg}
          alt=""
        />
      </div>

      
    </div>
  );
};

export default Banner;

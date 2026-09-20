import React from "react";
import gStoreImg from "../../assets/icons8-google-play-store-48.png";
import aStoreImg from "../../assets/icons8-app-store-48.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#D2D2D2]/30 ">
      <div>
        <div className="flex justify-center">
          <h1 className="text-4xl text-center font-extrabold  leading-normal  mt-10">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>
            Apps
          </h1>
        </div>

        <p className="text-center text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="flex mt-10 items-center justify-center gap-3">
        <button className="border border-gray-400 flex p-2 rounded-sm">
          <img className="w-5" src={gStoreImg} alt="" />
          <span className="ml-2 font-extrabold">Google Play</span>
        </button>
        <button className="border border-gray-400 flex p-2 rounded-sm">
          <img className="w-7" src={aStoreImg} alt="" />
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
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] pt-10 p-10">
        <div className="flex justify-center">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Trusted by Millions, Built for You
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 px-4 max-w-5xl mx-auto">
          <div className=" text-center text-white">
            <p className="text-sm text-gray-300">Total Downloads</p>
            <h1 className="text-4xl font-extrabold leading-relaxed">29.6M</h1>
            <p className="text-sm text-gray-300">21% more than last month</p>
          </div>

          <div className="text-center text-white">
            <p className="text-sm text-gray-300">Total Reviews</p>
            <h1 className="text-4xl font-extrabold leading-relaxed">906K</h1>
            <p className="text-sm text-gray-300">46% more than last month</p>
          </div>

          <div className=" text-center text-white">
            <p className="text-sm text-gray-300">Active Apps</p>
            <h1 className="text-4xl font-extrabold leading-relaxed">132+</h1>
            <p className="text-sm text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

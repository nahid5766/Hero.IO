import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router";

const Cards = ({ items }) => {
  const cardsData = items;
  // console.log(cardsData);
  const { id, title, image, ratingAvg, downloads } = cardsData;

  return (
    <Link to={`/appsDetails/${id}`} className="block h-full">
      <div className="card bg-base-100 w-full h-full shadow-xl hover:shadow-2xl transition-shadow p-4 rounded-xl">
        <figure className="bg-[#D9D9D9] w-full h-68 rounded-xl p-4 flex items-center justify-center">
          <img className="max-h-full object-contain" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between flex">
            <button className="btn btn-soft bg-[#F1F5E8] hover:bg-[#00D390]/10 text-[#00D390]">
              <GoDownload />
              {downloads}
            </button>
            <button className="btn btn-soft bg-[#FFF0E1] hover:bg-[#FF8811]/10 text-[#FF8811]">
              <IoStar /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;

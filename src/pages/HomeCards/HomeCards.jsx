import React from "react";
import { IoStar } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router";

const HomeCards = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;

  return (
    <Link to={`/appsDetails/${id}`} className="block h-full">
 
      <div className="card bg-base-100 w-full h-full shadow-xl hover:shadow-2xl transition-shadow p-4 rounded-xl">
        <figure className="bg-[#D9D9D9] w-full h-68 rounded-xl p-4 flex items-center justify-center">
          <img className="max-h-full object-contain" src={image} alt={title} />
        </figure>

        <div className="card-body p-4 px-1">
          <h2 className="card-title text-lg font-bold line-clamp-1">{title}</h2>

          <div className="card-actions justify-between flex items-center mt-3">
            <button className="btn btn-sm btn-soft bg-[#F1F5E8] hover:bg-[#00D390]/10 text-[#00D390] border-none">
              <GoDownload /> {downloads}
            </button>
            <button className="btn btn-sm btn-soft bg-[#FFF0E1] hover:bg-[#FF8811]/10 text-[#FF8811] border-none">
              <IoStar /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCards;

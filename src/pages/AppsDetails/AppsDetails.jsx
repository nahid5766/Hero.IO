import React, { useState } from "react";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { addStoredDB } from "../../Utility/addToDB";

const AppsDetails = () => {
  const [isInstalled, setInstalled] = useState(false);

  const { id } = useParams();
  const data = useLoaderData();

  const singleApp = Array.isArray(data)
    ? data.find(
        (app) =>
          String(app.id) === String(id) || String(app.appsId) === String(id),
      )
    : data;

  const {
    title,
    size,
    companyName,
    image,
    description,
    reviews,
    ratingAvg,
    downloads,
    ratings: appRatings = [],
  } = singleApp || {};

  const handleInstalled = (appId) => {
    setInstalled(true);
    toast.success(`${title || "App"} Installed Successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });

    addStoredDB(appId);
  };

  return (
    <div className="bg-[#D2D2D2]/30 min-h-screen py-6 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-18/18 mx-auto">
        {/* Top App Details Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 py-6">
          {/* Image Wrapper */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain rounded-2xl bg-white p-2 shadow-sm"
              src={image}
              alt={title || "App Logo"}
            />
          </div>

          {/* Details Content */}
          <div className="w-full text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                {title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Developed by{" "}
                <span className="text-blue-500 font-medium">{companyName}</span>
              </p>
            </div>

            <div className="border-b border-gray-400/50 my-4"></div>

            {/* Stats Grid from here */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-md mx-auto md:mx-0 py-2">
              <div className="flex flex-col items-center md:items-start">
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                  src={download}
                  alt="Downloads"
                />
                <p className="text-xs sm:text-sm text-gray-600">Downloads</p>
                <h1 className="text-lg sm:text-2xl font-bold">{downloads}</h1>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                  src={ratings}
                  alt="Ratings"
                />
                <p className="text-xs sm:text-sm text-gray-600">Ratings</p>
                <h1 className="text-lg sm:text-2xl font-bold">{ratingAvg}</h1>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                  src={review}
                  alt="Reviews"
                />
                <p className="text-xs sm:text-sm text-gray-600">Reviews</p>
                <h1 className="text-lg sm:text-2xl font-bold">{reviews}</h1>
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-5 flex justify-center md:justify-start">
              <button
                disabled={isInstalled}
                onClick={() => handleInstalled(id)}
                className={`btn w-fit sm:w-auto px-8 py-3 rounded-lg font-semibold transition-all ${
                  isInstalled
                    ? "btn-disabled bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "btn-success bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-400/50 my-6"></div>

        {/* Ratings Chart Section */}
        <div className="my-8">
          <h2 className="font-bold text-xl sm:text-2xl mb-4 text-gray-800">
            Ratings
          </h2>
          <div className="w-full h-64 sm:h-80 bg-white/50 p-2 sm:p-4 rounded-xl shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                data={appRatings}
                margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" width={60} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FF8811" barSize={16} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-b border-gray-400/50 my-6"></div>

        {/* Description Section */}
        <div className="my-8">
          <h2 className="font-bold text-xl sm:text-2xl mb-3 text-gray-800">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppsDetails;

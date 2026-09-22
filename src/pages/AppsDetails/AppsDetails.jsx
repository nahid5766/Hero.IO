import React, { useState } from "react";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import img from "../../assets/demo-app (1).webp";
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
  // for install btn
  const [isInstalled, setInstalled] = useState(false);

  const handleInstalled = (id) => {
    setInstalled(true);
    // toast
    toast.success(`${title || "App"} Installed Successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });

    addStoredDB(id);
  };

  const { id } = useParams();
  const data = useLoaderData();

  // const cleanId = id?.replace(":", "");

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

  return (
    <div className="bg-[#D2D2D2]/30 min-h-screen">
      <div className="w-14/15 mx-auto">
        <div className="md:flex py-10 ">
          <div className="">
            <img className="w-30 h-30 md:w-80 md:h-70" src={image} alt="" />
          </div>

          <div className="ml-10 w-full">
            <div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p>
                Developed by
                <span className="text-blue-500"> {companyName}</span>
              </p>
            </div>
            <div className="border-b-1 border-gray-400 my-5"></div>
            <div className="flex gap-20">
              <div className="items-center text-center">
                <img className="ml-4" src={download} alt="" />
                <p>Downloads</p>
                <h1 className="text-3xl font-bold">{downloads}</h1>
              </div>
              <div className="items-center text-center">
                <img className="ml-2" src={ratings} alt="" />
                <p>Ratings</p>
                <h1 className="text-3xl font-bold">{ratingAvg}</h1>
              </div>
              <div className="items-center text-center">
                <img className="ml-6" src={review} alt="" />
                <p>Reviews</p>
                <h1 className="text-3xl font-bold">{reviews}</h1>
              </div>
            </div>
            <div className="mt-5">
              <button
                disabled={isInstalled}
                onClick={() => handleInstalled(id)}
                className={`btn ${
                  isInstalled
                    ? "btn-disabled bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "btn-success hover:p-5 hover:bg-green-500"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now ${size} MB`}
              </button>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-gray-400"></div>
      </div>
      <div className="my-5 ml-16 mr-16">
        <h2 className="font-bold text-xl mb-4">Ratings</h2>
        <div className="w-full h-72 bg-[#D2D2D2]/30 p-5">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={appRatings}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" barSize={20} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="border-b-1 border-gray-400 py-5"></div>
      </div>
      <div className="my-5 ml-16">
        <h2 className="font-bold">Description</h2>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppsDetails;

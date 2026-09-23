import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const AppsInstalled = ({ installedApps, handleUninstall }) => {
  const { id, title, image, ratingAvg, downloads, size } = installedApps;

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-5 shadow-sm border border-gray-100 gap-4">
      {/* Left Section: Image and Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto ">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-gray-100 p-2 flex-shrink-0"
          src={image}
          alt={title}
        />
        <div className="flex-grow">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 line-clamp-1">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-1 text-xs sm:text-sm text-gray-600">
            <div className="flex gap-1.5 items-center">
              <img
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                src={downloadIcon}
                alt="downloads"
              />
              <span>{downloads}</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <img
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                src={ratingImg}
                alt="ratings"
              />
              <span>{ratingAvg}</span>
            </div>
            <div className="flex gap-1.5 items-center font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-700">
              <span>{size} MB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Uninstall Button */}
      <div className="w-full sm:w-auto flex justify-end">
        <button
          onClick={() => handleUninstall(installedApps)}
          className="btn btn-success text-white w-full sm:w-auto px-6"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default AppsInstalled;

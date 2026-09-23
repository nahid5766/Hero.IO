import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const AppsInstalled = ({ installedApps, handleUninstall }) => {
  const { id, title, image, ratingAvg, downloads, size } = installedApps;
  //   console.log(installedApps);
  return (
    <div className="flex justify-between items-center bg-white p-5 mb-10 mx-20">
      <div className="flex gap-5">
        <img className="w-20" src={image} alt="" />
        <div>
          <h1 className="text-2xl">{title}</h1>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center py-1">
              <img className="w-4 h-fit" src={downloadIcon} alt="" />
              <p>{downloads}</p>
            </div>
            <div className="flex gap-2 items-center py-1">
              <img className="w-4 h-fit" src={ratingImg} alt="" />
              <p>{ratingAvg}</p>
            </div>
            <div className="flex gap-2 items-center py-1">
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => handleUninstall(installedApps)} className="btn btn-success">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default AppsInstalled;

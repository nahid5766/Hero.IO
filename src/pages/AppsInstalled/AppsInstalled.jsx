import React from "react";

const AppsInstalled = ({ installedApps }) => {
  const { id, title, image, ratingAvg, downloads } = installedApps;
  //   console.log(installedApps);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5">
        <img className="w-20" src={image} alt="" />
        <div >
          <h1>Forest: Focus for Productivity</h1>
        </div>
      </div>
      <div>
        <button className="btn btn-success">Uninstall</button>
      </div>
    </div>
  );
};

export default AppsInstalled;

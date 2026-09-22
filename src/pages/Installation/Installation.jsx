import React, { useEffect, useState } from "react";
import { getStoredApps } from "../../Utility/addToDB";
import { useLoaderData } from "react-router";
import AppsInstalled from "../AppsInstalled/AppsInstalled";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedAppsData = getStoredApps();
    console.log(storedAppsData);
    // covert string to number
    const convertedStoredData = storedAppsData.map((id) => parseInt(id));

    const installedApps = data.filter((app) =>
      convertedStoredData.includes(app.id),
    );
    setInstalled(installedApps);
  }, []);

  const handleShorted = (type) => {
    setSort(type);
    if (type === "Low-High") {
      const shortedLowToHIgh = [...installed].sort((a, b) => a.low - b.low);
      setInstalled(shortedLowToHIgh);
    }
    if (type === "High-Low") {
      const shortedHighToLow = [...installed].sort((a, b) => a.high - b.high);
      setInstalled(shortedHighToLow);
    }
  };

  return (
    <div className="bg-[#D2D2D2]/30 min-h-screen">
      <div className="py-10 text-center items-center justify-center">
        <h2 className="text-4xl font-extrabold mt-15">Your Installed Apps</h2>
        <p className="mt-4 text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between px-19">
        <h1 className="text-2xl font-bold">{installed.length} App found</h1>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size {sort ? sort : ""}
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleShorted("Low-High")}>Low-High</a>
            </li>
            <li>
              <a onClick={() => handleShorted("High-Low")}>High-Low</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {
          installed.map((a)=>(<AppsInstalled key={a.id} installedApps={a}></AppsInstalled>))
        }
      </div>
    </div>
  );
};

export default Installation;

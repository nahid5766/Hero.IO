import React, { useEffect, useState } from "react";
import { getStoredApps, removeFromDB } from "../../Utility/addToDB";
import { useLoaderData } from "react-router";
import AppsInstalled from "../AppsInstalled/AppsInstalled";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedAppsData = getStoredApps();
    const convertedStoredData = storedAppsData.map((id) => parseInt(id));

    const installedApps = data.filter((app) =>
      convertedStoredData.includes(app.id),
    );
    setInstalled(installedApps);
  }, [data]);

  const handleShorted = (type) => {
    setSort(type);
    const sortedApps = [...installed].sort((a, b) => {
      const sizeA = parseFloat(a.size);
      const sizeB = parseFloat(b.size);

      if (type === "Low-High") {
        return sizeA - sizeB;
      } else if (type === "High-Low") {
        return sizeB - sizeA;
      }
      return 0;
    });
    setInstalled(sortedApps);
  };

  const handleUninstall = (app) => {
    const id = app.id;
    const appName = app.title;
    const remainingApps = installed.filter((item) => item.id !== id);
    setInstalled(remainingApps);

    if (typeof removeFromDB === "function") {
      removeFromDB(id);
    }

    toast.success(`${appName} Uninstalled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-[#D2D2D2]/30 min-h-screen pb-12">
      <div className="max-w-19/20 mx-auto px-2 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <div className="py-8 sm:py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Your Installed Apps
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Filter and Count Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 mb-6 border-b border-gray-300/60 w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {installed.length} {installed.length <= 1 ? "App" : "Apps"} Found
          </h1>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm sm:btn-md bg-white border-gray-300"
            >
              Sort By Size {sort ? `: ${sort}` : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 p-2 shadow-md mt-2"
            >
              <li>
                <a onClick={() => handleShorted("Low-High")}>
                  Size: Low to High
                </a>
              </li>
              <li>
                <a onClick={() => handleShorted("High-Low")}>
                  Size: High to Low
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Installed Apps List */}
        <div className="flex flex-col gap-4 w-full">
          {installed.length > 0 ? (
            installed.map((a) => (
              <AppsInstalled
                key={a.id}
                installedApps={a}
                handleUninstall={handleUninstall}
              />
            ))
          ) : (
            <div
              className="text-center py-12 text-gray-500 bg-white 
            shadow-sm"
            >
              No installed apps found.
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;

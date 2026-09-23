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
    const remainingApps = installed.filter((app) => app.id !== id);
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
    <div className="bg-[#D2D2D2]/30 min-h-screen">
      <div className="py-10 text-center items-center justify-center">
        <h2 className="text-4xl font-extrabold mt-15">Your Installed Apps</h2>
        <p className="mt-4 text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between px-19 py-6">
        <h1 className="text-2xl font-bold">{installed.length} App found</h1>

        <div className="dropdown ">
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
        {installed.map((a) => (
          <AppsInstalled
            key={a.id}
            installedApps={a}
            handleUninstall={handleUninstall}
          ></AppsInstalled>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;

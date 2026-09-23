import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import { Link, useLoaderData } from "react-router";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
  const appsData = useLoaderData();
  // console.log(appsData);
  return (
    <div>
      <Banner></Banner>

      <Suspense fallback={<span>Loader...</span>}>
        <div className="bg-[#D2D2D2]/30 pb-16">
          <div className="flex justify-center">
            <div className="mt-15 mb-10 text-center">
              <h1 className="text-3xl font-extrabold">Trending Apps</h1>
              <p className="text-gray-500 mt-3 text-center">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
          </div>

          <div className="w-full max-w-14/15 mx-auto px-4 sm:px-6 lg:px-2 my-10">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {appsData.slice(0, 8).map((app) => (
                <HomeCards key={app.id} app={app}></HomeCards>
              ))}
            </div>
          </div>

          <Link to="/apps">
            <div className="mt-10 text-center">
              <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
                Show All
              </button>
            </div>
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;

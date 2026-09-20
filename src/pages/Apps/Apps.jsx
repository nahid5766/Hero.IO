import React, { Suspense, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Cards from "../Cards/Cards";

const Apps = () => {
  const appsData = useLoaderData();

  // console.log(appsData);

  // useState for search bar
  const [searchQuery, setSearchQuery] = useState("");

  // I need to filter data for search
  const filteredApps = appsData.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Suspense fallback={<span>Loading...</span>}>
      {/* padding bottom for making gap bellow the card */}
      <div className="bg-[#D2D2D2]/30 pb-16">
        {/* Header section */}
        <div className="flex text-center justify-center">
          <div className="text-center mt-15 mb-8">
            <h1 className="text-4xl font-extrabold ">Our All Applications</h1>
            <p className="text-gray-400 mt-3">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
        </div>
        {/* search bar */}
        <div className="flex justify-between mx-8 mb-4 md:mx-21 md:mb-7 items-center">
          <h2 className="text-xl font-bold">
            {filteredApps.length} Apps Found
          </h2>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="search Apps"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>

        {/* use filteredApps to render the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center mx-auto max-w-max">
          {filteredApps.length > 0 ? (
            filteredApps.map((items) => (
              <Cards key={items.id} items={items}></Cards>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500 my-10 font-bold">
              No apps found matching "{searchQuery}"
            </p>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Apps;

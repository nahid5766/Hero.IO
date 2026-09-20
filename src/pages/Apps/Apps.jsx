import React, { Suspense } from "react";
import { Link, useLoaderData } from "react-router";
import Cards from "../Cards/Cards";

const Apps = () => {
  const appsData = useLoaderData();
  console.log(appsData);
  return (
    <Suspense fallback={<span>Loading...</span>}>
      {/* pading bottom for making gap bellow the card */}
      <div className="bg-[#D2D2D2]/30 pb-16">
        <div className="flex text-center justify-center">
          <div className="text-center mt-15 mb-8">
            <h1 className="text-4xl font-extrabold ">Our All Applications</h1>
            <p className="text-gray-400 mt-3">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center mx-auto max-w-max">
          {appsData.map((items) => (
            <Cards key={items.id} items={items}></Cards>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Apps;

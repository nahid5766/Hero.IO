import React from "react";
import img from "../../assets/error-404.png";
import Navbar from "../../components/Header/Navbar"; // Navbar import kora holo
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-[#D2D2D2]/30 min-h-screen">
      {/* import kora hoicha navbar k */}
      <Navbar></Navbar>

      <div className="flex flex-col items-center justify-center py-25 ">
        <div>
          <img className="w-80 md:w-full" src={img} alt="404 Not Found" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mt-5">Oops, page not found!</h2>
        <p className="text-gray-600 mt-4">
          The page you are looking for is not available.
        </p>

         <Link>
        <div className="mt-7 text-center">
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5">
            Go Back!
          </button>
        </div>
      </Link>
      </div>
     
    </div>
  );
};

export default ErrorPage;

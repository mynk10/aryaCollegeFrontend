import React from "react";
import logo from "../assets/arya-logo-2.png";
import { colleges } from "../utils/constants";

const CollegesCardSection = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2AAF]">
          Arya Group Of Colleges, Jaipur
        </h2>
        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
          The best under one roof
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {colleges.map((college, idx) => (
          <div
            key={idx}
            className="rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden border border-gray-200 bg-white"
          >
            <div className="relative h-[120px] sm:h-[180px]">
              <img
                src={college.image}
                alt={college.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md bg-red-500 text-white font-semibold shadow-sm">
                REAP Code: {college.reapCode}
              </span>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={logo}
                  alt="Arya Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain"
                />
                <div>
                  <h3 className="text-sm sm:text-md font-semibold text-[#2D2AAF]">
                    {college.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {college.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-3">
                {college.description}
              </p>

              <div className="flex gap-2">
                <button className="px-2 sm:px-4 py-1 text-xs sm:text-sm border border-[#2D2AAF] text-[#2D2AAF] rounded-md cursor-pointer hover:bg-[#2D2AAF] hover:text-white transition transform duration-300 hover:scale-105">
                  View More
                </button>
                <button className="px-2 sm:px-4 py-1 text-xs sm:text-sm border border-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 transition transform duration-300 hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegesCardSection;

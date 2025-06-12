import React from "react";
import { industryLogos } from "../utils/constants";

const IndustryLogoCarousel = () => {
  return (
    <div className="bg-[#f8f8f8] py-8 sm:py-10">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-blue-800 mb-6 sm:mb-10">
        Industrial Alliance
      </h2>

      {/* Mobile - Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto pb-4 scrollbar-hidden px-4">
        <div className="flex gap-4 w-max">
          {industryLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm flex items-center justify-center w-32 h-20 p-3 flex-shrink-0 transform transition-transform duration-300 active:scale-110"
            >
              <img
                src={logo}
                alt="Industry partner"
                className="object-contain h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop - Grid Layout */}
      <div className="hidden sm:flex flex-wrap justify-center gap-6 px-4">
        {industryLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm flex items-center justify-center w-36 h-24 p-4 transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo}
              alt="Industry partner"
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryLogoCarousel;

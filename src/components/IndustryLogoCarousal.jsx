import React from "react";
import { industryLogos } from "../utils/constants";

const IndustryLogoCarousel = () => {
  return (
    <div className="bg-[#f8f8f8] py-10">
      <h2 className="text-center text-2xl font-semibold text-blue-800 mb-10">
        Industrial Alliance
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {industryLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm flex items-center justify-center w-36 h-24 p-4 transform transition-transform duration-300 hover:scale-110"
          >
            <img src={logo} className="object-contain h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryLogoCarousel;

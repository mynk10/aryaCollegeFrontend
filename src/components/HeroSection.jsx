import React from "react";
import brochureIcon from "../assets/brochure-icon.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between px-4 sm:px-6 md:flex-row md:px-20 py-8 md:py-12 bg-[#f8f9fb]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <div className="flex items-center gap-3 mb-4">
          {" "}
          {/* Removed flex-col sm:flex-row */}
          <button className="bg-[#F13A40] text-white px-4 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap">
            Admission Open 2025
          </button>
          <span className="text-gray-700 text-sm cursor-pointer">
            Pay Online
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#2733C6] mb-4 md:mb-6">
          Arya College
        </h1>

        <p className="text-[#293744] text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
          Arya College, Jaipur – NAAC A+ Accredited and renowned as the best
          engineering college in Jaipur, offering world-class education,
          cutting-edge facilities, and unmatched career opportunities in
          technology and innovation.
        </p>

        <div className="flex gap-3">
          <button className="bg-[#2733C6] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg">
            Brochure
            <img
              src={brochureIcon}
              alt="Brochure Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>

          <button className="border border-[#2733C6] text-[#2733C6] px-4 sm:px-6 py-2 sm:py-3 rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg">
            Apply Now
          </button>
        </div>
      </div>

      {/* Right Video */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <div className="rounded-xl md:rounded-[30px] overflow-hidden w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/p2hqg0LtVN4?si=xswjgeaJFITePMyK&autoplay=1&mute=1&controls=0&loop=1&playlist=p2hqg0LtVN4"
            title="Arya College Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 md:mt-4 text-[#1F2B3D]">
          <p className="text-xs sm:text-sm">360° Virtual Tour</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

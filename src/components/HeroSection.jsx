import React from "react";
import brochureIcon from "../assets/brochure-icon.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[#f8f9fb]">
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="flex items-center gap-4 mb-4">
          <button className="bg-[#F13A40] text-white px-4 py-2 rounded-md text-sm  cursor-pointer ">
            Admission Open 2025
          </button>
          <span className="text-gray-700 text-sm  cursor-pointer">
            Pay Online
          </span>
        </div>

        <h1 className="text-[40px] font-bold text-[#2733C6] mb-6 ">
          Arya College
        </h1>

        <p className="text-[#293744] text-base leading-relaxed mb-8 ">
          Arya College, Jaipur – NAAC A+ Accredited and renowned as the best
          engineering college in Jaipur, offering world-class education,
          cutting-edge facilities, and unmatched career opportunities in
          technology and innovation.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#2733C6] text-white px-6 py-3 rounded-md flex items-center gap-2  cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95 hover:shadow-lg">
            Brochure
            <img src={brochureIcon} alt="Brochure Icon" className="w-5 h-5" />
          </button>

          <button className="border border-[#2733C6] text-[#2733C6] px-6 py-3 rounded-md  cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95 hover:shadow-lg">
            Apply Now
          </button>
        </div>
      </div>

      {/* Right Video */}
      <div className="md:w-1/2 relative">
        <div className="rounded-[30px] overflow-hidden w-full aspect-video ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/p2hqg0LtVN4?si=xswjgeaJFITePMyK&autoplay=1&mute=1&controls=0&loop=1&playlist=p2hqg0LtVN4"
            title="Arya College Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-[#1F2B3D] ">
          <p className="text-sm">360° Virtual Tour</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

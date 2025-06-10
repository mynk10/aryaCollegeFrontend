import React from "react";
import heroImage from "../assets/heroImage.png"; // replace with your actual image path

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[#f8f9fb]">
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="flex items-center gap-4 mb-4">
          <button className="bg-[#F13A40] text-white px-4 py-2 rounded-md text-sm">
            Admission Open 2023
          </button>
          <span className="text-gray-700 text-sm">Pay Online</span>
        </div>

        <h1 className="text-[40px] font-bold text-[#2733C6] mb-6 poppins-font">
          Arya College
        </h1>

        <p className="text-[#293744] text-base leading-relaxed mb-8 poppins-font">
          We don’t just teach students, but we train them to be successful
          professionals. We motivate and orient our students and to take on the
          corporate world.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#2733C6] text-white px-6 py-3 rounded-md flex items-center gap-2 poppins-font">
            Brochure <span>⚡</span>
          </button>
          <button className="border border-[#2733C6] text-[#2733C6] px-6 py-3 rounded-md poppins-font">
            Read More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative">
        <img
          src={heroImage}
          alt="Arya College Campus"
          className="rounded-[80px] w-full object-cover"
        />
        <div className="flex items-center justify-center gap-2 mt-4 text-[#1F2B3D] poppins-font">
          <span className="text-2xl">🎥</span>
          <p className="text-sm">360° Virtual Tour</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

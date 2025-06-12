import React from "react";
import logo from "../assets/arya-logo-1.png";
import { industrialAllianceCards } from "../utils/constants";

const IndustrialAllianceSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-16 py-8 sm:py-12 bg-white font-sans">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2025A0] mb-3 sm:mb-4">
          Industrial Alliance
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-sm sm:text-base md:text-lg">
          Arya College Jaipur has a definite purpose and represents inter-firm
          cooperative agreements aiming to achieve a competitive advantage for
          the partners. Arya College Jaipur also highlights the primary
          advantage for the academic community, industry, research funding, and
          practical learning opportunities for students.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {industrialAllianceCards.map((text, i) => (
          <div
            key={i}
            className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md transition-all duration-300 bg-white text-gray-800 hover:bg-gradient-to-r hover:from-[#A9203E] hover:to-[#2548B0] hover:text-white"
          >
            <img
              src={logo}
              alt="Arya College Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrialAllianceSection;

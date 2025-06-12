import React from "react";
import { Download } from "lucide-react";
import { recruitmentData } from "../utils/constants";

const RecruitmentSection = () => {
  return (
    <section className="w-full bg-[url('/grid-bg.png')] bg-repeat p-6 sm:p-10 text-center font-sans">
      <h2 className="text-[22px] md:text-[32px] font-bold text-[#2025A0] mb-6 sm:mb-8">
        Recruitment In Arya College
      </h2>

      {/* Buttons - Scrollable on mobile */}
      <div className="flex overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-hidden sm:justify-center sm:flex-wrap gap-3 sm:gap-4">
        {[
          "Highest Package",
          "Top Recruiters",
          "Award & Achievement",
          "Student Placed",
        ].map((tab, index) => (
          <button
            key={index}
            className={`
              px-4 sm:px-5 py-2 rounded-md font-medium border border-[#2025A0] text-[#2025A0] bg-white 
              transition-all duration-200 whitespace-nowrap flex-shrink-0
              hover:bg-[#2025A0] hover:text-white
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Placement Cards - Horizontal scroll on mobile */}
      <div className="relative">
        <div className="overflow-x-auto pb-6 scrollbar-hidden">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-max sm:w-full">
            {recruitmentData.map(({ year, offers, image }) => (
              <div
                key={year}
                className="w-64 sm:w-full flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-transparent bg-white transition-all duration-300 hover:border-[#EB3237]"
              >
                <img
                  src={image}
                  alt={`${year} Placements`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-800">
                    {year} Placements
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {offers} Placement Offers
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-800 hover:bg-[#EB3237] hover:text-white transition-colors duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Download PDF</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;

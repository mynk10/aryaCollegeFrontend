import React from "react";
import { Download } from "lucide-react";
import { recruitmentData } from "../utils/constants";

const RecruitmentSection = () => {
  return (
    <section className="w-full bg-[url('/grid-bg.png')] bg-repeat p-10 text-center font-sans">
      <h2 className="text-[24px] md:text-[32px] font-bold text-[#2025A0] mb-8">
        Recruitment In Arya College
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          "Highest Package",
          "Top Recruiters",
          "Award & Achievement",
          "Student Placed",
        ].map((tab, index) => (
          <button
            key={index}
            className={`
                px-5 py-2 rounded-md font-medium border border-[#2025A0] text-[#2025A0] bg-white 
                transition-all duration-200 
                hover:bg-[#2025A0] hover:text-white
              `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Placement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {recruitmentData.map(({ year, offers, image }) => (
          <div
            key={year}
            className="w-full max-w-sm rounded-xl overflow-hidden shadow-md border border-transparent bg-white transition-all duration-300 hover:border-[#EB3237]"
          >
            <img
              src={image}
              alt={`${year} Placements`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-bold mb-1 text-gray-800">
                {year} Placements
              </h3>
              <p className="text-gray-600">{offers} Placement Offers</p>
            </div>
            <div className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-800 hover:bg-[#EB3237] hover:text-white transition-colors duration-300">
              <Download className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Download PDF</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentSection;

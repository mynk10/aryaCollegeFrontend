import React from "react";
import { studentsLifeImages } from "../utils/constants";

const AwardsAndRecognition = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          Awards & Recognition Received By Arya College
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Arya College Jaipur has a definite purpose and represents inter-firm
          cooperative agreements aiming to achieve a competitive advantage for
          the partners.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <button className="w-full sm:w-auto border border-blue-700 text-blue-700 px-6 py-2 rounded-md cursor-pointer hover:bg-blue-100 transition-transform duration-300 hover:scale-105">
            Awards
          </button>
          <button className="w-full sm:w-auto bg-blue-700 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-blue-800 transition-transform duration-300 hover:scale-105">
            Students Life
          </button>
        </div>

        {/* 2x4 grid on mobile, expand to more cols on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {studentsLifeImages.slice(0, 8).map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognition;

import React from "react";
import { studentsLifeImages } from "../utils/constants";

const AwardsAndRecognition = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          Awards & Recognition Received By Arya College
        </h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          ARYA provide Excellent Infrastructure & propitious Academics for
          Professional & Technical Growth of all the Students and Faculty
          Members.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-100 transition transform duration-300 hover:scale-110">
            Awards
          </button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition transform duration-300 hover:scale-110">
            Students Life
          </button>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {studentsLifeImages.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognition;

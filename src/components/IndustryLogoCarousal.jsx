import React from "react";

const logos = [
  "/images/industryLogos/amcat.png",
  "/images/industryLogos/bsdu.png",
  "/images/industryLogos/cadc.png",
  "/images/industryLogos/coCubes.png",
  "/images/industryLogos/tcs.png",
  "/images/industryLogos/consultadd.png",
  "/images/industryLogos/wonderCement.png",
  // Add more logo paths as needed
];

const IndustryLogoCarousel = () => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Our Industry Collaborations
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {logos.map((src, idx) => (
          <div
            key={idx}
            className="w-[150px] h-[80px] flex items-center justify-center border border-gray-300 bg-gray-50 rounded-lg shadow-sm p-4 hover:scale-105 hover:border-red-500 transition-all duration-300"
          >
            <img
              src={src}
              alt={`Logo ${idx + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryLogoCarousel;

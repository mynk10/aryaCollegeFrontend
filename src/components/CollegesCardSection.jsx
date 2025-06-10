import React from "react";
import logo from "../assets/arya-logo-2.png";

const colleges = [
  {
    title: "AIETM",
    subtitle: "Arya Institute of Engg. Tech & Mgm",
    image: "/images/colleges/AIETM.png",
    reapCode: "10",
    description:
      "A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...",
  },
  {
    title: "AIET",
    subtitle: "Arya Institute of Engg. & Tech",
    image: "/images/colleges/AIET.png",
    reapCode: "10",
    description:
      "Another branch of Arya College is the Arya Institute of Engineering & Technology (A.I.E.T.), the foremost ...",
  },
  {
    title: "ACERC",
    subtitle: "Arya College of Engg. & Res Centre",
    image: "/images/colleges/ACERC.png",
    reapCode: "10",
    description:
      "The flagship of Arya college under the Arya group of colleges, the A.C.E.R.C., aims to prepare students for challenges through relevant training ...",
  },
  {
    title: "ACP",
    subtitle: "Arya College of Pharmacy",
    image: "/images/colleges/ACP.png",
    reapCode: "10",
    description:
      "Arya Group of Colleges also has a college for pharmacy, the Arya College of Pharmacy, established in 2004...",
  },
];

const CollegesCardSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2D2AAF]">
          Arya Group Of Colleges, Jaipur,
        </h2>
        <p className="text-gray-600 mt-2">The best under one roof</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {colleges.map((college, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-md overflow-hidden border border-gray-200 bg-white"
          >
            <div className="relative h-[180px]">
              <img
                src={college.image}
                alt={college.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md bg-red-500 text-white font-semibold shadow-sm">
                REAP Code: {college.reapCode}
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={logo}
                  alt="Arya Logo"
                  className="w-8 h-8 rounded-full object-contain"
                />
                <div>
                  <h3 className="text-md font-semibold text-[#2D2AAF]">
                    {college.title}
                  </h3>
                  <p className="text-sm text-gray-500">{college.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4">
                {college.description}
              </p>

              <div className="flex gap-2">
                <button className="px-4 py-1 text-sm border border-[#2D2AAF] text-[#2D2AAF] rounded-md hover:bg-[#2D2AAF] hover:text-white transition">
                  View More
                </button>
                <button className="px-4 py-1 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegesCardSection;

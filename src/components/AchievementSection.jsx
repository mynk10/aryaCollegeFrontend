import React from "react";
import logo from "../assets/arya-logo-1.png"; // Replace with your actual image path
import rtu from "../assets/rtu.png";
import naac from "../assets/naac.png";
import nba from "../assets/nba.png";


const achievements = [
  {
    icon: rtu,
    title: 'Ranked "A"',
    subtitle: "By RTU",
  },
  {
    icon: naac,
    title: "Naac",
    subtitle: "Accredited",
  },
  {
    icon: nba,
    title: "NBA Accredited",
    subtitle: "(CSE Branch)",
  },
  {
    icon: rtu,
    title: "RTU CoE In Air",
    subtitle: "(Robotics), PCB",
  },
  {
    icon: logo,
    title: "32 Awards",
    subtitle: "Won",
  },
];

const AchievementsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F3F3F3] px-4 md:px-12 py-8">
      {/* Left Card */}
      <div className="flex flex-col items-center justify-center bg-[#F13A40] px-6 py-6 rounded-lg text-white w-full md:w-[300px] mb-6 md:mb-0 md:mr-6">
        <img
          src={logo}
          alt="Arya Logo"
          className="w-20 h-20 mb-4 object-contain"
        />
        <h2 className="text-xl font-semibold text-center">
          22 Years
          <br />
          Of Success
        </h2>
      </div>

      {/* Right Cards */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-lg min-w-[220px]"
          >
            <img
              src={item.icon}
              alt="achievement"
              className="w-10 h-10 object-contain"
            />
            <div className="text-[#1F2B3D] font-semibold text-sm leading-tight">
              {item.title}
              <br />
              <span className="font-medium">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

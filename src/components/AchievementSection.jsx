import React from "react";
import logo from "../assets/arya-logo-1.png";
import { achievements } from "../utils/constants";

const AchievementSection = () => {
  return (
    <section className="bg-[#F3F3F3] w-full">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Red Card  */}
        <div className="bg-[#F13A40] px-4 py-5 text-white flex items-center gap-4 w-full md:w-[251px] max-w-[251px]">
          <img
            src={logo}
            alt="Arya Logo"
            className="w-14 h-14 object-contain"
          />
          <div className="text-base md:text-lg font-semibold leading-snug">
            22 Years <br /> Of Success
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="w-full overflow-x-auto py-5 px-4 md:overflow-visible ">
          <div className="flex gap-4 w-max md:w-full md:flex-wrap  md:justify-start">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 min-w-[190px] md:min-w-[200px] transform transition duration-300 hover:scale-105 hover:shadow-md"
              >
                <div className="text-[#1F2B3D] font-semibold text-sm leading-tight">
                  {item.title}
                  <br />
                  <span className="font-medium">{item.subtitle}</span>
                </div>
                <img
                  src={item.icon}
                  alt="achievement"
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;

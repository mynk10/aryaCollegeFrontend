import React from "react";
import campus from "../assets/campus.jpg";
import starIcon from "../assets/star-icon.png";

const MissionVisionSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-white text-[#1F2B3D] font-poppins">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-[28px] font-bold text-[#2C2E8A]">
          Arya College Jaipur
        </h2>
        <p className="mt-3 sm:mt-4 font-semibold max-w-[800px] mx-auto text-sm sm:text-[16px] text-black leading-6">
          Arya College is the Best Engineering College in the entire Rajasthan.
          We don't just teach students, but we train them to be successful
          professionals. We motivate and orient our students to take on the
          corporate world.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start">
        {/* Mission & Vision */}
        <div className="w-full lg:max-w-[50%] space-y-4 sm:space-y-6">
          {/* Mission */}
          <div className="flex flex-col sm:flex-row bg-[#F4F6F9] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#2C2E8A] text-white font-semibold text-sm sm:text-[16px] py-3 sm:py-0 sm:w-[80px] flex sm:flex-col items-center justify-center">
              <div className="sm:transform sm:-rotate-90 whitespace-nowrap px-4 sm:px-0">
                Our Mission
              </div>
            </div>
            <div className="p-4 text-sm sm:text-[14px] space-y-2 sm:space-y-3">
              <p>
                To Create a Progressive Academic Environment for the Students
              </p>
              <p>
                Help Students Achieve Qualities like Techno-Managerial Skills
                and become Innovative and Creative Professionals
              </p>
              <p>
                Develop Individuals who can Contribute in the Development and
                Progress of the Society, Nation & the World as a whole.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col sm:flex-row bg-[#F4F6F9] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#2C2E8A] text-white font-semibold text-sm sm:text-[16px] py-3 sm:py-0 sm:w-[80px] flex sm:flex-col items-center justify-center">
              <div className="sm:transform sm:-rotate-90 whitespace-nowrap px-4 sm:px-0">
                Our Vision
              </div>
            </div>
            <div className="p-4 text-sm sm:text-[14px] space-y-2 sm:space-y-3">
              <p>To Emerge as the Best Educational Institute</p>
              <p>
                Work for Excellence in Imparting Quality Education to the
                Students
              </p>
              <p>
                Nurture various Talents as Innovative Professionals in Technical
                & Managerial field thereby making them Competitive to meet all
                the Future Challenges of Global Economy.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-[50%] lg:max-w-[600px] mt-4 sm:mt-0">
          <img
            src={campus}
            alt="Arya College Campus"
            className="w-full h-auto rounded-xl sm:rounded-[20px] shadow-md"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 max-w-[90%] sm:max-w-none">
            <div className="text-xs sm:text-sm font-semibold text-[#1F2B3D]">
              15500+
              <br />
              <span className="font-medium text-black">Students Placed</span>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt="star"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="bg-[#F13A40] text-white px-3 py-1 rounded text-xs sm:text-sm">
                Admission Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

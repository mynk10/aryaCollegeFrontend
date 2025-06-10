import React from "react";
import campus from "../assets/campus.jpg"; // Replace with actual path
// import admissionIcon from "../assets/admission-icon.png"; // Optional: Icon used in red button
// import clickIcon from "../assets/click-icon.png"; // Replace with actual icon (like hand click)
import starIcon from "../assets/star-icon.png";

const MissionVisionSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-white text-[#1F2B3D] font-poppins">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] font-bold text-[#2C2E8A]">
          Arya College Jaipur
        </h2>
        <p className="mt-4 font-semibold max-w-[800px] mx-auto text-[16px] text-black leading-6">
          Arya College is the Best Engineering College in the entire Rajasthan.
          We don’t just teach students, but we train them to be successful
          professionals. We motivate and orient our students and to take on the
          corporate world.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
        {/* Mission & Vision */}
        <div className="flex flex-col gap-6 max-w-[50%]">
          {/* Mission */}
          <div className="flex bg-[#F4F6F9] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#2C2E8A] text-white font-semibold text-[16px] rotate-0 flex items-center justify-center w-[80px]">
              <div className="transform -rotate-90 whitespace-nowrap">
                Our Mission
              </div>
            </div>
            <div className="p-4 text-[14px]">
              <p>
                To Create a Progressive Academic Environment for the Students
              </p>
              <p className="mt-2">
                Help Students Achieve Qualities like Techno-Managerial Skills
                and become Innovative and Creative Professionals
              </p>
              <p className="mt-2">
                Develop Individuals who can Contribute in the Development and
                Progress of the Society, Nation & the World as a whole.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex bg-[#F4F6F9] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#2C2E8A] text-white font-semibold text-[16px] rotate-0 flex items-center justify-center w-[80px]">
              <div className="transform -rotate-90 whitespace-nowrap">
                Our Vision
              </div>
            </div>
            <div className="p-4 text-[14px]">
              <p>To Emerge as the Best Educational Institute</p>
              <p className="mt-2">
                Work for Excellence in Imparting Quality Education to the
                Students
              </p>
              <p className="mt-2">
                Nurture various Talents as Innovative Professionals in Technical
                & Managerial field thereby making them Competitive to meet all
                the Future Challenges of Global Economy.
              </p>
            </div>
          </div>
        </div>

        {/* Image with Callout */}
        <div className="relative w-full lg:w-[600px]">
          <img
            src={campus}
            alt="Arya College Campus"
            className="w-full h-auto rounded-[20px] shadow-md"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl  shadow-sm flex items-start gap-3">
            <div className="text-sm font-semibold text-[#1F2B3D]">
              15500+
              <br />
              <span className="font-medium text-black">Students Placed</span>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="bg-[#F13A40] text-white px-2 py-1 rounded text-xs">
                Admission Open
              </span>
              {/* <img src={clickIcon} alt="Click" className="w-5 h-5" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

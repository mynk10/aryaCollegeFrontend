import React from "react";
import { GraduationCap, Award, Hospital, FileText } from "lucide-react";

const AcademicsSection = () => {
  const cardBaseStyle =
    "rounded-xl px-4 sm:px-6 py-5 sm:py-7 relative overflow-hidden transition-all duration-300 cursor-pointer border border-white";

  const iconWrapperStyle =
    "p-2 rounded-full mb-3 sm:mb-4 w-fit bg-[#EB3237] text-white";

  // Desktop hover effects (only on desktop)
  const desktopHoverStyle =
    "sm:hover:scale-105 sm:hover:bg-gradient-to-br sm:hover:from-[#0044DE] sm:hover:to-[#C61A2D] sm:hover:text-white sm:hover:shadow-md sm:hover:shadow-black sm:hover:border-transparent";

  // Mobile active effects (works on both mobile and desktop)
  const activeStyle =
    "active:scale-105 active:bg-gradient-to-br active:from-[#0044DE] active:to-[#C61A2D] active:text-white active:shadow-md active:shadow-black active:border-transparent";

  return (
    <section className="w-full bg-gradient-to-br from-[#C61A2D] via-[#592D90] to-[#0044DE] p-5 sm:p-10 text-white grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 font-sans">
      {/* Left Content */}
      <div className="flex flex-col justify-center max-w-xl">
        <span className="bg-[#EB3237] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1 rounded-md mb-3 sm:mb-4 w-fit">
          Academics
        </span>
        <h2 className="text-xl sm:text-[28px] font-bold text-white leading-tight mb-3 sm:mb-4">
          Successfully Complete Your <br />
          Degree At Arya College
        </h2>
        <p className="text-white text-sm sm:text-[17px] leading-relaxed">
          Arya College is the Best Engineering College in the entire Rajasthan.
          We don't just teach students, but we train them to be successful
          professionals. We motivate and orient our students to take on the
          corporate world.
        </p>
      </div>

      {/* Right 2x2 Cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {/* Card 1 */}
        <div className={`${cardBaseStyle} ${desktopHoverStyle} ${activeStyle}`}>
          <div className={iconWrapperStyle}>
            <GraduationCap size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-sm sm:text-lg leading-tight">
            Under
            <br />
            Graduation
          </h3>
        </div>

        {/* Card 2 */}
        <div className={`${cardBaseStyle} ${desktopHoverStyle} ${activeStyle}`}>
          <div className={iconWrapperStyle}>
            <Award size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-sm sm:text-lg leading-tight">
            Post
            <br />
            Graduation
          </h3>
        </div>

        {/* Card 3 */}
        <div className={`${cardBaseStyle} ${desktopHoverStyle} ${activeStyle}`}>
          <div className={iconWrapperStyle}>
            <Hospital size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-sm sm:text-lg leading-tight">
            Pharma
            <br />
            and Medical
          </h3>
        </div>

        {/* Card 4 */}
        <div className={`${cardBaseStyle} ${desktopHoverStyle} ${activeStyle}`}>
          <div className={iconWrapperStyle}>
            <FileText size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="font-semibold text-sm sm:text-lg leading-tight">
            Online Admission
            <br />
            Procedure
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;

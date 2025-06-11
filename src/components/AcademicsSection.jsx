import React from "react";
import { GraduationCap, Award, Hospital, FileText } from "lucide-react";

const AcademicsSection = () => {
  
  const cardBaseStyle =
    "rounded-xl px-6 py-7 relative overflow-hidden transition-all duration-300 cursor-pointer border border-white";

  const iconWrapperStyle =
    "p-2 rounded-full mb-4 w-fit transition-colors duration-300";

  const cardHoverStyle =
    "hover:scale-105 hover:bg-gradient-to-br hover:from-[#0044DE] hover:to-[#C61A2D] hover:text-white hover:shadow-md hover:shadow-black hover:border-transparent";

  const iconHoverStyle = "hover:bg-white hover:text-[#EB3237]";

  return (
    <section className="w-full bg-gradient-to-br from-[#C61A2D] via-[#592D90] to-[#0044DE] p-10 text-white grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
      
      {/* Left Content */}
      <div className="flex flex-col justify-center max-w-xl">
        <span className="bg-[#EB3237] text-white text-sm font-semibold px-5 py-1 rounded-md mb-4 w-fit">
          Academics
        </span>
        <h2 className="text-[28px] font-bold text-white leading-tight mb-4">
          Successfully Complete Your <br />
          Degree At Arya College
        </h2>
        <p className="text-white text-[17px] leading-relaxed">
          Arya College is the Best Engineering College in the entire Rajasthan.
          We don’t just teach students, but we train them to be successful
          professionals. We motivate and orient our students and to take on the
          corporate world.
        </p>
      </div>

      {/* Right 2x2 Cards */}
      <div className="grid grid-cols-2 gap-5">
        
        {/* Card 1 */}
        <div className={`${cardBaseStyle} ${cardHoverStyle}`}>
          <div
            className={`${iconWrapperStyle} bg-[#EB3237] text-white ${iconHoverStyle}`}
          >
            <GraduationCap size={20} />
          </div>
          <h3 className="font-semibold text-lg leading-tight">
            Under
            <br />
            Graduation
          </h3>
        </div>

        {/* Card 2 */}
        <div className={`${cardBaseStyle} ${cardHoverStyle}`}>
          <div
            className={`${iconWrapperStyle} bg-[#EB3237] text-white ${iconHoverStyle}`}
          >
            <Award size={20} />
          </div>
          <h3 className="font-semibold text-lg leading-tight">
            Post
            <br />
            Graduation
          </h3>
        </div>

        {/* Card 3 */}
        <div className={`${cardBaseStyle} ${cardHoverStyle}`}>
          <div
            className={`${iconWrapperStyle} bg-[#EB3237] text-white ${iconHoverStyle}`}
          >
            <Hospital size={20} />
          </div>
          <h3 className="font-semibold text-lg leading-tight">
            Pharma
            <br />
            and Medical
          </h3>
        </div>

        {/* Card 4 */}
        <div className={`${cardBaseStyle} ${cardHoverStyle}`}>
          <div
            className={`${iconWrapperStyle} bg-[#EB3237] text-white ${iconHoverStyle}`}
          >
            <FileText size={20} />
          </div>
          <h3 className="font-semibold text-lg leading-tight">
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

import React from "react";
import { Mail, Phone } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="bg-[#F13A40] text-white text-sm py-2 px-4 flex justify-center sm:justify-end items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm">1800-102-1044</span>
      </div>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm">admission@aryacollege.org</span>
      </div>
    </div>
  );
};

export default TopContactBar;

import React from "react";
import { Mail, Phone } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="bg-[#F13A40] text-white text-sm py-2 px-4 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6 text-center">
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <span>1800-102-1044</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <span>admission@aryacollege.org</span>
      </div>
    </div>
  );
};

export default TopContactBar;

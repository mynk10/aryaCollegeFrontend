import { Mail, Phone } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="bg-[#F13A40] text-white text-sm py-2 px-4 flex justify-end items-center gap-6">
      <div className="flex items-center gap-1">
        <Phone className="w-4 h-4" />
        <span>1800-102-1044</span>
      </div>
      <div className="flex items-center gap-1">
        <Mail className="w-4 h-4" />
        <span>admission@aryacollege.org</span>
      </div>
    </div>
  );
};

export default TopContactBar;

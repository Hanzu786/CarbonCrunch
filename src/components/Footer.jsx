import React from "react";
import img from "../Assets/Footer.png";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-100 to-white flex flex-col justify-center items-center overflow-hidden">
      <div className="w-[1239px] h-96 flex flex-col justify-center items-center text-center">
        {/* Heading & Subtext */}
        <div className="max-w-[808px] space-y-5">
          <h2 className="text-gray-900 text-3xl font-bold font-['Aeonik_TRIAL'] leading-10">
            Ready to take meaningful action on your ESG journey?
          </h2>
          <p className="text-gray-700 text-base font-normal font-['DM_Sans'] leading-normal">
            Drive impact with accurate carbon accounting, reduction strategies, and transparent reporting.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <button className="w-32 px-5 py-2.5 bg-emerald-100 text-lime-600 rounded-md text-base font-bold font-['DM_Sans'] tracking-tight">
            Login
          </button>
          <button className="px-5 py-2.5 bg-lime-600 text-black rounded-md text-base font-bold font-['DM_Sans'] tracking-tight">
            Book Demo
          </button>
        </div>
      </div>

      <div className="w-[1440px] h-[486px] pt-[4px] pr-[2px] pb-[43px] pl-[8px]">
        <img
          src={img}
          className="w-full h-full object-contain drop-shadow-2xl"
          alt="Footer illustration"
        />
      </div>
    </div>
  );
};

export default Footer;


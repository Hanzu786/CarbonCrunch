// export default function CarboncrunchPage() {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="max-w-2xl w-full px-4 py-8">
//           {/* Main Title */}
//           <h1 className="text-[#2F4F4F] text-3xl md:text-4xl font-semibold text-center mb-4">
//             Why Carboncrunch
//           </h1>
          
//           {/* Subtitle */}
//           <h2 className="text-[#228B22] text-xl md:text-2xl font-medium text-center mb-8 md:mb-12">
//             Leading Sustainability with Carboncrunch
//           </h2>
  



//           {/* Content Sections */}
//           <Section
//             title="GHG (Greenhouse Gas) Accounting"
//             content="A framework used to measure and report greenhouse gas emissions."
//           />
          
//           <Section
//             title="Regulatory Compliance and Reporting"
//             content="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
//           />
          
//           <Section
//             title="Meeting Sustainability Goals and Net-Zero Targets"
//             content="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
//           />
          
//           <Section
//             title="Cost Savings and Operational Efficiency"
//             content="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements"
//           />
//         </div>
//       </div>
//     );
//   }
  
//   function Section({ title, content }: { title: string; content: string }) {
//     return (
//       <div className="mb-6">
//         {/* Section Title */}
//         <div className="text-[#228B22] text-lg md:text-xl font-semibold mb-3">
//           {title}
//         </div>
        
//         {/* Content List */}
//         <ul className="list-none pl-0">
//           <li className="relative pl-7 text-[#2F4F4F] leading-relaxed 
//                         before:content-['✓'] before:absolute before:left-0 
//                         before:text-[#228B22] before:font-bold">
//             {content}
//           </li>
//         </ul>
//       </div>
//     );
//   }

import React from "react";
import img from "../Assets/section2.png";

const Section2 = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-[1130px] inline-flex flex-col justify-start items-center gap-[25px]">
            <div className="w-[216px] px-[35px] py-2.5 bg-white rounded-[23px] inline-flex justify-center items-center gap-2.5">
              <div className="relative text-center text-[#239c0c] text-xl font-bold font-['DM_Sans']">
                How It works?
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch relative text-center text-[#2c2c2c] text-5xl font-bold font-['Aeonik_TRIAL']">
                Getting Started is easy
              </div>
              <div className="w-[718px] relative text-center text-[#2c2c2c] text-2xl font-semibold font-['DM_Sans']">
                How carboncrunch SAAS works
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-[1283px] p-6 bg-white rounded-2xl inline-flex justify-start items-center gap-7">
            {/* Step 1 */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="w-[165px] h-0 relative ring ring-[#28b30e]"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="relative text-[#28b30e] text-base font-black font-['Nunito_Sans']">
                    01
                  </div>
                  <div className="relative text-[#28b30e] text-base font-bold font-['Aeonik_TRIAL'] tracking-tight">
                    Track and manage your Net Zero Pathway
                  </div>
                </div>
                <div className="self-stretch relative text-black text-base font-normal font-['DM_Sans']">
                  Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="self-stretch h-0.5 relative opacity-0 ring ring-[#afafaf]"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="relative text-[#2c2c2c] text-base font-black font-['Nunito_Sans']">
                    02
                  </div>
                  <div className="relative text-[#2c2c2c] text-base font-bold font-['Aeonik_TRIAL'] tracking-tight">
                    Track and manage your Net Zero Pathway
                  </div>
                </div>
                <div className="self-stretch relative text-black text-base font-normal font-['DM_Sans']">
                  Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics.
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 inline-flex flex-col justify-start items-center gap-2">
              <div className="self-stretch h-0.5 relative opacity-0 ring ring-[#afafaf]"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="relative text-[#2c2c2c] text-base font-black font-['Nunito_Sans']">
                    03
                  </div>
                  <div className="relative text-[#2c2c2c] text-base font-bold font-['Aeonik_TRIAL'] tracking-tight">
                    Track and manage your Net Zero Pathway
                  </div>
                </div>
                <div className="self-stretch relative text-black text-base font-normal font-['DM_Sans']">
                  Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyse the year-on-year progress against the targets and gain valuable analytics.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full flex justify-center">
        <div className="w-[1003px] h-[499.10px] bg-gradient-to-b from-lime-600 to-lime-600/0 relative flex justify-center items-center overflow-hidden mx-auto">
          <div className="absolute inset-0 flex justify-center items-center">
            <img 
              src={img} 
              alt="How it works" 
              className=" h-[506.31px] object-contain transform translate-y-[-2%]" 
            />
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Section2;




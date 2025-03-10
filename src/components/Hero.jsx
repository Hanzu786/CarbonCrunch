// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// import React from "react";
// import heroImage from "../Assets/earth.png"; // Place the actual image file in /assets

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-white">
//       {/* Background Image */}
//       <img
//         src="/background.png"
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
//       />

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-start max-w-screen-xl mx-auto pt-20 px-6 md:px-12 lg:px-24">
//         <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight">
//           GHG Accounting <br />
//           Scope 1, Scope 2, <br />
//           Scope 3
//         </h1>
//         <p className="text-lg text-gray-600 mt-4 max-w-2xl">
//           Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
//         </p>
//       </div>

//       {/* Hero Image */}
//       <img
//         src="../Assets/earth.png"
//         alt="GHG Illustration"
//         className="absolute right-10 bottom-0 w-96 md:w-[400px] lg:w-[500px]"
//       />
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import img from "../Assets/earth.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="w-[762px] inline-flex flex-col justify-start items-start gap-[27px]">
          <div className="self-stretch relative justify-start text-[#2c2c2c] text-[81px] font-bold font-['Aeonik_TRIAL']">
            GHG Accounting <br/>
            Scope 1, Scope 2, Scope 3
          </div>
          <div className="self-stretch relative justify-start text-[#2c2c2c] text-2xl font-medium font-['DM_Sans']">
            Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[450px]">
          <img
            src={img}
            alt="Earth in glass dome with industrial emissions"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
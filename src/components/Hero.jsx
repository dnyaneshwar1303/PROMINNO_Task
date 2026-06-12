import React from 'react';

function HeroSection() {
  return (
      <section className="w-full lg:w-[1440px] lg:h-[628px] bg-[#F4F4F4] font-sans mx-auto">
      
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Content Side */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:pl-[140px] lg:pr-12 lg:py-0">
          <h1 className="font-semibold text-[36px] sm:text-[42px] lg:text-[50px] leading-[140%] text-[#262626] mb-6 tracking-tight max-w-md transition-all duration-500 ease-in-out hover:translate-x-2">
            Great design is invisible
          </h1>

          <p className="text-[#262626] text-[18px] sm:text-[20px] leading-relaxed max-w-sm mb-10 transition-all duration-500 ease-in-out hover:text-black">
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <div>
            <button className="bg-black text-white w-[162px] h-[60px] font-semibold text-base hover:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95">
              Button
            </button>
          </div>
        </div>

        {/* Right Side Box */}
        <div className="bg-[#C8C8C8] relative h-[300px] sm:h-[400px] lg:h-full flex items-center justify-center overflow-hidden select-none group transition-all duration-500 ease-in-out hover:bg-[#d1d1d1]">
          <svg
            className="absolute inset-0 w-full h-full text-[#858585] opacity-40 transition-all duration-700 ease-in-out group-hover:opacity-60 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#858585" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#858585" strokeWidth="1" />
          </svg>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
import React from 'react';

function OurPartners() {
  return (
    <section className="w-full lg:w-[1440px] lg:h-[441px] bg-white border-b border-gray-100 mx-auto flex flex-col justify-center items-center font-sans py-12 lg:py-0">
      
      <h3 className="font-poppins font-semibold text-[28px] sm:text-[32px] text-[#262626] mb-10 lg:mb-12 tracking-tight text-center transition-all duration-500 ease-in-out hover:-translate-y-1">
        Our Partners
      </h3>
      
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-16 max-w-[1160px] w-full px-4">
        
        <div className="flex items-center justify-center w-[120px] sm:w-[140px] lg:w-[155px] transition-all duration-300 ease-in-out hover:scale-110">
          <img
            className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:opacity-80"
            src="/logoipsum.png"
            alt="partner logo"
          />
        </div>

        <div className="flex items-center justify-center w-[120px] sm:w-[140px] lg:w-[155px] transition-all duration-300 ease-in-out hover:scale-110">
          <img
            className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:opacity-80"
            src="/logoipsum.png"
            alt="partner logo"
          />
        </div>

        <div className="flex items-center justify-center w-[120px] sm:w-[140px] lg:w-[155px] transition-all duration-300 ease-in-out hover:scale-110">
          <img
            className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:opacity-80"
            src="/logoipsum.png"
            alt="partner logo"
          />
        </div>

        <div className="flex items-center justify-center w-[120px] sm:w-[140px] lg:w-[155px] transition-all duration-300 ease-in-out hover:scale-110">
          <img
            className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:opacity-80"
            src="/logoipsum.png"
            alt="partner logo"
          />
        </div>

      </div>
    </section>
  );
}

export default OurPartners;
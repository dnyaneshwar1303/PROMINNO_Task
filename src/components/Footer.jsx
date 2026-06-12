import React from 'react';

function Footer() {
  return (
    <footer className="w-full lg:w-[1414px] lg:h-[912px] lg:w-[1414px] lg:h-[354px] bg-white font-sans text-[14px]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        <div className="w-full bg-[#262626] text-[#FFFFFF] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-10 lg:mb-16 transition-all duration-500 ease-in-out hover:shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ease-in-out hover:text-white">
              Need more information?
            </h3>
            <p className="text-[#CCCCCC] text-[13px] tracking-wide transition-all duration-300 ease-in-out hover:text-white">
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded font-medium text-sm whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95">
            Button
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start pb-10 lg:pb-16">
          
          <div className="space-y-4">
            <div className="w-[70px] h-[70px] transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3">
              <img src="/logo.png" alt="logo" />
            </div>
            <p className="text-[#808080] text-[13px] leading-[160%] transition-all duration-300 ease-in-out hover:text-[#606060]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia consequat
            </p>
          </div>

          <div>
            <h6 className="font-semibold text-[#262626] text-[15px] mb-4 transition-all duration-300 ease-in-out hover:text-black">Heading</h6>
            <ul className="space-y-2.5 text-[#808080] text-[13px]">
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-[#262626] text-[15px] mb-4 transition-all duration-300 ease-in-out hover:text-black">Heading</h6>
            <ul className="space-y-2.5 text-[#808080] text-[13px]">
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-[#262626] text-[15px] mb-4 transition-all duration-300 ease-in-out hover:text-black">Heading</h6>
            <ul className="space-y-2.5 text-[#808080] text-[13px]">
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
              <li><a href="#" className="hover:text-black transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Link here</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-[#262626] text-[15px] mb-4 transition-all duration-300 ease-in-out hover:text-black">Connect with us</h6>
            <div className="flex space-x-3">
              <div className="w-[32px] h-[32px] bg-[#E5E5E5] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 hover:shadow-md"></div>
              <div className="w-[32px] h-[32px] bg-[#E5E5E5] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 hover:shadow-md"></div>
              <div className="w-[32px] h-[32px] bg-[#E5E5E5] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 hover:shadow-md"></div>
              <div className="w-[32px] h-[32px] bg-[#E5E5E5] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 hover:shadow-md"></div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

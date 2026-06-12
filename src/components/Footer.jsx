import React from 'react';

function Footer() {
  return (
    <footer className="relative w-full max-w-[1440px] min-h-[354px] bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#312E81] font-sans text-[14px] overflow-hidden mx-auto">
      
      <div className="absolute top-10 left-10 w-56 h-56 bg-[#4F46E5] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#06B6D4] rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 py-12">
        
        <div className="w-full bg-white/10 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border border-white/10 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-indigo-300/20">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Need more information?
            </h3>
            <p className="text-[#CBD5E1] text-[14px] tracking-wide">
              Write your concern to us and our specialist will get back to you.
            </p>
          </div>

          <button className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white px-8 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95">
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start pb-8">
          
          <div className="space-y-4">
            <div className="w-[70px] h-[70px] bg-white rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-3">
              <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
            </div>

            <p className="text-[#CBD5E1] text-[13px] leading-[170%]">
              We create modern digital experiences that help brands grow faster and connect better with their audience.
            </p>
          </div>

          {["Company", "Services", "Resources"].map((heading, index) => (
            <div key={index}>
              <h6 className="font-semibold text-white text-[15px] mb-4">
                {heading}
              </h6>

              <ul className="space-y-2.5 text-[#CBD5E1] text-[13px]">
                <li><a href="#" className="hover:text-[#06B6D4] transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">About us</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Services</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Projects</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition-all duration-300 ease-in-out hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>
          ))}

          <div>
            <h6 className="font-semibold text-white text-[15px] mb-4">
              Connect with us
            </h6>

            <div className="flex space-x-3">
              {["f", "x", "in", "ig"].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-[36px] h-[36px] bg-white/10 border border-white/10 rounded-full cursor-pointer flex items-center justify-center text-white text-[12px] font-semibold transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#06B6D4] hover:scale-110 hover:shadow-lg"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#94A3B8] text-[13px]">
          <p>© 2026 All rights reserved.</p>
          <p>Designed with creativity and care.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
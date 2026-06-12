import React from 'react';

function HeroSection() {
  return (
    <section className="w-full max-w-[1440px] min-h-[628px] bg-gradient-to-br from-[#EEF2FF] via-white to-[#ECFEFF] font-sans mx-auto overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-stretch">

        {/* Left Content Side */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:pl-[140px] lg:pr-12 lg:py-0">

          <span className="w-fit mb-5 px-4 py-2 rounded-full bg-white/80 text-[#4F46E5] text-sm font-semibold shadow-sm border border-indigo-100">
            Creative Digital Agency
          </span>

          <h1 className="font-bold text-[36px] sm:text-[42px] lg:text-[58px] leading-[120%] text-[#111827] mb-6 tracking-tight max-w-xl transition-all duration-500 ease-in-out hover:translate-x-2">
            Transform Your Business With Modern Digital Solutions
          </h1>

          <p className="text-[#6B7280] text-[18px] sm:text-[20px] leading-relaxed max-w-md mb-10 transition-all duration-500 ease-in-out hover:text-[#374151]">
            We help brands build stunning digital experiences that drive growth, engagement, and long-term success.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white w-[162px] h-[60px] font-semibold text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200 active:scale-95">
              Get Started
            </button>

            <button className="hidden sm:block text-[#111827] font-semibold hover:text-[#4F46E5] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative h-[350px] sm:h-[500px] lg:h-full overflow-hidden">

          <div className="absolute top-10 right-10 w-40 h-40 bg-[#4F46E5] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#06B6D4] rounded-full blur-3xl opacity-20 animate-pulse"></div>

          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGzZ1XbKM8OziDk1Vwtq4vCH5l0putlBtgDxDP91yXJnT25ZK6G0sx-UDB7fJn1vUsHwwIGxeT0B3tzO0sdwdCtaJxeUWlY9qEkPHej1zAg62gZqvIbKvgbDD52xl6gKDdxH7dLHBx7uDmd=s1360-w1360-h1020-rw"
            alt="Business Team"
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl animate-bounce">
            <h4 className="text-[#111827] font-bold text-lg">12K+ Clients</h4>
            <p className="text-[#6B7280] text-sm">Trusted worldwide</p>
          </div>

          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl">
            <h4 className="text-[#111827] font-bold text-lg">55%</h4>
            <p className="text-[#6B7280] text-sm">Annual Growth</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
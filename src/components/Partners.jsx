import React from "react";

function OurPartners() {
  const logos = [
    "/logoipsum.png",
    "/logoipsum.png",
    "/logoipsum.png",
    "/logoipsum.png",
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[441px] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] border-b border-gray-100 mx-auto flex flex-col justify-center items-center font-sans py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-52 h-52 bg-[#4F46E5] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-[#06B6D4] opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-white border border-indigo-100 text-[#4F46E5] text-sm font-semibold shadow-sm mb-4">
          Trusted Worldwide
        </span>

        <h3 className="font-bold text-[30px] sm:text-[36px] text-[#111827] tracking-tight mb-4">
          Our Partners
        </h3>

        <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-[160%]">
          We proudly collaborate with innovative brands and businesses across
          different industries to deliver exceptional digital experiences.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-[1160px] w-full px-4">

        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="group bg-white/80 backdrop-blur-md border border-white shadow-lg rounded-2xl p-6 w-[150px] h-[100px] flex items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-100"
          >
            <img
              src={logo}
              alt="partner logo"
              className="max-w-full max-h-full object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        ))}

      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-8 text-center">
        <div>
          <h4 className="text-2xl font-bold text-[#4F46E5]">50+</h4>
          <p className="text-sm text-[#6B7280]">Global Partners</p>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-[#06B6D4]">12K+</h4>
          <p className="text-sm text-[#6B7280]">Happy Clients</p>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-[#4F46E5]">98%</h4>
          <p className="text-sm text-[#6B7280]">Success Rate</p>
        </div>
      </div>

    </section>
  );
}

export default OurPartners;
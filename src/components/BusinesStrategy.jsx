import React from "react";

function BusinessStrategy() {
  const stats = [
    { label: "Clients", value: "12K+" },
    { label: "Annual growth", value: "55%" },
    { label: "Projects", value: "5K+" },
    { label: "Positive ratings", value: "98%" },
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[1223px] py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF] border-b border-gray-100 font-sans overflow-hidden mx-auto">

      <div className="absolute top-20 left-10 w-64 h-64 bg-[#4F46E5] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#06B6D4] opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mt-[60px] max-w-[850px] mx-auto mb-10 lg:mb-12">

          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#111827] leading-[130%] mb-4 tracking-tight">
            Our business strategy has helped many businesses across the globe
          </h2>

          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-[160%] max-w-[720px] mx-auto">
            We create scalable digital strategies that help companies increase revenue, improve engagement and accelerate business growth.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-8 px-4 mb-10 lg:mb-16 rounded-3xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center relative md:border-r last:md:border-none border-gray-200 h-20"
            >
              <span className="text-[14px] font-medium text-[#6B7280] mb-2">
                {stat.label}
              </span>

              <span className="text-[24px] md:text-[28px] font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-[1160px] h-[320px] sm:h-[460px] lg:h-[645px] mx-auto overflow-hidden rounded-3xl shadow-2xl group">

          <img
            src="https://t3.ftcdn.net/jpg/04/78/80/14/360_F_478801437_L6euBIK8dEm10QpPjb6DuehtLSJRSnBg.jpg"
            alt="Business Dashboard"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
            <h4 className="text-[#111827] font-bold text-xl">12K+</h4>
            <p className="text-[#6B7280] text-sm">Happy Clients</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BusinessStrategy;
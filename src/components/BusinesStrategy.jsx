function BusinessStrategy() {
  const stats = [
    { label: "Clients", value: "12K" },
    { label: "Annual growth", value: "55%" },
    { label: "No of projects", value: "5k" },
    { label: "Positive ratings", value: "80%" },
  ];

  return (
    <section className="w-full lg:w-[1440px] lg:h-[1223px] py-12 sm:py-16 lg:py-20 bg-[#F8F8F8] border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mt-[60px] max-w-[850px] mx-auto mb-10 lg:mb-12">
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-[#262626] leading-[130%] mb-4 tracking-tight transition-all duration-500 ease-in-out hover:-translate-y-1">
            Our business strategy has helped many businesses across the globe
          </h2>

          <p className="text-[#606060] text-[15px] md:text-[16px] leading-[150%] max-w-[720px] mx-auto transition-all duration-500 ease-in-out hover:text-[#404040]">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-4 mb-10 lg:mb-16 rounded-md transition-all duration-500 ease-in-out hover:shadow-lg">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center text-center relative md:border-r last:md:border-none border-gray-300/70 h-16 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <span className="text-[14px] md:text-[15px] font-poppins font-semibold text-[#262626] mb-1 transition-all duration-300 ease-in-out hover:text-black">
                {stat.label}
              </span>

              <span className="text-[20px] md:text-[22px] font-bold text-[#606060] transition-all duration-300 ease-in-out hover:text-[#262626]">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1160px] mx-auto aspect-[1160/645] bg-[#D9D9D9] border border-[#858585] relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#d1d1d1] hover:shadow-xl">
          <div className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-700 ease-in-out hover:opacity-50">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[29deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[29deg]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BusinessStrategy;
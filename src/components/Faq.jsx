import { useState } from "react";

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "Lorem ipsum dolor sit amet consectetur", a: "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas." },
    { q: "Lorem ipsum dolor sit amet consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { q: "Lorem ipsum dolor sit amet consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  return (
    <section className="w-full lg:w-[1440px] lg:h-[586px] py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-gray-100 bg-[#F8F8F8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
        
        <div className="bg-[#D9D9D9] border border-[#858585] aspect-square w-full max-w-[320px] sm:max-w-[420px] mx-auto relative overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#d1d1d1] hover:shadow-xl">
          <div className="absolute inset-0 opacity-30 transition-all duration-700 ease-in-out hover:opacity-50">
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[45deg]"></div>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] sm:text-[28px] md:text-[34px] font-semibold text-[#262626] mb-8 transition-all duration-500 ease-in-out hover:-translate-y-1">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="bg-[#FFFFFF] p-5 transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1">
                  <button 
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)} 
                    className="w-full flex items-center justify-between text-left font-medium text-[15px] text-[#262626] transition-all duration-300 ease-in-out hover:text-black"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg font-bold ml-2 transition-all duration-300 ease-in-out">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-[14px] text-[#606060] leading-[150%] transition-all duration-300 ease-in-out">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
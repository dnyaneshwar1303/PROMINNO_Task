import { ArrowLeft, ArrowRight } from "lucide-react";

function HappyClients() {
  const testimonials = [
    {
      name: "Jacqueline Wright",
      role: "Customer",
      text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl."
    },
    {
      name: "Jacqueline Wright",
      role: "Customer",
      text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl."
    }
  ];

  return (
    <section className="w-full lg:w-[1440px] lg:h-[612px] py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#262626] mb-10 lg:mb-14 transition-all duration-500 ease-in-out hover:-translate-y-1">
          Our happy clients
        </h2>

        <div className="flex items-center justify-center max-w-5xl mx-auto space-x-0 md:space-x-4">
          
          {/* Left Arrow */}
          <button className="p-2.5 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 hidden md:block transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-95">
            <ArrowLeft className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F8F8F8] p-6 lg:p-8 text-left relative flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-[#606060] text-[14px] md:text-[15px] leading-[160%] mb-8 transition-all duration-300 ease-in-out hover:text-[#404040]">
                  {t.text}
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-gray-300 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
                    <img
                      src="/public/Wright.jpg"
                      alt="avatar"
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div>
                    <h5 className="font-semibold text-[15px] text-[#262626] transition-all duration-300 ease-in-out hover:text-black">
                      {t.name}
                    </h5>

                    <p className="text-xs text-[#808080] transition-all duration-300 ease-in-out hover:text-[#606060]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="p-2.5 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 hidden md:block transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md active:scale-95">
            <ArrowRight className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
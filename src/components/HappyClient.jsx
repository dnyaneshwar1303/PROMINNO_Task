import { ArrowLeft, ArrowRight, Star } from "lucide-react";

function HappyClients() {
  const testimonials = [
    {
      name: "Jacqueline Wright",
      role: "Customer",
      image: "/Wright.jpg",
      text: "The team delivered an amazing digital experience for our brand. Their design approach, communication and execution were truly professional."
    },
    {
      name: "Michael Anderson",
      role: "Business Owner",
      image: "/Wright.jpg",
      text: "Their strategy helped us improve customer engagement and grow faster. The final result looked modern, clean and highly conversion-focused."
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[612px] py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] border-b border-gray-100 overflow-hidden mx-auto">
      <div className="absolute top-16 left-10 w-56 h-56 bg-[#4F46E5] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-16 right-10 w-56 h-56 bg-[#06B6D4] rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-white border border-indigo-100 text-[#4F46E5] text-sm font-semibold shadow-sm mb-4">
          Testimonials
        </span>

        <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#111827] mb-4">
          Our happy clients
        </h2>

        <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-[160%] mb-10 lg:mb-14">
          See what our clients say about our creativity, strategy and digital solutions.
        </p>

        <div className="flex items-center justify-center max-w-5xl mx-auto space-x-0 md:space-x-4">

          <button className="p-3 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-md hidden md:block transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:text-[#4F46E5] active:scale-95">
            <ArrowLeft className="w-4 h-4 text-[#4F46E5]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-xl border border-white p-6 lg:p-8 text-left relative flex flex-col justify-between rounded-3xl shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-100"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#FACC15] text-[#FACC15]"
                    />
                  ))}
                </div>

                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[170%] mb-8">
                  “{t.text}”
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden ring-4 ring-indigo-100 transition-all duration-300 ease-in-out group-hover:scale-110">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h5 className="font-bold text-[16px] text-[#111827]">
                      {t.name}
                    </h5>

                    <p className="text-sm text-[#6B7280]">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 text-[60px] leading-none text-[#4F46E5]/10 font-serif">
                  ”
                </div>
              </div>
            ))}
          </div>

          <button className="p-3 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-md hidden md:block transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95">
            <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
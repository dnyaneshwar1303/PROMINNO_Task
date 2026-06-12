import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How long does a project usually take?",
      a: "Project timelines depend on complexity, but most websites and digital solutions are delivered within 2-6 weeks."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer maintenance, updates and technical support to ensure your business continues running smoothly."
    },
    {
      q: "Can you create custom solutions?",
      a: "Absolutely. We build tailored solutions based on your business goals, requirements and target audience."
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[650px] py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF] border-b border-gray-100 overflow-hidden">

      <div className="absolute top-10 left-10 w-52 h-52 bg-[#4F46E5] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#06B6D4] opacity-10 blur-3xl rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">

        <div className="relative">
          <div className="h-[300px] sm:h-[380px] lg:h-[460px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://staticlearn.shine.com/l/m/images/blog/mobile/roles_and_responsibilities_of_customer_support_executive.webp"
              alt="Customer Support"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-5 right-4 sm:-right-5 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl">
            <MessageCircle className="w-8 h-8 text-[#4F46E5] mb-2" />
            <h4 className="font-bold text-[#111827]">24/7 Support</h4>
            <p className="text-sm text-[#6B7280]">
              Always here to help
            </p>
          </div>
        </div>

        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-indigo-100 text-[#4F46E5] text-sm font-semibold shadow-sm mb-4">
            Support Center
          </span>

          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111827] mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-[#111827] text-[15px]">
                      {faq.q}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] flex items-center justify-center text-white flex-shrink-0 ml-3">
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-[#6B7280] text-[14px] leading-[170%]">
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
}

export default FAQSection;
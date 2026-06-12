import { CheckCircle2 } from 'lucide-react';

function WhyTrustUs() {
    const benefits = [
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
        "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed."
    ];

    return (
        // 912px
        <section className="w-full lg:w-[1440px] lg:h-[912px] bg-[#FFFFFF] py-12 sm:py-16 lg:py-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-gray-100">
            <div className="text-center mb-[130px] max-w-3xl mx-auto mb-10 lg:mb-16">
                <h2 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[140%] tracking-normal text-[#262626] mb-4 transition-all duration-500 ease-in-out hover:translate-y-[-4px]">
                    Why our clients trust us
                </h2>

                <p className="max-w-[720px] mx-auto text-[#808080] text-[15px] md:text-[16px] leading-[150%] transition-all duration-500 ease-in-out hover:text-[#606060]">
                    Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Ura posuere consequat velit vulputate faucibus pretium arcu
                </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
                
                <div className="flex justify-center items-center w-full">
                    <div className="relative w-full max-w-[320px] sm:max-w-[463px] h-[315px] sm:h-[452px]">
                        
                        <div className="absolute top-0 left-0 w-[58%] h-[50%] bg-[#D9D9D9] border border-[#858585] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#d1d1d1]">
                            <div className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-500 ease-in-out hover:opacity-50">
                                <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[40deg]"></div>
                                <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[40deg]"></div>
                            </div>
                        </div>

                        <div className="absolute top-[5%] right-0 w-[36%] h-[50%] bg-[#D9D9D9] border border-[#858585] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#d1d1d1]">
                            <div className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-500 ease-in-out hover:opacity-50">
                                <div className="absolute top-1/2 left-1/2 w-[160%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[55deg]"></div>
                                <div className="absolute top-1/2 left-1/2 w-[160%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[55deg]"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-[18%] w-[54%] h-[40%] bg-[#D9D9D9] border border-[#858585] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-[#d1d1d1]">
                            <div className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-500 ease-in-out hover:opacity-50">
                                <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg]"></div>
                                <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[35deg]"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-6 lg:pl-4">
                    <ul className="space-y-5">
                        {benefits.map((text, idx) => (
                            <li key={idx} className="flex items-start space-x-3 transition-all duration-300 ease-in-out hover:translate-x-2">
                                <CheckCircle2 className="w-[20px] h-[20px] text-[#606060] opacity-80 flex-shrink-0 mt-0.5 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-100" />
                                <span className="text-[#404040] font-normal text-[15px] md:text-[16px] leading-[140%] transition-all duration-300 ease-in-out hover:text-black">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="pt-2">
                        <button className="bg-[#1A1A1A] text-white px-10 py-3 rounded-none text-[15px] font-medium hover:bg-black transition-all duration-300 ease-in-out min-w-[120px] hover:scale-105 hover:shadow-xl active:scale-95">
                            Button
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyTrustUs;
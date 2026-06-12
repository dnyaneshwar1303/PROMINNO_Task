import { CheckCircle2 } from 'lucide-react';

function WhyTrustUs() {
    const benefits = [
        "Expert team with years of hands-on digital experience.",
        "Creative strategies focused on growth and customer engagement.",
        "Modern, responsive and conversion-focused design approach.",
        "Trusted by businesses for quality, speed and transparency."
    ];

    return (
        <section className="relative w-full max-w-[1440px] min-h-[912px] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] py-12 sm:py-16 lg:py-16 px-4 sm:px-6 mx-auto border-b border-gray-100 overflow-hidden">
            <div className="absolute top-20 left-10 w-52 h-52 bg-[#4F46E5] rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#06B6D4] rounded-full blur-3xl opacity-10 animate-pulse"></div>

            <div className="relative text-center max-w-3xl mx-auto mb-10 lg:mb-16">
                <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white text-[#4F46E5] text-sm font-semibold shadow-sm border border-indigo-100">
                    Why Choose Us
                </span>

                <h2 className="font-poppins font-bold text-[30px] sm:text-[36px] md:text-[44px] leading-[130%] tracking-normal text-[#111827] mb-4 transition-all duration-500 ease-in-out hover:translate-y-[-4px]">
                    Why our clients trust us
                </h2>

                <p className="max-w-[720px] mx-auto text-[#6B7280] text-[15px] md:text-[16px] leading-[160%] transition-all duration-500 ease-in-out hover:text-[#374151]">
                    We combine creativity, technology and strategy to build digital experiences that help businesses grow faster and connect better with customers.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">

                <div className="flex justify-center items-center w-full">
                    <div className="relative w-full max-w-[320px] sm:max-w-[463px] h-[315px] sm:h-[452px]">

                        <div className="absolute top-0 left-0 w-[58%] h-[50%] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-indigo-200">
                            <img
                                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHwAGmB6uGm1NQ9zrATOMsZfh9HjtRP0MCIDd-5rahPHdJctjTimAI_6G37qbw3n8WAn-9VGB2rfOqj3hWkgXtRNRDkUdDe0yez7VQFL338BqmrO_EHy2os-9wOUExjzAxgC88k71NXsiVB=s1360-w1360-h1020-rw"
                                alt="Team collaboration"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        <div className="absolute top-[5%] right-0 w-[36%] h-[50%] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-cyan-200">
                            <img
                                src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
                                alt="Business strategy"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                        </div>

                        <div className="absolute bottom-0 left-[18%] w-[54%] h-[40%] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-indigo-200">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OAwYXLmknYS1WzCndOd_RjvXoaG0X7xQzw&s"
                                alt="Creative workspace"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        <div className="absolute -bottom-5 -right-3 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-white">
                            <h4 className="text-[#111827] font-bold text-xl">98%</h4>
                            <p className="text-[#6B7280] text-sm">Client Satisfaction</p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-6 lg:pl-4">
                    <ul className="space-y-5">
                        {benefits.map((text, idx) => (
                            <li
                                key={idx}
                                className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:translate-x-2 hover:shadow-lg"
                            >
                                <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-[19px] h-[19px] text-white" />
                                </div>

                                <span className="text-[#374151] font-medium text-[15px] md:text-[16px] leading-[150%] transition-all duration-300 ease-in-out hover:text-[#111827]">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-2">
                        <button className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white px-10 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 ease-in-out min-w-[140px] hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200 active:scale-95">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyTrustUs;
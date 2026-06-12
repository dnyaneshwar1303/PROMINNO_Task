function LatestBlog() {
  const blogs = [
    {
      title: "Humans are much more smarter than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      title: "Humans are much more smarter than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    },
    {
      title: "Humans are much more smarter than AI",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
    }
  ];

  return (
    <section className="w-full lg:w-[1440px] lg:h-[773px] py-12 sm:py-16 lg:py-20 bg-[#F8F8F8] border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <h2 className="font-poppins font-semibold text-[28px] md:text-[36px] text-center text-[#262626] tracking-tight mb-10 lg:mb-14 transition-all duration-500 ease-in-out hover:-translate-y-1">
          Latest blog
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10 lg:mb-14">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              
              <div className="bg-[#C8C8C8] border border-[#858585] aspect-[380/240] w-full relative overflow-hidden mb-5 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:bg-[#bdbdbd]">
                <div className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-500 ease-in-out group-hover:opacity-50">
                  <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 rotate-[32deg]"></div>
                  <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-[#858585] transform -translate-x-1/2 -translate-y-1/2 -rotate-[32deg]"></div>
                </div>
              </div>

              <div className="flex flex-col flex-grow px-1">
                <h4 className="font-semibold text-[17px] md:text-[18px] text-[#262626] leading-[140%] mb-3 tracking-tight transition-all duration-300 ease-in-out group-hover:text-black">
                  {blog.title}
                </h4>
                
                <p className="text-[#606060] text-[14px] leading-[150%] mb-4 max-w-[340px] transition-all duration-300 ease-in-out group-hover:text-[#404040]">
                  {blog.desc}
                </p>
                
                <span className="text-[13px] font-medium text-[#262626] cursor-pointer mt-auto w-fit transition-all duration-300 ease-in-out group-hover:underline group-hover:translate-x-1">
                  Learn more
                </span>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#1A1A1A] text-white px-10 py-3 rounded-none text-[15px] font-medium min-w-[130px] transition-all duration-300 ease-in-out hover:bg-black hover:scale-105 hover:shadow-xl active:scale-95">
            Button
          </button>
        </div>

      </div>
    </section>
  );
}

export default LatestBlog;
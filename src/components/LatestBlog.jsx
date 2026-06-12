function LatestBlog() {
  const blogs = [
    {
      image: "https://www.swayaminfotech.com/blog/wp-content/uploads/2025/01/AI-Human1028x555.jpg",
      title: "Humans are much more smarter than AI",
      desc: "Explore how human creativity, emotions and decision-making still make people powerful in the age of AI."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-JhfMTcjWLcD1-m3hbR0cpQQCviqphIEaQ&s",
      title: "How digital strategy helps brands grow faster",
      desc: "Learn how modern digital solutions improve customer engagement and help businesses scale confidently."
    },
    {
      image: "https://www.netsolutions.com/wp-content/uploads/2024/12/1-1.webp",
      title: "Why great design creates better experiences",
      desc: "Discover how clean interfaces, strong visuals and smooth interactions improve user trust and conversions."
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[773px] py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF] border-b border-gray-100 font-sans overflow-visible mx-auto">      <div className="absolute top-16 left-10 w-56 h-56 bg-[#4F46E5] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-16 right-10 w-56 h-56 bg-[#06B6D4] rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-indigo-100 text-[#4F46E5] text-sm font-semibold shadow-sm mb-4">
            Latest Insights
          </span>

          <h2 className="font-poppins font-bold text-[30px] sm:text-[36px] md:text-[44px] text-center text-[#111827] tracking-tight mb-4">
            Latest blog
          </h2>

          <p className="text-[#6B7280] max-w-xl mx-auto text-[15px] leading-[160%]">
            Read our latest thoughts on design, technology and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10 lg:mb-14">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-white transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-100"
            >

              <div className="aspect-[380/240] w-full relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

              </div>

              <div className="flex flex-col flex-grow p-6">
                <h4 className="font-bold text-[18px] md:text-[20px] text-[#111827] leading-[140%] mb-3 tracking-tight transition-all duration-300 ease-in-out group-hover:text-[#4F46E5]">
                  {blog.title}
                </h4>

                <p className="text-[#6B7280] text-[14px] leading-[160%] mb-5 max-w-[340px]">
                  {blog.desc}
                </p>

                <span className="text-[14px] font-semibold text-[#4F46E5] cursor-pointer mt-auto w-fit transition-all duration-300 ease-in-out group-hover:translate-x-2">
                  Learn more →
                </span>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white px-10 py-3 rounded-full text-[15px] font-semibold min-w-[140px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200 active:scale-95">
            View All Blogs
          </button>
        </div>

      </div>
    </section>
  );
}

export default LatestBlog;
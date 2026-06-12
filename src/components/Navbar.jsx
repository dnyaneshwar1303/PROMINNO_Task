function Navbar() {
  const links = [
    { name: "Home", path: "#home" },
    { name: "Why Us", path: "#why-us" },
    { name: "Strategy", path: "#strategy" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#EEF2FF] via-white to-[#ECFEFF] font-sans text-[14px] sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap lg:flex-nowrap items-center justify-between border-b border-white/60 shadow-[0_8px_30px_rgba(79,70,229,0.08)]">

        <a href="#home" className="flex items-center cursor-pointer group">
          <div className="relative w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] rounded-full bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] p-[3px] shadow-lg shadow-indigo-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <span className="absolute inset-0 rounded-full bg-[#4F46E5] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></span>
          </div>
        </a>

        <div className="order-3 w-full mt-4 md:order-none md:w-auto md:mt-0 ml-0 lg:ml-auto flex flex-wrap justify-center md:justify-start lg:flex-nowrap items-center gap-4 md:gap-6 lg:gap-[50px] font-semibold text-[#374151]">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="relative h-[22px] transition-all duration-300 hover:text-[#4F46E5] hover:-translate-y-1 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[3px] after:rounded-full after:bg-gradient-to-r after:from-[#4F46E5] after:to-[#06B6D4] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="ml-0 lg:ml-[50px]">
          <a href="#contact">
            <button className="relative overflow-hidden bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] text-white px-5 sm:px-8 py-3 font-semibold text-sm whitespace-nowrap shadow-lg shadow-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#4F46E5] opacity-0 transition-all duration-500 hover:opacity-100"></span>
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
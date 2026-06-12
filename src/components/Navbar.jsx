function Navbar() {
  return (
    <nav className="w-full bg-white font-sans text-[14px]">
      <div className="max-w-[1160px] mx-auto lg:ml-[140px] px-4 sm:px-6 py-4 flex flex-wrap lg:flex-nowrap items-center justify-between border-b border-gray-100">

        <div className="flex items-center cursor-pointer group">
          <div className="w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] bg-black rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <img
              src="/logo.png"
              alt="logo"
              className="transition-all duration-300"
            />
          </div>
        </div>

        <div className="order-3 w-full mt-4 md:order-none md:w-auto md:mt-0 ml-0 lg:ml-[408px] flex flex-wrap justify-center md:justify-start lg:flex-nowrap items-center gap-4 md:gap-6 lg:gap-[60px] font-semibold text-[#262626]">
          <a href="#" className="w-[46px] h-[22px] hover:text-black transition-all duration-300 hover:-translate-y-1">Link 1</a>
          <a href="#" className="w-[46px] h-[22px] hover:text-black transition-all duration-300 hover:-translate-y-1">Link 2</a>
          <a href="#" className="w-[46px] h-[22px] hover:text-black transition-all duration-300 hover:-translate-y-1">Link 3</a>
          <a href="#" className="w-[46px] h-[22px] hover:text-black transition-all duration-300 hover:-translate-y-1">Link 4</a>
          <a href="#" className="w-[46px] h-[22px] hover:text-black transition-all duration-300 hover:-translate-y-1">Link 5</a>
        </div>

        <div className="ml-0 lg:ml-[50px]">
          <button className="bg-[#141414] text-white px-5 sm:px-8 py-3 font-medium text-sm whitespace-nowrap transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg active:scale-95">
            Button
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm font-poppins sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Sisi Kiri: Logo Identitas Institusi */}
        <div className="flex items-center space-x-3">
          {/* Kotak Placeholder Logo Digitech / Sekolah */}
          <div className="w-10 h-10 bg-tefaOrange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            DI
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 leading-tight tracking-wide text-lg">
              digitech
            </span>
            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
              innovation
            </span>
          </div>
        </div>

        {/* Sisi Tengah: Menu Navigasi Utama */}
        <nav className="flex items-center bg-gray-100 p-1.5 rounded-full shadow-inner">
          <a
            href="#home"
            className="px-6 py-2 bg-tefaBlue text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-sm"
          >
            Home
          </a>
          <a
            href="#products"
            className="px-6 py-2 text-gray-600 font-medium rounded-full text-sm hover:text-tefaBlue transition-all duration-300"
          >
            Products
          </a>
          <a
            href="#track"
            className="px-6 py-2 text-gray-600 font-medium rounded-full text-sm hover:text-tefaBlue transition-all duration-300"
          >
            Track order
          </a>
        </nav>

        {/* Sisi Kanan: Tombol Akses Cepat (Quick Access) */}
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 bg-tefaBlue text-white font-semibold rounded-full text-sm hover:bg-blue-600 transition-all duration-300 shadow-sm cursor-pointer">
            Login
          </button>
          <button className="px-6 py-2 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-all duration-300 shadow-sm cursor-pointer">
            Register
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
// Menerima props onNavigate dan currentPage
const Header = ({ onNavigate, currentPage }) => {
  return (
    <header className="w-full bg-white shadow-sm font-poppins sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Sisi Kiri: Logo Identitas Institusi (Bisa diklik untuk balik ke Home) */}
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
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
          <button
            onClick={() => onNavigate('landing')}
            className={`px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 cursor-pointer ${
              currentPage === 'landing' 
                ? 'bg-tefaBlue text-white shadow-sm' 
                : 'text-gray-600 hover:text-tefaBlue'
            }`}
          >
            Home
          </button>
          <a
            href="#products"
            onClick={() => onNavigate('landing')}
            className="px-6 py-2 text-gray-600 font-medium rounded-full text-sm hover:text-tefaBlue transition-all duration-300"
          >
            Products
          </a>
          <a
            href="#track"
            onClick={() => onNavigate('landing')}
            className="px-6 py-2 text-gray-600 font-medium rounded-full text-sm hover:text-tefaBlue transition-all duration-300"
          >
            Track order
          </a>
        </nav>

        {/* Sisi Kanan: Tombol Akses Cepat */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onNavigate('login')}
            className={`px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 shadow-sm cursor-pointer ${
              currentPage === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-tefaBlue text-white hover:bg-blue-600'
            }`}
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate('register')}
            className={`px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 shadow-sm cursor-pointer ${
              currentPage === 'register'
                ? 'bg-orange-600 text-white'
                : 'bg-tefaOrange text-white hover:bg-orange-500'
            }`}
          >
            Register
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
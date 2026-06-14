import { useState } from 'react'
import { ShoppingCart, Bell, LogOut } from 'lucide-react'

const Header = ({ onNavigate, currentPage, isLoggedIn, onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  // Data simulasi pelanggan aktif
  const userProfile = {
    nama: "Yuma P.I.",
    inisial: "YI"
  }

  return (
    <header className="w-full bg-white shadow-xs font-poppins sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* SISI KIRI: LOGO IDENTITAS INSTITUSI */}
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <div className="w-10 h-10 bg-tefaOrange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-xs">
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

        {/* SISI TENGAH: MENU NAVIGASI UTAMA */}
        <nav className="relative flex items-center bg-gray-100 p-1.5 rounded-full shadow-inner">
          <div 
            className={`absolute top-1.5 bottom-1.5 bg-tefaBlue rounded-full shadow-xs transition-all duration-300 ease-out ${
              currentPage === 'landing' && 'left-1.5 w-25'
            } ${
              currentPage === 'products' && 'left-26.25 w-30'
            } ${
              currentPage === 'track' && 'left-57.25 w-35'
            }`}
          />

          <button
            onClick={() => onNavigate('landing')}
            className={`relative z-10 w-25 py-2 font-bold text-sm transition-colors duration-300 cursor-pointer text-center border-none bg-transparent ${
              currentPage === 'landing' ? 'text-white' : 'text-gray-600 hover:text-tefaBlue'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => onNavigate('products')}
            className={`relative z-10 w-30 py-2 font-bold text-sm transition-colors duration-300 cursor-pointer text-center border-none bg-transparent ${
              currentPage === 'products' ? 'text-white' : 'text-gray-600 hover:text-tefaBlue'
            }`}
          >
            Products
          </button>
          
          <button
            onClick={() => onNavigate('track')}
            className={`relative z-10 w-35 py-2 font-bold text-sm transition-colors duration-300 cursor-pointer text-center border-none bg-transparent ${
              currentPage === 'track' ? 'text-white' : 'text-gray-600 hover:text-tefaBlue'
            }`}
          >
            Track order
          </button>
        </nav>

        {/* SISI KANAN: KONDISI DINAMIS STATUS LOGIN */}
        <div className="flex items-center space-x-5">
          {isLoggedIn ? (
            <>
              {/* TOMBOL IKON KERANJANG BELANJA */}
              <button 
                onClick={() => onNavigate('cart')}
                className={`relative text-gray-500 hover:text-tefaOrange cursor-pointer p-1.5 rounded-full hover:bg-gray-50 transition-all border-none bg-transparent flex items-center justify-center ${
                  currentPage === 'cart' && 'text-tefaOrange bg-orange-50'
                }`}
                title="Keranjang Belanja"
              >
                <ShoppingCart size={20} strokeWidth={2.5} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-tefaOrange text-white text-[9px] font-black rounded-full flex items-center justify-center border border-white">
                  3
                </span>
              </button>

              {/* TOMBOL IKON NOTIFIKASI */}
              <button className="relative text-gray-500 hover:text-tefaBlue cursor-pointer p-1.5 rounded-full hover:bg-gray-50 transition-all border-none bg-transparent flex items-center justify-center">
                <Bell size={20} strokeWidth={2.5} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-50 rounded-full"></span>
              </button>

              <div className="w-px h-6 bg-gray-200"></div>

              {/* MENU DROPDOWN PROFIL PELANGGAN AKTIF */}
              <div className="relative">
                <div 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 cursor-pointer select-none"
                >
                  <div className="w-9 h-9 bg-linear-to-tr from-tefaOrange to-amber-400 rounded-full flex items-center justify-center text-white font-black text-xs shadow-xs border border-orange-100">
                    {userProfile.inisial}
                  </div>
                  <span className="font-bold text-xs text-gray-700 hidden sm:inline-block hover:text-tefaOrange transition-colors">
                    {userProfile.nama} ▾
                  </span>
                </div>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 text-left text-sm font-semibold">
                    <button 
                      onClick={() => {
                        setIsProfileOpen(false)
                        onLogout()
                        onNavigate('landing')
                      }}
                      className="w-full px-4 py-2.5 text-red-500 hover:bg-red-50 transition-colors text-left cursor-pointer border-none bg-transparent flex items-center space-x-2"
                    >
                      <LogOut size={16} strokeWidth={2.5} />
                      <span>Keluar Akun</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('login')}
                className="px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 shadow-xs cursor-pointer bg-tefaBlue text-white hover:bg-blue-600 border-none"
              >
                Login
              </button>
              <button 
                onClick={() => onNavigate('register')}
                className="px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 shadow-xs cursor-pointer bg-tefaOrange text-white hover:bg-orange-500 border-none"
              >
                Register
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header
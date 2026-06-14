import { useState } from 'react'
import { 
  LayoutDashboard, 
  CheckSquare, 
  Sliders, 
  Layers, 
  Users, 
  BarChart3, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  Bell 
} from 'lucide-react'

// IMPORT BARISAN SUB-MENU MODULAR HASIL IDE CERDAS ANDA
import AdminOverview from './menu/AdminOverview'
import AdminPayments from './menu/AdminPayments'
import AdminProducts from './menu/AdminProducts'
import AdminStock from './menu/AdminStock'
import AdminUsers from './menu/AdminUsers'
import AdminReports from './menu/AdminReports'

const DashboardAdmin = ({ onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // State filter laporan dioperasikan sebagai props ke komponen eksternal
  const [reportPeriod, setReportPeriod] = useState('bulanan')
  const [reportCategory, setReportCategory] = useState('all')

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins text-gray-800 overflow-hidden">
      
      {/* SIDEBAR PANEL UTUH */}
      <aside 
        className={`h-screen bg-tefaDark text-white flex flex-col p-6 shadow-xl shrink-0 transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-72' : 'w-20 items-center'
        }`}
      >
        <div className={`flex items-center w-full border-b border-gray-800 pb-5 mb-6 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <>
              <div className="flex items-center space-x-3 select-none">
                <div className="w-10 h-10 bg-tefaOrange rounded-lg flex items-center justify-center font-black text-xl text-white shadow-md">
                  DI
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold tracking-wide text-base leading-tight">digitech</span>
                  <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">innovation</span>
                </div>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-tefaOrange font-bold text-sm cursor-pointer p-1 rounded-lg hover:bg-gray-800 transition-colors border-none bg-transparent flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-400 hover:text-tefaOrange cursor-pointer p-2 rounded-xl hover:bg-gray-800 transition-colors border-none bg-transparent flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          )}
        </div>

        <nav className="grow space-y-1.5 w-full text-left">
          {isSidebarOpen && (
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Panel Kontrol</p>
          )}
          
          <button 
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'dashboard' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Dashboard"
          >
            <LayoutDashboard size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Dashboard</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('payment')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'payment' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Validasi Pembayaran"
          >
            <CheckSquare size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Validasi Pembayaran</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('products')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'products' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Produk & Harga"
          >
            <Sliders size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Produk & Harga</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('stock')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'stock' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Manajemen Stok"
          >
            <Layers size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Manajemen Stok</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('users')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'users' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Manajemen Pengguna"
          >
            <Users size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Manajemen Pengguna</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('reports')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'reports' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Laporan Operasional"
          >
            <BarChart3 size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Laporan Operasional</span>}
          </button>
        </nav>

        <div className="border-t border-gray-800 pt-4 w-full flex justify-center">
          <button 
            onClick={() => onNavigate('landing')}
            className={`bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white font-bold rounded-xl text-sm transition-all flex items-center cursor-pointer border-none ${
              isSidebarOpen ? 'w-full px-4 py-3 space-x-3 justify-start' : 'p-3 justify-center'
            }`}
            title="Keluar Panel"
          >
            <LogOut size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Keluar Panel</span>}
          </button>
        </div>
      </aside>

      {/* SISI KANAN: KONTEN AREA UTAMA */}
      <div className="grow flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOPBAR PANEL ADMIN */}
        <header className="h-20 bg-white border-b border-gray-100 flex justify-between items-center px-8 md:px-12 shrink-0 shadow-sm z-10">
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="w-full flex items-center border border-gray-200 bg-gray-50 rounded-xl px-4 py-2 focus-within:border-tefaBlue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-50 transition-all space-x-2">
              <Search size={16} className="text-gray-400 shrink-0" strokeWidth={2.5} />
              <input
                type="text"
                placeholder="Cari data operasional atau transaksi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-1.5 text-xs text-gray-700 placeholder-gray-400 outline-none font-medium bg-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-gray-400 hover:text-gray-600 cursor-pointer p-1 bg-transparent border-none flex items-center justify-center">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-tefaOrange rounded-full"></span>
            </button>
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="relative">
              <div 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-3 text-left cursor-pointer select-none"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-gray-800 leading-tight">Yuma Putra Ibrahim</span>
                  <span className="text-[10px] text-tefaBlue font-bold tracking-wide uppercase mt-0.5">Koordinator Admin ▾</span>
                </div>
                <div className="w-10 h-10 bg-linear-to-tr from-tefaBlue to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-sm border border-blue-100">
                  YPI
                </div>
              </div>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-30 text-left text-sm font-semibold">
                  <button className="w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-tefaBlue transition-colors text-left cursor-pointer border-none bg-transparent flex items-center space-x-2">
                    <span className="text-xs">👤</span> <span>Edit Profil</span>
                  </button>
                  <button className="w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-tefaBlue transition-colors text-left cursor-pointer border-none bg-transparent flex items-center space-x-2">
                    <span className="text-xs">⚙️</span> <span>Pengaturan</span>
                  </button>
                  <hr className="border-gray-100 my-1" />
                  <button 
                    onClick={() => onNavigate('landing')}
                    className="w-full px-4 py-2.5 text-red-500 hover:bg-red-50 transition-colors text-left cursor-pointer border-none bg-transparent flex items-center space-x-2"
                  >
                    <LogOut size={14} />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* AREA KONTEN UTAMA MODULAR */}
        <main className="grow p-8 md:p-12 space-y-8 overflow-y-auto">
          {activeMenu === 'dashboard' && <AdminOverview />}
          {activeMenu === 'payment' && <AdminPayments />}
          {activeMenu === 'products' && <AdminProducts />}
          {activeMenu === 'stock' && <AdminStock />}
          {activeMenu === 'users' && <AdminUsers />}
          {activeMenu === 'reports' && (
            <AdminReports 
              reportPeriod={reportPeriod}
              setReportPeriod={setReportPeriod}
              reportCategory={reportCategory}
              setReportCategory={setReportCategory}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default DashboardAdmin
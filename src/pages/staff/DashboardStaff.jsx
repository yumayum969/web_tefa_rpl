import { useState } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  BarChart3, 
  LogOut, 
  X, 
  Menu, 
  Search, 
  Bell 
} from 'lucide-react';

// Import sub-menu modular staf
import StaffOverview from './menu/StaffOverview';
import StaffStock from './menu/StaffStock';
import StaffReports from './menu/StaffReports';

export default function DashboardStaff({ onNavigate }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTanggal, setFilterTanggal] = useState("2026-04-04");

  const activeStaff = {
    nama: "Farah Aulia",
    role: "Staf Operasional"
  };

  const [transactions] = useState([
    { id: 'Q-0001', nama: 'Ahmad Soebardjo', layanan: 'Print A4', kode: '040420260001', catatan: 'Print 1x', status: 'Selesai' },
    { id: 'Q-0002', nama: 'Ahmad Satrio', layanan: 'Print F4', kode: '040420260002', catatan: 'Print 5x', status: 'Proses Pembuatan' },
    { id: 'Q-0003', nama: 'Agus Ari', layanan: 'Print A4', kode: '040420260003', catatan: 'Print 2x', status: 'Menunggu Validasi' },
    { id: 'Q-0004', nama: 'Yuma Putra', layanan: 'Print A5', kode: '040420260004', catatan: 'Print 1x', status: 'Menunggu Validasi' },
    { id: 'Q-0005', nama: 'Nadine puteri', layanan: 'Cetak ID Card', kode: '040420260005', catatan: 'Cetak 10x', status: 'Selesai' },
  ]);

  const [stockAlerts] = useState([
    { name: "Kertas HVS A4", qty: 10, unit: "PCS", date: "03 April 2026, 08.30", status: "Awas" },
    { name: "Kertas HVS A5", qty: 400, unit: "PCS", date: "01 April 2026, 09.30", status: "Aman" },
    { name: "Kertas HVS F4", qty: 0, unit: "PCS", date: "03 April 2026, 08.30", status: "Habis" }
  ]);

  const renderHeaderTitle = () => {
    switch (activeMenu) {
      case 'dashboard': return 'Dashboard';
      case 'stock': return 'Stock Management';
      case 'reports': return 'Operational Reports';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins text-gray-800 overflow-hidden">
      
      {/* 1. SISI KIRI: SIDEBAR PANEL UTUH */}
      <aside 
        className={`h-screen bg-tefaDark text-white flex flex-col p-6 shadow-xl shrink-0 transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-72' : 'w-20 items-center'
        }`}
      >
        <div className={`flex items-center w-full border-b border-gray-800 pb-5 mb-6 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <>
              <div className="flex items-center space-x-3 select-none">
                <div className="w-10 h-10 bg-tefaBlue rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md">
                  DI
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold tracking-wide text-base leading-tight">digitech</span>
                  <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">innovation</span>
                </div>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-tefaBlue font-bold text-sm cursor-pointer p-1 rounded-lg hover:bg-gray-800 transition-colors border-none bg-transparent flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-400 hover:text-tefaBlue cursor-pointer p-2 rounded-xl hover:bg-gray-800 transition-colors border-none bg-transparent flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          )}
        </div>

        <nav className="grow space-y-1.5 w-full text-left">
          {isSidebarOpen && (
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Panel Kontrol Staf</p>
          )}
          
          <button 
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'dashboard' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Dashboard"
          >
            <LayoutDashboard size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Dashboard</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('stock')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'stock' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Management Stok"
          >
            <Layers size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Stock Management</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('reports')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer border-none bg-transparent ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'reports' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Operational Reports"
          >
            <BarChart3 size={18} className="shrink-0" /> 
            {isSidebarOpen && <span>Operational Reports</span>}
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

      {/* 2. SISI KANAN: AREA KONTEN UTAMA */}
      <div className="grow flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOPBAR PANEL STAF */}
        <header className="h-20 bg-white border-b border-gray-100 flex justify-between items-center px-8 md:px-12 shrink-0 shadow-sm z-10">
          <div className="flex items-center space-x-4 w-full max-w-xl">
            {/* PENAMBAHAN CLASS whitespace-nowrap AGAR JUDUL LAYOUT TIDAK JATUH KE BAWAH */}
            <h1 className="text-2xl font-bold text-slate-800 transition-all mr-4 whitespace-nowrap">{renderHeaderTitle()}</h1>
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
              <span className="absolute top-1 right-1 w-2 h-2 bg-tefaBlue rounded-full"></span>
            </button>
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="relative">
              <div 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-3 text-left cursor-pointer select-none"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-gray-800 leading-tight">{activeStaff.nama}</span>
                  <span className="text-[10px] text-tefaBlue font-bold tracking-wide uppercase mt-0.5">{activeStaff.role} ▾</span>
                </div>
                <div className="w-10 h-10 bg-linear-to-tr from-tefaBlue to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-sm border border-blue-100">
                  FA
                </div>
              </div>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-30 text-left text-sm font-semibold">
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

        {/* AREA ISI DASBOR BERDASARKAN MENU */}
        <main className="grow p-8 md:p-12 space-y-8 overflow-y-auto">
          {activeMenu === 'dashboard' && <StaffOverview transactions={transactions} />}
          {activeMenu === 'stock' && <StaffStock stockAlerts={stockAlerts} />}
          {activeMenu === 'reports' && (
            <StaffReports 
              filterTanggal={filterTanggal} 
              setFilterTanggal={setFilterTanggal} 
              activeStaff={activeStaff} 
            />
          )}
        </main>
      </div>
    </div>
  );
}
import { useState } from 'react';

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
        className={`h-screen bg-tefaDark text-white flex flex-col p-6 space-y-7 shadow-xl shrink-0 sticky top-0 transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-72' : 'w-20 items-center'
        }`}
      >
        <div className={`flex items-center w-full border-b border-gray-800 pb-5 mb-6 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-tefaBlue rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md">
                  DI
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold tracking-wide text-base leading-tight">digitech</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">innovation</span>
                </div>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-tefaBlue font-bold text-sm cursor-pointer p-1 rounded-lg hover:bg-gray-800 transition-colors"
              >
                ✕
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-400 hover:text-tefaBlue text-xl font-bold cursor-pointer p-2 rounded-xl hover:bg-gray-800 transition-colors"
            >
              ☰
            </button>
          )}
        </div>

        <nav className="grow space-y-1.5 w-full text-left">
          {isSidebarOpen && (
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4 mb-2">Panel Kontrol Staf</p>
          )}
          
          <button 
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'dashboard' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Dashboard"
          >
            <span>📊</span> {isSidebarOpen && <span>Dashboard</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('stock')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'stock' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Management Stok"
          >
            <span>📦</span> {isSidebarOpen && <span>Stock Management</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('reports')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'reports' ? 'bg-tefaBlue text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Operational Reports"
          >
            <span>📈</span> {isSidebarOpen && <span>Operational Reports</span>}
          </button>
        </nav>

        <div className="border-t border-gray-800 pt-4 w-full flex justify-center">
          <button 
            onClick={() => onNavigate('landing')}
            className={`bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white font-bold rounded-xl text-sm transition-all flex items-center cursor-pointer ${
              isSidebarOpen ? 'w-full px-4 py-3 space-x-3 justify-start' : 'p-3 justify-center'
            }`}
            title="Keluar Panel"
          >
            <span>🚪</span> {isSidebarOpen && <span>Keluar Panel</span>}
          </button>
        </div>
      </aside>

      {/* 2. SISI KANAN: AREA KONTEN UTAMA */}
      <div className="grow flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOPBAR PANEL ADMIN */}
        <header className="h-20 bg-white border-b border-gray-100 flex justify-between items-center px-8 md:px-12 shrink-0 shadow-sm z-10">
          
          <div className="flex items-center space-x-4 w-full max-w-md">
            {/* Pemanggilan fungsi renderHeaderTitle diletakkan di bawah untuk sinkronisasi judul halaman */}
            <h1 className="text-2xl font-bold text-slate-800 transition-all mr-4">{renderHeaderTitle()}</h1>
            <div className="w-full flex items-center border border-gray-200 bg-gray-50 rounded-xl px-4 py-2 focus-within:border-tefaBlue focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-50 transition-all">
              <span className="text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Cari data operasional atau transaksi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 text-xs text-gray-700 placeholder-gray-400 outline-none font-medium bg-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-xl text-gray-400 hover:text-gray-600 cursor-pointer p-1">
              <span>🔔</span>
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
                    className="w-full px-4 py-2.5 text-red-500 hover:bg-red-50 transition-colors text-left cursor-pointer"
                  >
                    🚪 Log Out
                  </button>
                </div>
              )}
            </div>
          </div>

        </header>

        {/* AREA ISI DASBOR */}
        <main className="grow p-8 md:p-12 space-y-8 overflow-y-auto">
          
          {/* CONTENT 1: DASHBOARD */}
          {activeMenu === 'dashboard' && (
            <>
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Dashboard Utama</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Ringkasan aktivitas operasional Teaching Factory hari ini.</p>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Daily Revenue</span>
                    <h3 className="text-2xl font-black text-gray-800">Rp 220.000</h3>
                  </div>
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl">💰</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Low Stock Alerts</span>
                    <h3 className="text-2xl font-black text-rose-600">3 Item Kritis</h3>
                  </div>
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-2xl">⚠️</div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 text-left bg-slate-50/50">
                  <h3 className="text-base font-extrabold text-gray-800">Production Queue Table First In First Out (FIFO)</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4.5">Queue No</th>
                        <th className="px-6 py-4.5">Nama Customer</th>
                        <th className="px-6 py-4.5">Jenis Produk</th>
                        <th className="px-6 py-4.5">Download File</th>
                        <th className="px-6 py-4.5">Notes</th>
                        <th className="px-6 py-4.5">Status</th>
                        <th className="px-6 py-4.5 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-600">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-tefaBlue font-bold text-xs">{tx.id}</td>
                          <td className="px-6 py-4 text-gray-800 font-semibold">{tx.nama}</td>
                          <td className="px-6 py-4 text-xs">{tx.layanan}</td>
                          <td className="px-6 py-4 text-xs font-mono select-all bg-gray-50 p-1.5 rounded border border-gray-200 inline-block mt-2">{tx.kode}</td>
                          <td className="px-6 py-4 text-xs text-gray-400">{tx.catatan}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${
                              tx.status === 'Selesai' && 'bg-green-50 text-green-600'
                            } ${
                              tx.status === 'Proses Pembuatan' && 'bg-blue-50 text-blue-600'
                            } ${
                              tx.status === 'Menunggu Validasi' && 'bg-orange-50 text-orange-600'
                            }`}>
                              {tx.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center space-x-2">
                            <button className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-medium transition-all border border-blue-200 cursor-pointer">Start</button>
                            <button className="px-3 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg text-xs font-medium transition-all border border-emerald-200 cursor-pointer">Finish</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {/* CONTENT 2: STOCK MANAGEMENT */}
          {activeMenu === 'stock' && (
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Stock Management</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Pengawasan logistik material inventaris dan bahan baku cetak.</p>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Item</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-1">30 Item</h3>
                  </div>
                  <span className="text-2xl bg-blue-50 p-3 rounded-xl">📦</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Item to Restock Soon</span>
                    <h3 className="text-2xl font-black text-amber-600 mt-1">2 Item</h3>
                  </div>
                  <span className="text-2xl bg-amber-50 p-3 rounded-xl">⚠️</span>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 text-left flex justify-between items-center bg-slate-50/50">
                  <h3 className="text-base font-extrabold text-gray-800">Daftar Stok Material Inventaris</h3>
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">Mode Lihat Data (Staf)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">Nama Stok</th>
                        <th className="px-6 py-4">Stok Tersedia</th>
                        <th className="px-6 py-4">Keterangan</th>
                        <th className="px-6 py-4">Terakhir Diubah</th>
                        <th className="px-6 py-4">Status Stok</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-600">
                      {stockAlerts.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-gray-800 font-semibold">{item.name}</td>
                          <td className="px-6 py-4 text-gray-800 font-bold">{item.qty} {item.unit}</td>
                          <td className="px-6 py-4 text-xs text-gray-400">-</td>
                          <td className="px-6 py-4 text-xs text-gray-400">{item.date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${
                              item.status === 'Aman' && 'bg-green-50 text-green-600'
                            } ${
                              item.status === 'Awas' && 'bg-orange-50 text-orange-600'
                            } ${
                              item.status === 'Habis' && 'bg-red-50 text-red-600'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {/* CONTENT 3: OPERATIONAL REPORTS */}
          {activeMenu === 'reports' && (
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Operational Reports</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Rekapitulasi performa bisnis penjualan jasa hasil Teaching Factory.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-6 items-center text-left">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Tanggal Kerja :</label>
                  <input 
                    type="date" 
                    value={filterTanggal} 
                    onChange={(e) => setFilterTanggal(e.target.value)} 
                    className="border border-gray-200 rounded-lg p-2 text-xs font-semibold bg-gray-50 outline-none focus:border-tefaBlue"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Nama Petugas :</label>
                  <input 
                    type="text" 
                    value={activeStaff.nama} 
                    disabled 
                    className="border border-gray-200 rounded-lg p-2 text-xs font-semibold bg-gray-100 text-gray-400 cursor-not-allowed outline-none"
                  />
                </div>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Revenue</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 220.000</h3>
                  <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ +10%</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Order Complete</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">43 Transaksi</h3>
                  <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ +10%</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Nett Profit</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 70.000</h3>
                  <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ +10%</span>
                </div>
              </section>

              <div className="flex justify-end">
                <button className="px-5 py-2.5 bg-tefaDark hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer">
                  <span>📄</span> Export ke PDF
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
import { useState } from 'react'

const DashboardAdmin = ({ onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // State filter untuk halaman laporan operasional
  const [reportPeriod, setReportPeriod] = useState('bulanan')
  const [reportCategory, setReportCategory] = useState('all')

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins text-gray-800 overflow-hidden">
      
      {/* 1. SIDEBAR PANEL UTUH DENGAN FITUR MINI SIDEBAR */}
      <aside 
        className={`h-screen bg-tefaDark text-white flex flex-col p-6 shadow-xl shrink-0 sticky top-0 transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-72' : 'w-20 items-center'
        }`}
      >
        <div className={`flex items-center w-full border-b border-gray-800 pb-5 mb-6 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-tefaOrange rounded-xl flex items-center justify-center font-black text-xl text-white shadow-md">
                  DI
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold tracking-wide text-base leading-tight">digitech</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">innovation</span>
                </div>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-500 hover:text-tefaOrange font-bold text-sm cursor-pointer p-1 rounded-lg hover:bg-gray-800 transition-colors"
              >
                ✕
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-400 hover:text-tefaOrange text-xl font-bold cursor-pointer p-2 rounded-xl hover:bg-gray-800 transition-colors"
            >
              ☰
            </button>
          )}
        </div>

        <nav className="grow space-y-1.5 w-full text-left">
          {isSidebarOpen && (
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4 mb-2">Panel Kontrol</p>
          )}
          
          <button 
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'dashboard' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Dashboard"
          >
            <span>📊</span> {isSidebarOpen && <span>Dashboard</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('payment')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'payment' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Validasi Pembayaran"
          >
            <span>🪙</span> {isSidebarOpen && <span>Validasi Pembayaran</span>}
          </button>
          
          <button 
            onClick={() => setActiveMenu('products')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'products' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Produk & Harga"
          >
            <span>🛠️</span> {isSidebarOpen && <span>Produk & Harga</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('stock')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'stock' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Manajemen Stok"
          >
            <span>📦</span> {isSidebarOpen && <span>Manajemen Stok</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('users')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'users' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Manajemen Pengguna"
          >
            <span>👤</span> {isSidebarOpen && <span>Manajemen Pengguna</span>}
          </button>

          <button 
            onClick={() => setActiveMenu('reports')}
            className={`w-full py-3 font-bold rounded-xl text-sm flex items-center transition-all cursor-pointer ${
              isSidebarOpen ? 'px-4 space-x-3' : 'justify-center'
            } ${
              activeMenu === 'reports' ? 'bg-tefaOrange text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
            }`}
            title="Laporan Operasional"
          >
            <span>📈</span> {isSidebarOpen && <span>Laporan Operasional</span>}
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

      {/* 2. SISI KANAN: KONTEN AREA UTAMA DENGAN SCROLL MANDIRI */}
      <div className="grow flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOPBAR PANEL ADMIN */}
        <header className="h-20 bg-white border-b border-gray-100 flex justify-between items-center px-8 md:px-12 shrink-0 shadow-sm z-10">
          <div className="flex items-center space-x-4 w-full max-w-md">
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
                  <button className="w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-tefaBlue transition-colors text-left cursor-pointer">
                    👤 Edit Profil
                  </button>
                  <button className="w-full px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-tefaBlue transition-colors text-left cursor-pointer">
                    ⚙️ Pengaturan
                  </button>
                  <hr className="border-gray-100 my-1" />
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

        {/* AREA KONTEN UTAMA */}
        <main className="grow p-8 md:p-12 space-y-8 overflow-y-auto">
          
          {/* MENU 1: DASHBOARD */}
          {activeMenu === 'dashboard' && (
            <>
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Dashboard Utama</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Ringkasan aktivitas operasional Teaching Factory hari ini.</p>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Antrean FIFO</span>
                    <h3 className="text-2xl font-black text-gray-800">12 Pesanan</h3>
                  </div>
                  <span className="text-2xl bg-orange-50 p-3.5 rounded-xl">⏳</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Logistik Kertas</span>
                    <h3 className="text-2xl font-black text-gray-800">4.2 Rim</h3>
                  </div>
                  <span className="text-2xl bg-blue-50 p-3.5 rounded-xl">📄</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Pendapatan Hari Ini</span>
                    <h3 className="text-2xl font-black text-gray-800">Rp 425.000</h3>
                  </div>
                  <span className="text-2xl bg-green-50 p-3.5 rounded-xl">💰</span>
                </div>
              </section>
            </>
          )}

          {/* MENU 2: VALIDASI PEMBAYARAN */}
          {activeMenu === 'payment' && (
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Validasi Pembayaran</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Pemeriksaan bukti bayar QRIS dan persetujuan antrean transaksi.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">ID Pesanan</th>
                        <th className="px-6 py-4">Nama Customer</th>
                        <th className="px-6 py-4">Total Pesanan</th>
                        <th className="px-6 py-4">Bukti Pembayaran</th>
                        <th className="px-6 py-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500 font-medium">
                      <tr>
                        <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                          Belum ada data pesanan masuk dari database.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MENU 3: PRODUK & HARGA */}
          {activeMenu === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
                <div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Produk & Harga</h2>
                  <p className="text-xs text-gray-400 font-medium mt-1">Manajemen katalog layanan jasa cetak dan penetapan tarif operasional.</p>
                </div>
                <button className="px-5 py-2.5 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0">
                  + Tambah Produk Baru
                </button>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Produk Aktif</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-1">8 Jasa</h3>
                  </div>
                  <span className="text-2xl bg-orange-50 p-3 rounded-xl">🛠️</span>
                </div>
                <div className="p-6 rounded-2xl shadow-sm border border-red-100 bg-red-50/30 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-red-500 font-bold uppercase tracking-wider">⚠️ Peringatan Produk</span>
                    <p className="text-xs text-gray-600 font-semibold mt-1">Terdapat produk dengan bahan baku habis.</p>
                  </div>
                  <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-md">Segera Update</span>
                </div>
              </section>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">Foto Produk</th>
                        <th className="px-6 py-4">Nama Produk</th>
                        <th className="px-6 py-4">Kategori</th>
                        <th className="px-6 py-4">Harga Modal</th>
                        <th className="px-6 py-4">Harga Jual</th>
                        <th className="px-6 py-4">Status Produk</th>
                        <th className="px-6 py-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500 font-medium">
                      <tr>
                        <td colSpan="7" className="px-6 py-12 text-center text-gray-400">
                          Belum ada katalog produk yang terdaftar.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MENU 4: MANAJEMEN STOK */}
          {activeMenu === 'stock' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
                <div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Manajemen Stok</h2>
                  <p className="text-xs text-gray-400 font-medium mt-1">Pengawasan logistik material inventaris dan bahan baku cetak.</p>
                </div>
                <button className="px-5 py-2.5 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0">
                  + Add Stock
                </button>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Jenis Stok</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-1">14 Item</h3>
                  </div>
                  <span className="text-2xl bg-orange-50 p-3 rounded-xl">📦</span>
                </div>
                <div className="p-6 rounded-2xl shadow-sm border border-red-100 bg-red-50/30 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs text-red-500 font-bold uppercase tracking-wider">⚠️ Peringatan Logistik</span>
                    <p className="text-xs text-gray-600 font-semibold mt-1">Bahan baku HVS A4 berada di bawah batas minimum.</p>
                  </div>
                  <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-md">Segera Update</span>
                </div>
              </section>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">Nama Stock</th>
                        <th className="px-6 py-4">Ketersediaan Stok</th>
                        <th className="px-6 py-4">Keterangan</th>
                        <th className="px-6 py-4">Terakhir Diubah</th>
                        <th className="px-6 py-4">Status Stok</th>
                        <th className="px-6 py-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500 font-medium">
                      <tr>
                        <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                          Belum ada data manajemen stok terekam.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MENU 5: MANAJEMEN PENGGUNA */}
          {activeMenu === 'users' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
                <div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Manajemen Pengguna</h2>
                  <p className="text-xs text-gray-400 font-medium mt-1">Pengaturan akun hak akses bagi elemen admin, staf, dan pelanggan.</p>
                </div>
                <button className="px-5 py-2.5 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0">
                  + Tambah Akun Baru
                </button>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-left">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Admin Aktif</span>
                  <h3 className="text-xl font-black text-gray-800 mt-0.5">2 Akun</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-left">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Staff Aktif</span>
                  <h3 className="text-xl font-black text-gray-800 mt-0.5">5 Akun</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-left">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total User Aktif</span>
                  <h3 className="text-xl font-black text-gray-800 mt-0.5">142 Akun</h3>
                </div>
              </section>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4">Nama User</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">NIS / NIM</th>
                        <th className="px-6 py-4">Role</th>
                        <th className="px-6 py-4">Login Terakhir</th>
                        <th className="px-6 py-4">Status User</th>
                        <th className="px-6 py-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500 font-medium">
                      <tr>
                        <td colSpan="7" className="px-6 py-12 text-center text-gray-400">
                          Tidak terhubung dengan database berisi akun aktif.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MENU 6: LAPORAN OPERASIONAL */}
          {activeMenu === 'reports' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
                <div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">Laporan Operasional</h2>
                  <p className="text-xs text-gray-400 font-medium mt-1">Rekapitulasi performa finansial neraca laba rugi hasil Teaching Factory.</p>
                </div>
                <button className="px-5 py-2.5 bg-tefaBlue hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0">
                  📄 Ekspor PDF
                </button>
              </div>

              <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl border border-gray-100 text-left">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Periode Waktu</label>
                  <select 
                    value={reportPeriod} 
                    onChange={(e) => setReportPeriod(e.target.value)}
                    className="border border-gray-200 rounded-lg p-2 text-xs font-semibold bg-gray-50 outline-none focus:border-tefaBlue"
                  >
                    <option value="harian">Harian</option>
                    <option value="bulanan">Bulanan / Tahunan</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Kategori Jasa</label>
                  <select 
                    value={reportCategory} 
                    onChange={(e) => setReportCategory(e.target.value)}
                    className="border border-gray-200 rounded-lg p-2 text-xs font-semibold bg-gray-50 outline-none focus:border-tefaBlue"
                  >
                    <option value="all">Semua Kategori</option>
                    <option value="printing">Printing</option>
                    <option value="fotocopy">Fotocopy</option>
                  </select>
                </div>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Revenue</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 0</h3>
                  <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ 0%</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Order Sukses</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">0 Transaksi</h3>
                  <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ 0%</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative overflow-hidden">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Nett Profit</span>
                  <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 0</h3>
                  <span className="text-[10px] text-red-500 font-bold absolute bottom-2 right-4">▼ 0%</span>
                </div>
              </section>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-12 text-center text-gray-400 text-sm font-medium">
                Tidak terhubung dengan database berisi data laporan aktif.
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default DashboardAdmin
import { useState } from 'react'

const DashboardAdmin = ({ onNavigate }) => {
  // Kontrol buka tutup sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  // Kontrol menu aktif untuk navigasi halaman internal
  const [activeMenu, setActiveMenu] = useState('dashboard')

  // Kontrol dropdown profil di topbar
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  
  // State pencarian global admin
  const [searchQuery, setSearchQuery] = useState('')

  // Simulasi data antrean transaksi FIFO TeFa RPL
  const [transactions] = useState([
    { id: 'T040426-0001', nama: 'Ahmad Fauzi', layanan: 'Cetak Dokumen (A4)', status: 'Selesai', total: 'Rp. 15.000', waktu: '08:30 WIB' },
    { id: 'T040426-0002', nama: 'Siti Rahma', layanan: 'Cetak ID Card', status: 'Proses Pembuatan', total: 'Rp. 50.000', waktu: '09:15 WIB' },
    { id: 'T040426-0003', nama: 'Budi Santoso', layanan: 'Fotocopy Dokumen', status: 'Menunggu Validasi', total: 'Rp. 7.500', waktu: '10:00 WIB' },
    { id: 'T040426-0004', nama: 'Yulia Permata', layanan: 'Cetak Brosur', status: 'Menunggu Validasi', total: 'Rp. 120.000', waktu: '10:45 WIB' },
  ])

  // Simulasi Alert Stok Logistik Menipis
  const [stockAlerts] = useState([
    { bahan: 'Kertas HVS A4 80gr', sisa: '1.2 Rim', status: 'Kritis' },
    { bahan: 'Tinta Cetak Cyan v4', sisa: '15%', status: 'Menipis' },
  ])

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins text-gray-800 overflow-hidden">
      
      {/* 1. SIDEBAR PANEL UTUH DENGAN FITUR MINI SIDEBAR */}
      <aside 
        className={`h-screen bg-tefaDark text-white flex flex-col p-6 shadow-xl shrink-0 sticky top-0 transition-all duration-300 z-20 ${
          isSidebarOpen ? 'w-72' : 'w-20 items-center'
        }`}
      >
        {/* Bagian Atas Sidebar */}
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

        {/* Menu Navigasi Utama */}
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

        {/* Bagian Bawah: Keluar Panel */}
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
            
            {/* Profil Menu Utama dengan Fitur Dropdown */}
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

              {/* Tampilan Konten Elemen Dropdown Profil */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-30 animate-fadeIn text-left text-sm font-semibold">
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

        {/* AREA ISI HALAMAN BERDASARKAN SELEKTOR MENU INTERAKTIF */}
        <main className="grow p-8 md:p-12 space-y-8 overflow-y-auto">
          
          {/* TAMPILAN 1: HALAMAN DASHBOARD */}
          {activeMenu === 'dashboard' && (
            <>
              <div className="text-left">
                <h2 className="text-2xl font-black text-gray-800 tracking-tight">Ringkasan Sistem</h2>
                <p className="text-xs text-gray-400 font-medium mt-1">Pantau seluruh aktivitas operasional TeFa RPL hari ini.</p>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Antrean FIFO</span>
                    <h3 className="text-2xl font-black text-gray-800">12 Pesanan</h3>
                  </div>
                  <span className="text-2xl bg-orange-50 p-3.5 rounded-xl">⏳</span>
                </div>

                <div className="p-6 rounded-2xl shadow-sm border border-red-100 bg-red-50/20 flex flex-col justify-between text-left hover:shadow-md transition-all">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="text-xs text-red-500 font-bold uppercase tracking-wider">⚠️ Peringatan Stok Bahan</span>
                    <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-md">{stockAlerts.length} Item</span>
                  </div>
                  <div className="space-y-1.5 w-full">
                    {stockAlerts.map((alert, idx) => (
                      <div key={idx} className="flex justify-between text-xs font-semibold text-gray-600 border-b border-gray-100/60 pb-1 last:border-none last:pb-0">
                        <span className="truncate max-w-37.5">{alert.bahan}</span>
                        <span className="text-red-600 font-bold">{alert.sisa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Pendapatan Hari Ini</span>
                    <h3 className="text-2xl font-black text-gray-800">Rp. 425.000</h3>
                  </div>
                  <span className="text-2xl bg-green-50 p-3.5 rounded-xl">💰</span>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 text-left flex justify-between items-center">
                  <h3 className="text-base font-extrabold text-gray-800">Validasi Transaksi Terbaru</h3>
                  <span className="text-xs font-bold bg-blue-50 text-tefaBlue px-3 py-1.5 rounded-full">Sistem Antrean FIFO Aktif</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/70 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <th className="px-6 py-4.5">ID Order</th>
                        <th className="px-6 py-4.5">Nama Pelanggan</th>
                        <th className="px-6 py-4.5">Jenis Layanan</th>
                        <th className="px-6 py-4.5">Waktu Masuk</th>
                        <th className="px-6 py-4.5">Total Bayar</th>
                        <th className="px-6 py-4.5 text-center">Status Jasa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-600">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-tefaBlue font-bold text-xs">{tx.id}</td>
                          <td className="px-6 py-4 text-gray-800 font-semibold">{tx.nama}</td>
                          <td className="px-6 py-4 text-xs">{tx.layanan}</td>
                          <td className="px-6 py-4 text-xs text-gray-400">{tx.waktu}</td>
                          <td className="px-6 py-4 text-gray-800 font-bold text-xs">{tx.total}</td>
                          <td className="px-6 py-4 text-center">
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {/* TAMPILAN 2: HALAMAN VALIDASI PEMBAYARAN */}
          {activeMenu === 'payment' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left space-y-4">
              <h2 className="text-xl font-bold text-gray-800">🪙 Validasi Pembayaran Pelanggan</h2>
              <p className="text-xs text-gray-400">Modul untuk memvalidasi bukti pembayaran transfer bank atau QRIS dari pelanggan.</p>
              <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400 text-sm">
                Belum ada bukti pembayaran baru yang memerlukan konfirmasi manual.
              </div>
            </div>
          )}

          {/* TAMPILAN 3: HALAMAN PRODUK & HARGA */}
          {activeMenu === 'products' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left space-y-4">
              <h2 className="text-xl font-bold text-gray-800">🛠️ Kelola Produk & Konfigurasi Harga</h2>
              <p className="text-xs text-gray-400">Modul untuk menambahkan layanan cetak baru, menonaktifkan jasa, atau mengubah tarif per lembar.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                  <h4 className="font-bold text-sm">Cetak Dokumen A4</h4>
                  <p className="text-xs text-tefaOrange font-bold mt-1">Rp 500 / Lembar</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                  <h4 className="font-bold text-sm">Cetak ID Card Press</h4>
                  <p className="text-xs text-tefaOrange font-bold mt-1">Rp 15.000 / Kartu</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                  <h4 className="font-bold text-sm">Fotocopy Berkala</h4>
                  <p className="text-xs text-tefaOrange font-bold mt-1">Rp 250 / Lembar</p>
                </div>
              </div>
            </div>
          )}

          {/* TAMPILAN 4: HALAMAN MANAJEMEN STOK */}
          {activeMenu === 'stock' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left space-y-4">
              <h2 className="text-xl font-bold text-gray-800">📦 Logistik & Manajemen Stok Bahan Baku</h2>
              <p className="text-xs text-gray-400">Modul untuk mendata inventaris masuk berupa rim kertas, botol tinta printer, dan bahan baku cetak lainnya.</p>
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-xs font-bold text-gray-400 border-b border-gray-100">
                      <th className="p-3">Nama Bahan</th>
                      <th className="p-3">Sisa Stok</th>
                      <th className="p-3">Satuan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="p-3 font-semibold">Kertas HVS A4 80gr</td>
                      <td className="p-3 text-red-600 font-bold">1.2</td>
                      <td className="p-3 text-gray-400">Rim</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="p-3 font-semibold">Kertas Buffalo Biru</td>
                      <td className="p-3">5.0</td>
                      <td className="p-3 text-gray-400">Pack</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAMPILAN 5: HALAMAN MANAJEMEN PENGGUNA */}
          {activeMenu === 'users' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left space-y-4">
              <h2 className="text-xl font-bold text-gray-800">👤 Manajemen Pengguna & Hak Akses</h2>
              <p className="text-xs text-gray-400">Modul untuk mengatur data akun pelanggan terdaftar serta membagi otoritas akun kasir admin.</p>
              <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400 text-sm">
                Sistem database internal akun siap ditampilkan pada proses integrasi database fungsional.
              </div>
            </div>
          )}

          {/* TAMPILAN 6: HALAMAN LAPORAN OPERASIONAL */}
          {activeMenu === 'reports' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left space-y-4">
              <h2 className="text-xl font-bold text-gray-800">📈 Laporan Operasional & Grafik Keuangan</h2>
              <p className="text-xs text-gray-400">Modul rekapitulasi performa bisnis penjualan jasa hasil Teaching Factory.</p>
              <div className="p-12 border border-gray-100 bg-gray-50 rounded-xl text-center text-gray-400 text-sm font-bold">
                📊 Grafik Statistik Finansial Buku Kas Utama TeFa RPL.
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default DashboardAdmin
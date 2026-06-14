import { Sliders, AlertTriangle } from 'lucide-react'

const AdminProducts = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Produk & Harga</h2>
          <p className="text-xs text-gray-400 font-medium mt-1">Manajemen katalog layanan jasa cetak dan penetapan tarif operasional.</p>
        </div>
        <button className="px-5 py-2.5 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0 border-none">
          + Tambah Produk Baru
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Produk Aktif</span>
            <h3 className="text-2xl font-black text-gray-800 mt-1">8 Jasa</h3>
          </div>
          <div className="text-2xl bg-orange-50 p-3 rounded-xl text-tefaOrange flex items-center justify-center">
            <Sliders size={20} />
          </div>
        </div>
        
        {/* KOTAK ALERTI MANDIRI PRODUK - KEMBALI KE ASLI DENGAN IKON LUCIDE */}
        <div className="p-6 rounded-2xl shadow-sm border border-red-100 bg-red-50/30 flex items-center justify-between">
          <div className="flex items-start space-x-3">
            <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" strokeWidth={2.5} />
            <div>
              <span className="text-xs text-red-500 font-bold uppercase tracking-wider block">Peringatan Produk</span>
              <p className="text-xs text-gray-600 font-semibold mt-1">Terdapat produk dengan bahan baku habis.</p>
            </div>
          </div>
          <span className="text-xs font-bold bg-red-100 text-red-600 px-2.5 py-1 rounded-md shrink-0 ml-4">Segera Update</span>
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
  )
}

export default AdminProducts
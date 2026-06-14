import { FileText } from 'lucide-react'

const AdminReports = ({ reportPeriod, setReportPeriod, reportCategory, setReportCategory }) => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Laporan Operasional</h2>
          <p className="text-xs text-gray-400 font-medium mt-1">Rekapitulasi performa finansial neraca laba rugi hasil Teaching Factory.</p>
        </div>
        {/* TOMBOL EKSPOR - SUDAH BERSIH DARI EMOJI DAN MENGGUNAKAN IKON LUCIDE */}
        <button className="px-5 py-2.5 bg-tefaBlue hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0 border-none flex items-center space-x-2">
          <FileText size={14} strokeWidth={2.5} />
          <span>Ekspor PDF</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl border border-gray-100">
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
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Revenue</span>
          <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 0</h3>
          <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ 0%</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Order Sukses</span>
          <h3 className="text-2xl font-black text-gray-800 mt-1">0 Transaksi</h3>
          <span className="text-[10px] text-green-500 font-bold absolute bottom-2 right-4">▲ 0%</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Nett Profit</span>
          <h3 className="text-2xl font-black text-gray-800 mt-1">Rp 0</h3>
          <span className="text-[10px] text-red-500 font-bold absolute bottom-2 right-4">▼ 0%</span>
        </div>
      </section>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-12 text-center text-gray-400 text-sm font-medium">
        Tidak terhubung dengan database berisi data laporan aktif.
      </div>
    </div>
  )
}

export default AdminReports
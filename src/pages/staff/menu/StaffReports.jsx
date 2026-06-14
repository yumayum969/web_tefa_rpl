import { FileText } from 'lucide-react'

const StaffReports = ({ filterTanggal, setFilterTanggal, activeStaff }) => {
  return (
    <div className="space-y-6 text-left">
      <div>
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

      {/* TOMBOL EKSPOR - SUDAH BERSIH DARI EMOJI */}
      <div className="flex justify-end">
        <button className="px-5 py-2.5 bg-tefaDark hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer border-none">
          <FileText size={14} strokeWidth={2.5} />
          <span>Export ke PDF</span>
        </button>
      </div>
    </div>
  )
}

export default StaffReports
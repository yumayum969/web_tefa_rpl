import { AlertTriangle, Play, CheckCircle, Coins } from 'lucide-react'

const StaffOverview = ({ transactions }) => {
  return (
    <>
      <div className="text-left">
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Dashboard Utama</h2>
        <p className="text-xs text-gray-400 font-medium mt-1">Ringkasan aktivitas operasional Teaching Factory hari ini.</p>
      </div>

      {/* GRID LAYOUT KARTU - SUDAH SAMA PERSIS DENGAN FORMAT ADMIN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Daily Revenue</span>
            <h3 className="text-2xl font-black text-gray-800">Rp 220.000</h3>
          </div>
          <div className="text-2xl bg-green-50 p-3.5 rounded-xl text-green-600 flex items-center justify-center">
            <Coins size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Low Stock Alerts</span>
            <h3 className="text-2xl font-black text-rose-600">3 Item Kritis</h3>
          </div>
          <div className="text-2xl bg-rose-50 p-3.5 rounded-xl text-rose-600 flex items-center justify-center">
            <AlertTriangle size={24} strokeWidth={2.5} />
          </div>
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
                  <td>
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
                  <td className="px-6 py-4 text-center space-x-2 whitespace-nowrap">
                    <button className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-medium transition-all border border-blue-200 cursor-pointer inline-flex items-center space-x-1">
                      <Play size={10} strokeWidth={3} /> <span>Start</span>
                    </button>
                    <button className="px-3 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg text-xs font-medium transition-all border border-emerald-200 cursor-pointer inline-flex items-center space-x-1">
                      <CheckCircle size={10} strokeWidth={3} /> <span>Finish</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default StaffOverview
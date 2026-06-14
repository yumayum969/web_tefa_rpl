import { Layers, AlertTriangle } from 'lucide-react'

const StaffStock = ({ stockAlerts }) => {
  return (
    <div className="space-y-6 text-left">
      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Stock Management</h2>
        <p className="text-xs text-gray-400 font-medium mt-1">Pengawasan logistik material inventaris dan bahan baku cetak.</p>
      </div>

      {/* GRID LAYOUT KARTU - SUDAH SAMA PERSIS DENGAN FORMAT ADMIN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Jenis Stok</span>
            <h3 className="text-2xl font-black text-gray-800 mt-1">30 Item</h3>
          </div>
          <div className="text-2xl bg-blue-50 p-3.5 rounded-xl text-tefaBlue flex items-center justify-center">
            <Layers size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Item to Restock Soon</span>
            <h3 className="text-2xl font-black text-amber-600 mt-1">2 Item</h3>
          </div>
          <div className="text-2xl bg-amber-50 p-3.5 rounded-xl text-tefaOrange flex items-center justify-center">
            <AlertTriangle size={24} strokeWidth={2.5} />
          </div>
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
                  <td>
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
  )
}

export default StaffStock
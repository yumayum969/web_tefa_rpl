import { LayoutDashboard, FileText, Coins } from 'lucide-react'

const AdminOverview = () => {
  return (
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
          <div className="text-2xl bg-orange-50 p-3.5 rounded-xl text-tefaOrange flex items-center justify-center">
            <LayoutDashboard size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Logistik Kertas</span>
            <h3 className="text-2xl font-black text-gray-800">4.2 Rim</h3>
          </div>
          <div className="text-2xl bg-blue-50 p-3.5 rounded-xl text-tefaBlue flex items-center justify-center">
            <FileText size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Pendapatan Hari Ini</span>
            <h3 className="text-2xl font-black text-gray-800">Rp 425.000</h3>
          </div>
          <div className="text-2xl bg-green-50 p-3.5 rounded-xl text-green-600 flex items-center justify-center">
            <Coins size={24} />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminOverview
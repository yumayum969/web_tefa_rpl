import { useState } from 'react'
import { ArrowLeft, Search, Check } from 'lucide-react'

const TrackOrderPage = ({ formatRupiah, onNavigate }) => {
  const [searchInvoice, setSearchInvoice] = useState('')
  
  const [orderData] = useState({
    invoiceId: 'T040426-0001',
    tanggal: '13 Juni 2026',
    status: 'production', 
    estimasiSelesai: '14 Juni 2026 - 15:00 WIB',
    items: [
      { id: 1, nama: 'Cetak Buku Modul A4', varian: 'Jilid Softcover - Berwarna', jumlah: 2, harga: 75000 },
      { id: 2, nama: 'Nota Penjualan TeFa', varian: '2 Rangkap (NCR)', jumlah: 5, harga: 15000 }
    ],
    totalBayar: 225000
  })

  const [orderHistory] = useState([
    { id: 'T040426-0001', tanggal: '13 Juni 2026', total: 225000, status: 'In Production', labelColor: 'text-amber-600 bg-amber-50 border-amber-100' },
    { id: 'T030526-0089', tanggal: '28 Mei 2026', total: 60000, status: 'Ready for Pickup', labelColor: 'text-blue-600 bg-blue-50 border-blue-100' },
    { id: 'T020426-0012', tanggal: '10 Mei 2026', total: 42500, status: 'Completed', labelColor: 'text-green-600 bg-green-50 border-green-100' }
  ])

  const steps = [
    { id: 'verification', label: 'Waiting Verification', desc: 'Staf sedang memvalidasi bukti pembayaran' },
    { id: 'production', label: 'In Production', desc: 'Dokumen berada dalam antrean cetak mesin' },
    { id: 'ready', label: 'Ready for Pickup', desc: 'Pesanan selesai dan siap diambil di lab' }
  ]

  const currentStepIndex = steps.findIndex(step => step.id === orderData.status)

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12 px-4 sm:px-6 md:px-16 text-left grow">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* HEADER HALAMAN */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onNavigate('products')}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors text-sm font-bold shadow-xs cursor-pointer border-none flex items-center justify-center"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">Pelacakan & Riwayat Pesanan</h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">Pantau posisi antrean dan lihat rekaman seluruh transaksi TeFa Anda.</p>
          </div>
        </div>

        {/* FORM PENCARIAN INVOICE MANDIRI */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center space-x-2 focus-within:border-orange-300 transition-colors">
            <Search size={18} className="text-gray-400 shrink-0" strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Masukkan Nomor Invoice (Contoh: T040426-0001)"
              value={searchInvoice}
              onChange={(e) => setSearchInvoice(e.target.value)}
              className="w-full text-sm font-semibold text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
          <button className="px-6 py-3 bg-tefaOrange text-white font-bold text-sm rounded-xl hover:bg-orange-600 transition-colors cursor-pointer border-none shadow-sm">
            Cari Pesanan
          </button>
        </div>

        {/* TAMPILAN DETAIL PELACAKAN AKTIF */}
        {orderData && (
          <div className="space-y-6">
            
            {/* KARTU PROGRES STATUS */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-50 pb-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Nomor Invoice</span>
                  <span className="text-base font-black text-gray-800">{orderData.invoiceId}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Estimasi Selesai</span>
                  <span className="text-xs font-bold text-tefaBlue bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block mt-0.5">
                    {orderData.estimasiSelesai}
                  </span>
                </div>
              </div>

              {/* BAR INDIKATOR STATUS */}
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 pl-4 md:pl-0">
                <div className="absolute left-[23px] md:left-0 top-2 bottom-2 md:top-[15px] md:bottom-auto w-0.5 md:w-full md:h-0.5 bg-gray-100 -z-10" />
                <div 
                  className="absolute left-[23px] md:left-0 top-2 md:top-[15px] w-0.5 md:h-0.5 bg-tefaOrange -z-10 transition-all duration-500" 
                  style={{
                    height: window.innerWidth < 768 ? `${(currentStepIndex / (steps.length - 1)) * 100}%` : '2px',
                    width: window.innerWidth >= 768 ? `${(currentStepIndex / (steps.length - 1)) * 100}%` : '2px'
                  }}
                />

                {steps.map((step, index) => {
                  const isCompleted = index <= currentStepIndex
                  const isCurrent = index === currentStepIndex

                  return (
                    <div key={step.id} className="flex md:flex-col items-center md:text-center gap-4 md:gap-2 flex-1 relative z-10 w-full md:w-auto">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold transition-all border ${
                        isCompleted 
                          ? 'bg-tefaOrange text-white border-tefaOrange ring-4 ring-orange-100' 
                          : 'bg-white text-gray-400 border-gray-200'
                      }`}>
                        {isCompleted ? <Check size={10} strokeWidth={3} /> : <span className="text-[10px]">{index + 1}</span>}
                      </div>
                      <div className="text-left md:text-center">
                        <p className={`text-xs font-black ${isCurrent ? 'text-tefaOrange' : isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium max-w-xs mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* DETAIL RINGKASAN BARANG */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-black text-gray-800 uppercase tracking-wider">Rincian Item Produksi</h2>
              <div className="divide-y divide-gray-50 border-t border-b border-gray-50 py-2">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 text-xs">
                    <div>
                      <p className="font-bold text-gray-700">{item.nama}</p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{item.varian} • {item.jumlah} unit</p>
                    </div>
                    <span className="font-bold text-gray-800">{formatRupiah(item.harga * item.jumlah)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-2 font-bold text-sm">
                <span className="text-gray-500">Total Pembayaran (Lunas)</span>
                <span className="text-base font-black text-tefaOrange">{formatRupiah(orderData.totalBayar)}</span>
              </div>
            </div>

          </div>
        )}

        {/* TAMPILAN TABEL HISTORY PESANAN */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
          <div className="border-b border-gray-50 pb-3">
            <h2 className="text-sm font-black text-gray-800 uppercase tracking-wider">Riwayat Transaksi Anda</h2>
            <p className="text-[11px] text-gray-400 font-medium mt-0.5">Daftar invoice pengerjaan cetak yang pernah Anda lakukan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-2">No. Invoice</th>
                  <th className="py-3 px-2">Tanggal Transaksi</th>
                  <th className="py-3 px-2">Total Biaya</th>
                  <th className="py-3 px-2 text-center">Status Produksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 font-semibold text-gray-700">
                {orderHistory.map((history) => (
                  <tr key={history.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-2 font-black text-gray-900">{history.id}</td>
                    <td className="py-3.5 px-2 text-gray-500">{history.tanggal}</td>
                    <td className="py-3.5 px-2 text-gray-800">{formatRupiah(history.total)}</td>
                    <td className="py-3.5 px-2 text-center">
                      <span className={`px-2.5 py-1 border rounded-md text-[10px] font-black inline-block min-w-28 text-center ${history.labelColor}`}>
                        {history.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrackOrderPage
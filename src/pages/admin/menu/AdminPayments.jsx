const AdminPayments = () => {
  return (
    <div className="space-y-6 text-left">
      <div>
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
  )
}

export default AdminPayments
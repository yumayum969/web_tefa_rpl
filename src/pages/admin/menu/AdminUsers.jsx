const AdminUsers = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Manajemen Pengguna</h2>
          <p className="text-xs text-gray-400 font-medium mt-1">Pengaturan akun hak akses bagi elemen admin, staf, dan pelanggan.</p>
        </div>
        <button className="px-5 py-2.5 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all shrink-0 border-none">
          + Tambah Akun Baru
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Admin Aktif</span>
          <h3 className="text-xl font-black text-gray-800 mt-0.5">2 Akun</h3>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Staff Aktif</span>
          <h3 className="text-xl font-black text-gray-800 mt-0.5">5 Akun</h3>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
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
  )
}

export default AdminUsers
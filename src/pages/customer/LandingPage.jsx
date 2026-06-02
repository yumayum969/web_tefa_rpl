import { useState } from 'react'

const LandingPage = () => {
  // State untuk kolom pencarian/lacak pesanan
  const [searchId, setSearchId] = useState('')

  return (
    <div className="w-full bg-gray-50 font-poppins flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Selamat datang <br />
            di <span className="text-tefaOrange">TeFa RPL</span> <br />
            SMKN 1 Surabaya
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-md">
            Solusi percetakan berkualitas segala macam tugas anda
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-3.5 bg-tefaOrange text-white font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Pesan Sekarang
          </a>
        </div>
        
        {/* Placeholder Ilustrasi Karakter/Mesin Cetak */}
        <div className="flex justify-center items-center bg-orange-50 rounded-3xl p-8 aspect-video md:aspect-square shadow-inner">
          <div className="text-center space-y-2">
            <span className="text-6xl">🖨️</span>
            <p className="text-sm text-tefaOrange font-semibold tracking-wider uppercase">
              Grafik Ilustrasi TeFa RPL
            </p>
          </div>
        </div>
      </section>

      {/* 2. LAYANAN UNGGULAN KAMI */}
      <section id="products" className="bg-white py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">Layanan unggulan kami</h2>
            <p className="text-gray-500 font-medium">Berkualitas tinggi, proses cepat, pembayaran mudah</p>
          </div>

          {/* Grid Cards Jasa dengan Bayangan Timbul Sesuai Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            {/* Card 1: Cetak Dokumen */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <span className="text-5xl">📄</span>
              <h3 className="font-bold text-lg text-gray-800">Cetak Dokumen</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 500/lbr
              </span>
              <button className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer">
                Pesan Sekarang
              </button>
            </div>

            {/* Card 2: Cetak ID Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <span className="text-5xl">🪪</span>
              <h3 className="font-bold text-lg text-gray-800">Cetak ID Card</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 5000
              </span>
              <button className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer">
                Pesan Sekarang
              </button>
            </div>

            {/* Card 3: Fotocopy */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <span className="text-5xl">📠</span>
              <h3 className="font-bold text-lg text-gray-800">Fotocopy Dokumen</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 500/lbr
              </span>
              <button className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer">
                Pesan Sekarang
              </button>
            </div>
          </div>

          <button className="px-6 py-2.5 border border-tefaOrange text-tefaOrange font-semibold rounded-full text-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer shadow-sm">
            Lihat semua layanan
          </button>
        </div>
      </section>

      {/* 3. MENGAPA MEMILIH TEFA RPL? */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-800">Mengapa memilih TeFa RPL?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
          {/* Keunggulan 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <span className="text-4xl text-tefaOrange">🛡️</span>
            <h4 className="font-bold text-gray-800 text-lg">Kualitas terjamin</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Hasil cetak dan produksi menggunakan mesin yang berkualitas.
            </p>
          </div>

          {/* Keunggulan 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <span className="text-4xl text-tefaOrange">⏳</span>
            <h4 className="font-bold text-gray-800 text-lg">Sistem antrian FIFO</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Sistem otomatis mengurutkan pengerjaan berdasarkan pesanan yang masuk terlebih dahulu.
            </p>
          </div>

          {/* Keunggulan 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <span className="text-4xl text-tefaOrange">📱</span>
            <h4 className="font-bold text-gray-800 text-lg">Pembayaran QRIS</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Kemudahan transaksi digital yang cepat, aman, dan tercatat otomatis.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LACAK PESANAN */}
      <section id="track" className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Lacak pesanan anda</h2>
          
          <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg focus-within:border-tefaOrange focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200">
            <div className="flex items-center pl-5 w-full">
              <span className="text-gray-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Masukkan ID pesanan (contoh : T040426-0001)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full px-4 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none font-medium bg-transparent"
              />
            </div>
            <button className="w-full sm:w-auto px-10 py-4 bg-tefaOrange text-white font-bold text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer whitespace-nowrap">
              Lacak Sekarang
            </button>
          </div>

          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            Untuk melihat riwayat lebih lengkap, silahkan{' '}
            <a href="#login" className="text-tefaBlue font-semibold hover:underline">
              login ke akun anda.
            </a>
          </p>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
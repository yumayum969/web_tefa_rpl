import { useState } from 'react'
import { Printer, FileText, IdCard, Copy, ShieldCheck, Hourglass, QrCode, Search } from 'lucide-react'

const LandingPage = ({ onNavigate }) => {
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
          <button
            onClick={() => onNavigate('products')}
            className="inline-block px-8 py-3.5 bg-tefaOrange text-white font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center border-none"
          >
            Pesan Sekarang
          </button>
        </div>
        
        <div className="flex justify-center items-center bg-orange-50 rounded-3xl p-8 aspect-video md:aspect-square shadow-inner">
          <div className="flex flex-col items-center space-y-3 text-center">
            <Printer size={64} className="text-tefaOrange" strokeWidth={1.5} />
            <p className="text-sm text-tefaOrange font-semibold tracking-wider uppercase">
              Grafik Ilustrasi TeFa RPL
            </p>
          </div>
        </div>
      </section>

      {/* 2. LAYANAN UNGGULAN KAMI */}
      <section className="bg-white py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">Layanan unggulan kami</h2>
            <p className="text-gray-500 font-medium">Berkualitas tinggi, proses cepat, pembayaran mudah</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            {/* Card 1: Cetak Dokumen */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <FileText size={48} className="text-tefaOrange" strokeWidth={1.5} />
              <h3 className="font-bold text-lg text-gray-800">Cetak Dokumen</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 500/lbr
              </span>
              <button 
                onClick={() => onNavigate('products')}
                className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer border-none"
              >
                Pesan Sekarang
              </button>
            </div>

            {/* Card 2: Cetak ID Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <IdCard size={48} className="text-tefaOrange" strokeWidth={1.5} />
              <h3 className="font-bold text-lg text-gray-800">Cetak ID Card</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 5000
              </span>
              <button 
                onClick={() => onNavigate('products')}
                className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer border-none"
              >
                Pesan Sekarang
              </button>
            </div>

            {/* Card 3: Fotocopy */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-4">
              <Copy size={48} className="text-tefaOrange" strokeWidth={1.5} />
              <h3 className="font-bold text-lg text-gray-800">Fotocopy Dokumen</h3>
              <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                Mulai dari Rp. 500/lbr
              </span>
              <button 
                onClick={() => onNavigate('products')}
                className="w-full py-2.5 bg-tefaOrange text-white font-semibold rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer border-none"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('products')}
            className="px-6 py-2.5 border border-tefaOrange text-tefaOrange font-semibold rounded-full text-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer shadow-sm bg-transparent"
          >
            Lihat semua layanan
          </button>
        </div>
      </section>

      {/* 3. MENGAPA MEMILIH TEFA RPL? */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-800">Mengapa memilih TeFa RPL?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <ShieldCheck size={40} className="text-tefaOrange" strokeWidth={2} />
            <h4 className="font-bold text-gray-800 text-lg">Kualitas terjamin</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Hasil cetak dan produksi menggunakan mesin yang berkualitas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <Hourglass size={40} className="text-tefaOrange" strokeWidth={2} />
            <h4 className="font-bold text-gray-800 text-lg">Sistem antrian FIFO</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Sistem otomatis mengurutkan pengerjaan berdasarkan pesanan yang masuk terlebih dahulu.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <QrCode size={40} className="text-tefaOrange" strokeWidth={2} />
            <h4 className="font-bold text-gray-800 text-lg">Pembayaran QRIS</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Kemudahan transaksi digital yang cepat, aman, and tercatat otomatis.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LACAK PESANAN */}
      <section id="track" className="bg-white py-20 border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Lacak pesanan anda</h2>
          
          <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg focus-within:border-tefaOrange focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200">
            <div className="flex items-center pl-5 w-full space-x-2">
              <Search size={20} className="text-gray-400 shrink-0" strokeWidth={2.5} />
              <input
                type="text"
                placeholder="Masukkan ID pesanan (contoh : T040426-0001)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full px-2 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none font-medium bg-transparent"
              />
            </div>
            <button className="w-full sm:w-auto px-10 py-4 bg-tefaOrange text-white font-bold text-sm hover:bg-orange-500 transition-colors duration-300 shadow-md cursor-pointer whitespace-nowrap border-none">
              Lacak Sekarang
            </button>
          </div>

          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            Untuk melihat riwayat lebih lengkap, silahkan{' '}
            <button onClick={() => onNavigate('login')} className="text-tefaBlue font-semibold hover:underline cursor-pointer bg-transparent border-none p-0 outline-none">
              login ke akun anda.
            </button>
          </p>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
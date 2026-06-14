import { useState } from 'react'
import { ArrowLeft, CreditCard, UploadCloud, ShieldCheck } from 'lucide-react'

const PaymentPage = ({ cartItems = [], subTotal = 0, totalBelanja = 0, formatRupiah, onNavigate }) => {
  const [buktiBayar, setBuktiBayar] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setBuktiBayar(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleKonfirmasiPembayaran = (e) => {
    e.preventDefault()
    if (!buktiBayar) {
      alert("Harap unggah bukti pembayaran QRIS Anda terlebih dahulu!")
      return
    }

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Bukti pembayaran berhasil diunggah! Antrean Anda masuk ke status 'Waiting Verification' oleh Staf TeFa. 🚀")
      onNavigate('products')
    }, 2000)
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12 px-4 sm:px-6 md:px-16 text-left grow">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER HALAMAN */}
        <div className="flex items-center space-x-3 mb-8">
          <button 
            onClick={() => onNavigate('cart')}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors text-sm font-bold shadow-xs cursor-pointer border-none flex items-center justify-center"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">Gerbang Pembayaran TeFa</h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">Selesaikan pembayaran QRIS untuk memvalidasi nomor antrean produksi Anda.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* BOX 1: BARCODE QRIS */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row items-center gap-6">
              <div className="w-44 h-44 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-2 shrink-0 shadow-inner">
                <div className="w-full h-full bg-gray-800 rounded-xl flex flex-col items-center justify-center text-white text-center p-2 relative overflow-hidden">
                  <span className="text-xs font-black tracking-widest text-orange-400">QRIS STATIS</span>
                  <div className="w-24 h-24 bg-white my-1 flex items-center justify-center text-xl">
                    🔳
                  </div>
                  <span className="text-[9px] font-bold tracking-tight text-gray-300">TEFA RPL</span>
                </div>
              </div>
              
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-orange-50 text-tefaOrange border border-orange-100 rounded-full text-xs font-black">
                  <CreditCard size={12} className="text-tefaOrange" />
                  <span>Metode Pembayaran Instan</span>
                </div>
                <h2 className="text-lg font-black text-gray-800">Pindai QRIS Resmi TeFa RPL</h2>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  Silakan buka aplikasi M-Banking (myBCA, Mandiri, BRI, BNI) atau e-Wallet (Gopay, OVO, Dana, ShopeePay) Anda. Scan barcode di samping and masukkan nominal transfer tepat sesuai dengan nilai total bayar invoice.
                </p>
              </div>
            </div>

            {/* BOX 2: FORM UNGGAH BUKTI BAYAR */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
              <h2 className="text-base font-black text-gray-800">Unggah Berkas Bukti Pembayaran</h2>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Kirimkan tangkapan layar (*screenshot*) atau foto struk transfer yang sah dari aplikasi keuangan Anda di bawah ini:
              </p>

              <form onSubmit={handleKonfirmasiPembayaran} className="space-y-4">
                <div className="border-2 border-dashed border-gray-200 hover:border-orange-300 rounded-2xl p-6 text-center transition-colors relative bg-gray-50/50">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {previewUrl ? (
                    <div className="space-y-2 flex flex-col items-center justify-center">
                      <img 
                        src={previewUrl} 
                        alt="Preview Bukti Transfer" 
                        className="max-h-48 rounded-xl object-contain shadow-sm border border-gray-200"
                      />
                      <p className="text-xs font-bold text-tefaBlue">✨ {buktiBayar?.name}</p>
                      <p className="text-[10px] text-gray-400 font-medium">Klik atau seret file baru jika ingin mengganti gambar</p>
                    </div>
                  ) : (
                    <div className="space-y-2 py-4 flex flex-col items-center justify-center">
                      <UploadCloud size={40} className="text-gray-400" strokeWidth={1.5} />
                      <p className="text-sm font-bold text-gray-700 mt-2">Pilih Berkas Struk Pembayaran</p>
                      <p className="text-xs text-gray-400 font-medium">Mendukung format gambar PNG, JPG, atau JPEG</p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !buktiBayar}
                  className={`w-full py-3.5 text-white font-black rounded-full text-sm shadow-md transition-all text-center block cursor-pointer border-none ${
                    buktiBayar && !isSubmitting 
                      ? 'bg-tefaOrange hover:bg-orange-600 active:scale-98' 
                      : 'bg-gray-300 cursor-not-allowed shadow-none'
                  }`}
                >
                  {isSubmitting ? "Sedang Mengirim Bukti... ⏳" : "Konfirmasi & Kirim Bukti Pembayaran 🔒"}
                </button>
              </form>
            </div>

          </div>

          {/* KOLOM KANAN */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Detail Tagihan Invoice</h2>
              <p className="text-xs text-gray-400 font-medium">Verifikasi rincian nilai transaksi Anda</p>
            </div>

            {/* DAFTAR ITEM DARI KERANJANG */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-1 border-b border-gray-100 pb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-xs font-medium">
                  <div className="max-w-[70%]">
                    <p className="font-bold text-gray-700 truncate">{item.nama}</p>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">{item.jumlah} unit x {formatRupiah(item.harga_satuan)}</p>
                  </div>
                  <span className="font-bold text-gray-800">{formatRupiah(item.harga_satuan * item.jumlah)}</span>
                </div>
              ))}
              {cartItems.length === 0 && (
                <p className="text-xs text-gray-400 italic text-center py-2">Tidak ada item terdeteksi.</p>
              )}
            </div>

            {/* RINGKASAN NOMINAL */}
            <div className="space-y-3 text-sm font-semibold border-b border-gray-100 pb-4">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal Jasa</span>
                <span className="text-gray-800">{formatRupiah(subTotal)}</span>
              </div>
            </div>

            {/* TOTAL HARGA AKHIR */}
            <div className="flex justify-between items-center font-bold bg-orange-50/50 border border-orange-100/50 p-4 rounded-2xl">
              <div className="flex flex-col">
                <span className="text-gray-700 text-xs font-bold">Wajib Ditransfer:</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">Sesuai nominal total item</span>
              </div>
              <span className="text-xl font-black text-tefaOrange">
                {formatRupiah(totalBelanja)}
              </span>
            </div>

            {/* NOTIFIKASI JAMINAN KEAMANAN */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start space-x-3">
              <ShieldCheck size={18} className="text-gray-400 mt-0.5 shrink-0" strokeWidth={2.5} />
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                Sistem manajemen antrean TeFa menggunakan prinsip **First In First Out (FIFO)**. Unggah bukti transfer Anda sesegera mungkin agar pengerjaan cetak dokumen tidak didahului oleh pesanan pelanggan lain.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PaymentPage
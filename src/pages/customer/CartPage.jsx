import { ArrowLeft, ShoppingCart, Paperclip, Trash2, Info } from 'lucide-react'

const CartPage = ({ onNavigate, cartItems, setCartItems, subTotal, totalBelanja, formatRupiah }) => {

  const updateKuantitas = (id, jenis) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const jumlahBaru = jenis === 'tambah' ? item.jumlah + 1 : item.jumlah - 1
          return { ...item, jumlah: jumlahBaru > 0 ? jumlahBaru : 1 }
        }
        return item
      })
    )
  }

  const handleInputChange = (id, value) => {
    const parsedValue = parseInt(value, 10)
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, jumlah: isNaN(parsedValue) ? 0 : parsedValue }
        }
        return item
      })
    )
  }

  const validateBlur = (id, value) => {
    const parsedValue = parseInt(value, 10)
    if (isNaN(parsedValue) || parsedValue <= 0) {
      hapusItem(id)
    }
  }

  const hapusItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12 px-4 sm:px-6 md:px-16 text-left grow">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER HALAMAN */}
        <div className="flex items-center space-x-3 mb-6">
          <button 
            onClick={() => onNavigate('products')}
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors text-sm font-bold shadow-xs cursor-pointer border-none flex items-center justify-center"
          >
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">Keranjang Belanja Anda</h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">Konfirmasi daftar antrean produksi cetak TeFa RPL.</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-xs space-y-4 max-w-xl mx-auto my-12 flex flex-col items-center">
            <ShoppingCart size={64} className="text-gray-300" strokeWidth={1.5} />
            <h2 className="text-xl font-bold text-gray-800">Keranjang belanja kosong</h2>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Anda belum memilih layanan percetakan unggulan kami hari ini.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-2.5 bg-tefaOrange text-white font-bold text-sm rounded-full hover:bg-orange-500 transition-colors cursor-pointer shadow-md border-none inline-block"
            >
              Jelajahi Layanan Cetak
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* KOLOM KIRI: DAFTAR BARIS ITEM */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left hover:border-orange-200 transition-all"
                >
                  {/* DETAIL LAYANAN DOKUMEN */}
                  <div className="flex items-start space-x-4 grow">
                    <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-inner">
                      {item.emoji}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-gray-800 text-base leading-tight">
                        {item.nama}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        {item.varian}
                      </p>
                      
                      {/* RINCIAN PERKALIAN BARANG X HARGA PER PCS */}
                      <p className="text-[11px] text-gray-400 font-bold tracking-wide mt-1">
                        Rincian: {item.jumlah} unit x {formatRupiah(item.harga_satuan)}
                      </p>

                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-blue-50 text-tefaBlue border border-blue-100 rounded-lg text-xs font-bold mt-1.5">
                        <Paperclip size={12} className="text-tefaBlue shrink-0" strokeWidth={2.5} />
                        <span className="truncate max-w-45 sm:max-w-xs">{item.file_name}</span>
                      </div>
                    </div>
                  </div>

                  {/* KONTROL OPERASIONAL KANAN */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 border-t sm:border-none pt-3 sm:pt-0 border-gray-100">
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Subtotal</span>
                      <span className="text-lg font-bold text-gray-800">
                        {formatRupiah(item.harga_satuan * item.jumlah)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                      {/* BINGKAI COUNTER */}
                      <div className="flex items-center bg-gray-100 rounded-full px-4 h-10 w-36 border border-gray-200/80 shadow-inner justify-between select-none shrink-0">
                        <button 
                          onClick={() => updateKuantitas(item.id, 'kurang')}
                          className="w-7 h-7 bg-white text-gray-700 rounded-full flex items-center justify-center font-bold text-sm shadow-xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border-none shrink-0"
                        >
                          -
                        </button>
                        
                        <input
                          type="number"
                          value={item.jumlah === 0 ? '' : item.jumlah}
                          onChange={(e) => handleInputChange(item.id, e.target.value)}
                          onBlur={(e) => validateBlur(item.id, e.target.value)}
                          className="w-12 text-center font-black text-sm text-gray-800 bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-0 m-0"
                        />
                        
                        <button 
                          onClick={() => updateKuantitas(item.id, 'tambah')}
                          className="w-7 h-7 bg-white text-gray-700 rounded-full flex items-center justify-center font-bold text-sm shadow-xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer border-none shrink-0"
                        >
                          +
                        </button>
                      </div>

                      {/* TOMBOL HAPUS BARIS */}
                      <button 
                        onClick={() => hapusItem(item.id)}
                        className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-xl transition-colors cursor-pointer border-none active:scale-95 shadow-xs flex items-center justify-center w-9 h-9 shrink-0"
                        title="Hapus dari keranjang"
                      >
                        <Trash2 size={16} className="text-rose-500" strokeWidth={2.5} />
                      </button>
                    </div>

                    <span className="text-base font-bold text-gray-800 sm:hidden">
                      {formatRupiah(item.harga_satuan * item.jumlah)}
                    </span>
                  </div>

                </div>
              ))}
            </div>

            {/* KOLOM KANAN: RINGKASAN BELANJA */}
            <div className="lg:sticky lg:top-24 bg-white border border-gray-100 rounded-3xl p-6 shadow-md text-left space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Ringkasan Belanja</h2>
                <p className="text-xs text-gray-400 font-medium">Rincian invoice antrean pesanan Anda</p>
              </div>

              <div className="space-y-3 text-sm font-semibold border-t border-b border-gray-100 py-4">
                <div className="flex justify-between text-gray-500">
                  <span>Total Harga Item ({cartItems.reduce((acc, item) => acc + item.jumlah, 0)} unit)</span>
                  <span className="text-gray-800">{formatRupiah(subTotal)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center font-bold">
                <div className="flex flex-col">
                  <span className="text-gray-800 text-base">Total Bayar</span>
                </div>
                <span className="text-xl font-black text-tefaOrange">
                  {formatRupiah(totalBelanja)}
                </span>
              </div>

              <button 
                onClick={() => onNavigate('payment')}
                className="w-full py-3.5 bg-tefaOrange text-white font-bold rounded-full text-sm hover:bg-orange-600 shadow-md hover:shadow-lg transition-all text-center block cursor-pointer border-none flex items-center justify-center space-x-1"
              >
                <span>Lanjut ke Pembayaran</span>
                <span>🔒</span>
              </button>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start space-x-2">
                <Info size={16} className="text-gray-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  Pesanan Anda akan diproses berdasarkan sistem kronologis **First In First Out (FIFO)** setelah bukti pembayaran QRIS terkonfirmasi sukses oleh Staff TeFa RPL.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default CartPage
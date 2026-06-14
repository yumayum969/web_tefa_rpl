import { useState } from 'react';
import { AlertTriangle, Search, ArrowLeft } from 'lucide-react';

const ProductsPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('low');

  const [products] = useState([
    { id: 1, nama: 'Print hitam putih A4', harga: 500, kategori: 'Print' },
    { id: 2, nama: 'Print warna A4', harga: 1000, kategori: 'Print' },
    { id: 3, nama: 'Print full warna A4', harga: 2000, kategori: 'Print' },
    { id: 4, nama: 'Print hitam putih A5', harga: 250, kategori: 'Print' },
    { id: 5, nama: 'Print warna A5', harga: 750, kategori: 'Print' },
    { id: 6, nama: 'Print full warna A5', harga: 1500, kategori: 'Print' },
    { id: 7, nama: 'Print hitam putih F4', harga: 750, kategori: 'Print' },
    { id: 8, nama: 'Print warna F4', harga: 1500, kategori: 'Print' },
    { id: 9, nama: 'Print full warna F4', harga: 3000, kategori: 'Print' },
    { id: 10, nama: 'Buffalo putih A4', harga: 800, kategori: 'Stationery' },
    { id: 11, nama: 'Cetak ID card 1 sisi', harga: 2500, kategori: 'ID Card' },
    { id: 12, nama: 'Cetak ID card 2 sisi', harga: 5000, kategori: 'ID Card' },
  ]);

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.kategori === selectedCategory;
      const matchesSearch = product.nama.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      return sortOrder === 'low' ? a.harga - b.harga : b.harga - a.harga;
    });

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12 px-6 md:px-16 text-left">
      
      {/* TOMBOL NAVIGASI KEMBALI */}
      <div className="mb-6">
        <button 
          onClick={() => onNavigate('landing')}
          className="text-xs font-bold text-gray-500 hover:text-tefaOrange transition-colors cursor-pointer border-none bg-transparent flex items-center space-x-1 p-0"
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* IMPLEMENTASI ALERT BOX EDUKASI KUANTITAS HALAMAN CETAK */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex items-start space-x-3.5 shadow-xs">
        <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" strokeWidth={2.5} />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-900 text-sm tracking-tight">
            Panduan Penting Before Memesan Layanan Cetak TeFa:
          </h4>
          <ul className="list-disc list-inside text-xs text-amber-800 font-medium space-y-1 mt-1.5 leading-relaxed">
            <li>
              <strong className="text-amber-950">Hitungan Jumlah Halaman:</strong> Mohon pastikan jumlah <span className="font-bold underline">Kuantitas Produk</span> yang Anda masukkan ke keranjang sesuai dengan jumlah total keseluruhan halaman dokumen di dalam file Anda. (Contoh: Jika file PDF Anda berisi 10 halaman, mohon isi kuantitas sebanyak 10).
            </li>
            <li>
              <strong className="text-amber-950">Validasi Kesesuaian Varian:</strong> Pastikan jenis varian kertas dan tinta yang dipilih (Warna/Hitam Putih) sudah cocok dengan isi dokumen asli agar tidak terjadi pembatalan otomatis oleh Staf Produksi.
            </li>
          </ul>
        </div>
      </div>

      {/* IMPLEMENTASI PREMIUM GLASSMORPHISM STICKY FILTER PANEL */}
      <div className="sticky top-20 z-40 flex flex-col md:flex-row gap-4 justify-between items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xs border border-gray-100/80 mb-10 transition-all duration-300">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 rounded-xl p-2.5 text-xs font-semibold bg-white outline-none focus:border-tefaOrange cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Print">Print</option>
            <option value="ID Card">ID Card</option>
            <option value="Stationery">Stationery</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-200 rounded-xl p-2.5 text-xs font-semibold bg-white outline-none focus:border-tefaOrange cursor-pointer"
          >
            <option value="low">Sort by Lower Price</option>
            <option value="high">Sort by Higher Price</option>
          </select>
        </div>

        <div className="w-full md:w-80 flex items-center border border-gray-200 bg-white rounded-xl px-4 py-2 focus-within:border-tefaOrange transition-all space-x-2">
          <Search size={16} className="text-gray-400 shrink-0" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-1 text-xs text-gray-700 placeholder-gray-400 outline-none font-medium bg-transparent"
          />
        </div>
      </div>

      {/* GRID AREA LAYANAN PRODUK UTUH */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-4 font-bold text-sm">
                  Image Placeholder
                </div>
                <span className="text-[10px] bg-orange-50 text-tefaOrange px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                  {product.kategori}
                </span>
                <h3 className="font-bold text-gray-800 text-sm mt-2.5 h-10 line-clamp-2">
                  {product.nama}
                </h3>
              </div>
              
              <div className="mt-4 border-t border-gray-50 pt-3">
                <p className="text-xs text-gray-400 font-medium">Harga Layanan</p>
                <p className="font-black text-gray-900 text-base mt-0.5">
                  Rp {product.harga.toLocaleString('id-ID')}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold text-[11px] rounded-xl border border-gray-200 transition-colors cursor-pointer">
                    Details
                  </button>
                  <button className="py-2 bg-tefaOrange hover:bg-orange-600 text-white font-bold text-[11px] rounded-xl shadow-sm transition-colors cursor-pointer border-none">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 font-medium text-sm">
            Produk layanan cetak tidak ditemukan.
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductsPage;
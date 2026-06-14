import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/customer/LandingPage'
import ProductsPage from './pages/customer/ProductsPage'
import CartPage from './pages/customer/CartPage'
import PaymentPage from './pages/customer/PaymentPage'
import TrackOrderPage from './pages/customer/TrackOrderPage'

import Login from './pages/customer/Login'
import Register from './pages/customer/Register'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import DashboardStaff from './pages/staff/DashboardStaff'

const App = () => {
  // MENGUBAH DEFAULT STATE KE 'staff' AGAR LANGSUNG MASUK KE MODE DASHBOARD STAFF SAAT REFRESH
  const [currentPage, setCurrentPage] = useState('staff')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // MEMBERSIHKAN EMOJI STATIS PADA GLOBAL STATE ANTREAN KERANJANG
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nama: "Cetak Dokumen Tugas Akhir",
      varian: "Ukuran A4 • Tinta Hitam Putih (B&W) • HVS 80gr",
      file_name: "Draft_Tugas_Akhir_Yuma.pdf",
      harga_satuan: 500,
      jumlah: 120,
    },
    {
      id: 2,
      nama: "Cetak ID Card Member Anggota",
      varian: "Cetak 2 Sisi (Bolak-balik) • Bahan PVC Premium Glossy",
      file_name: "Aset_Desain_IDCard.zip",
      harga_satuan: 5000,
      jumlah: 5,
    },
    {
      id: 3,
      nama: "Fotocopy Modul Pembelajaran Jaringan",
      varian: "Ukuran F4/Folio • Staples & Jilid Lakban",
      file_name: "Modul_Mata_Kuliah_Framework.pdf",
      harga_satuan: 500,
      jumlah: 85,
    }
  ])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const subTotal = cartItems.reduce((acc, item) => acc + (item.harga_satuan * item.jumlah), 0)
  const totalBelanja = subTotal

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka)
  }

  const isFullLayoutPage = currentPage === 'login' || currentPage === 'register' || currentPage === 'admin' || currentPage === 'staff'

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins text-gray-800">
      {!isFullLayoutPage && (
        <Header 
          onNavigate={handleNavigate} 
          currentPage={currentPage} 
          isLoggedIn={isLoggedIn} 
          onLogout={() => setIsLoggedIn(false)}
        />
      )}

      <main className="grow flex flex-col">
        {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        
        {/* Rute CartPage */}
        {currentPage === 'cart' && (
          <CartPage 
            onNavigate={handleNavigate} 
            cartItems={cartItems} 
            setCartItems={setCartItems}
            subTotal={subTotal}
            totalBelanja={totalBelanja}
            formatRupiah={formatRupiah}
          />
        )}

        {/* Rute PaymentPage */}
        {currentPage === 'payment' && (
          <PaymentPage 
            onNavigate={handleNavigate} 
            cartItems={cartItems}
            subTotal={subTotal}
            totalBelanja={totalBelanja}
            formatRupiah={formatRupiah}
          />
        )}

        {/* Rute TrackOrderPage */}
        {currentPage === 'track' && (
          <TrackOrderPage 
            onNavigate={handleNavigate}
            formatRupiah={formatRupiah}
          />
        )}

        {currentPage === 'login' && <Login onNavigate={handleNavigate} />}
        {currentPage === 'register' && <Register onNavigate={handleNavigate} />}
        {currentPage === 'admin' && <DashboardAdmin onNavigate={handleNavigate} />}
        {currentPage === 'staff' && <DashboardStaff onNavigate={handleNavigate} />}
      </main>

      {!isFullLayoutPage && <Footer onNavigate={handleNavigate} />}
    </div>
  )
}

export default App
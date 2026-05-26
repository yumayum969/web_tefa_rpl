import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/customer/LandingPage'
import Login from './pages/customer/Login'
import Register from './pages/customer/Register'
import DashboardAdmin from './pages/admin/DashboardAdmin'

const App = () => {
  // Sementara kita set default ke 'admin' agar browsermu langsung memuat Dashboard Admin kawan
  // Nilai valid: 'landing' | 'login' | 'register' | 'admin'
  const [currentPage, setCurrentPage] = useState('admin')

  // Cek apakah halaman saat ini membutuhkan full layout tanpa Header & Footer kawan
  const isFullLayoutPage = currentPage === 'login' || currentPage === 'register' || currentPage === 'admin'

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins text-gray-800">
      {/* Header hanya muncul jika BUKAN halaman full layout kawan */}
      {!isFullLayoutPage && <Header onNavigate={setCurrentPage} currentPage={currentPage} />}

      <main className="grow flex flex-col">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'login' && <Login onNavigate={setCurrentPage} />}
        {currentPage === 'register' && <Register onNavigate={setCurrentPage} />}
        {currentPage === 'admin' && <DashboardAdmin onNavigate={setCurrentPage} />}
      </main>

      {/* Footer hanya muncul jika BUKAN halaman full layout kawan */}
      {!isFullLayoutPage && <Footer />}
    </div>
  )
}

export default App
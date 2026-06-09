import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/customer/LandingPage'
import Login from './pages/customer/Login'
import Register from './pages/customer/Register'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import DashboardStaff from './pages/staff/DashboardStaff'

const App = () => {
  // Ubah nilai di bawah ini dari 'admin' menjadi 'staff' untuk pengujian sementara
  const [currentPage, setCurrentPage] = useState('staff')

  const isFullLayoutPage = currentPage === 'login' || currentPage === 'register' || currentPage === 'admin' || currentPage === 'staff'

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins text-gray-800">
      {!isFullLayoutPage && <Header onNavigate={setCurrentPage} currentPage={currentPage} />}

      <main className="grow flex flex-col">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'login' && <Login onNavigate={setCurrentPage} />}
        {currentPage === 'register' && <Register onNavigate={setCurrentPage} />}
        {currentPage === 'admin' && <DashboardAdmin onNavigate={setCurrentPage} />}
        {currentPage === 'staff' && <DashboardStaff onNavigate={setCurrentPage} />}
      </main>

      {!isFullLayoutPage && <Footer />}
    </div>
  )
}

export default App
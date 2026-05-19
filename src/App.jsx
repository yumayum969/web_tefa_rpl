import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/customer/LandingPage'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-poppins">
      {/* Memanggil Navbar Global */}
      <Header />

      {/* Memanggil Halaman Utama (Landing Page) Pelanggan */}
      <main className="grow">
        <LandingPage />
      </main>

      {/* Memanggil Kaki Halaman Global */}
      <Footer />
    </div>
  )
}

export default App
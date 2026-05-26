import { useState } from 'react'

const Register = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-white overflow-hidden font-poppins">
      
      {/* SISI KIRI: Area Ilustrasi Warna Oranye (Tanpa Logo Atas) kawan */}
      <div className="hidden lg:flex lg:w-1/2 bg-tefaOrange items-center justify-center p-12">
        <div className="text-center space-y-6">
          <div className="text-[130px] leading-none animate-pulse">📋</div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Daftar Sekarang</h1>
            <p className="text-orange-100 font-medium text-lg">Bergabunglah dengan pelanggan TeFa RPL</p>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Form Register kawan */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 relative overflow-y-auto">
        {/* Tombol Tutup / Kembali ke Landing Page */}
        <button 
          onClick={() => onNavigate('landing')}
          className="absolute top-8 right-8 text-gray-400 hover:text-tefaOrange font-bold text-xs tracking-wider transition-colors cursor-pointer"
        >
          ✕ TUTUP
        </button>

        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Buat Akun</h2>
            <p className="text-gray-400 font-medium text-sm">Lengkapi data Anda untuk mulai memesan kawan</p>
          </div>

          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaOrange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="mail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaOrange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaOrange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaOrange focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 hover:text-tefaOrange cursor-pointer"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-tefaOrange text-white font-bold rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-500 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer mt-4 text-sm tracking-wide">
              Daftar Sekarang
            </button>
          </form>

          <p className="text-sm text-gray-400 font-medium pt-2 text-left">
            Sudah punya akun? {' '}
            <button onClick={() => onNavigate('login')} className="text-tefaBlue font-bold hover:underline cursor-pointer bg-transparent border-none">Masuk di sini</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
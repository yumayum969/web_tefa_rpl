import { useState } from 'react'

const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-white overflow-hidden font-poppins">
      
      {/* SISI KIRI: Area Ilustrasi Warna Biru */}
      <div className="hidden lg:flex lg:w-1/2 bg-tefaBlue items-center justify-center p-12">
        <div className="text-center space-y-6">
          <div className="text-[130px] leading-none animate-bounce duration-1000">🖨️</div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">TeFa RPL SMKN 1</h1>
            <p className="text-blue-100 font-medium text-lg">Solusi percetakan berkualitas di Surabaya</p>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Form Login */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 relative">
        {/* Tombol Tutup / Kembali ke Landing Page */}
        <button 
          onClick={() => onNavigate('landing')}
          className="absolute top-8 right-8 text-gray-400 hover:text-tefaOrange font-bold text-xs tracking-wider transition-colors cursor-pointer"
        >
          ✕ TUTUP
        </button>

        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Masuk Akun</h2>
            <p className="text-gray-400 font-medium text-sm">Selamat datang kembali kawan, silahkan login</p>
          </div>

          <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Alamat Email</label>
              <input
                type="email"
                required
                placeholder="contoh@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaBlue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kata Sandi</label>
                <a href="#" className="text-xs font-bold text-tefaBlue hover:underline">Lupa?</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-tefaBlue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 hover:text-tefaBlue cursor-pointer"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-tefaBlue text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer mt-2 text-sm tracking-wide">
              Masuk Sekarang
            </button>
          </form>

          <p className="text-sm text-gray-400 font-medium text-left">
            Belum punya akun kawan? {' '}
            <button onClick={() => onNavigate('register')} className="text-tefaOrange font-bold hover:underline cursor-pointer bg-transparent border-none">Daftar Akun</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
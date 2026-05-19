const Footer = () => {
  return (
    <footer className="w-full bg-tefaDark text-gray-300 font-poppins pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        
        {/* Kolom 1: Branding Institusi */}
        <div className="flex flex-col space-y-4 pr-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-tefaOrange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
              DI
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white leading-tight tracking-wide text-lg">
                digitech
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                innovation
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            SMK Negeri 1 Surabaya
          </p>
        </div>

        {/* Kolom 2: Quick Links (Navigasi Cepat) */}
        <div className="flex flex-col space-y-4 md:border-l md:border-gray-800 md:pl-12">
          <h3 className="text-white font-semibold tracking-wide text-sm uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#home" className="hover:text-tefaOrange transition-colors duration-200 flex items-center">
                <span className="mr-2">🏠</span> Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-tefaOrange transition-colors duration-200 flex items-center">
                <span className="mr-2">📦</span> Products
              </a>
            </li>
            <li>
              <a href="#track" className="hover:text-tefaOrange transition-colors duration-200 flex items-center">
                <span className="mr-2">🔍</span> Track order
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Contact Information */}
        <div className="flex flex-col space-y-4 md:border-l md:border-gray-800 md:pl-12">
          <h3 className="text-white font-semibold tracking-wide text-sm uppercase">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center">
              <span className="mr-3 text-tefaOrange text-base">💬</span>
              <span>+62 851 - 9193 - 6229</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-tefaOrange text-base">✉️</span>
              <span className="break-all">tefarpl.smkn1sby@gmail.com</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-tefaOrange text-base mt-0.5">📍</span>
              <span className="leading-relaxed">
                F.201, Jl. Smea No.4, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur, 60243
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Baris Hak Cipta (Copyright) */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800/60 text-center text-xs text-gray-500">
        <p>Copyright ©2026 TeFa RPL SMKN 1 Surabaya. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
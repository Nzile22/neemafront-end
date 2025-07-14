import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-green-800 via-green-600 to-green-500 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Neema Agrovet
        </Link>

        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link to="/products" className="hover:text-green-200">Products</Link></li>
          <li><Link to="/services" className="hover:text-green-200">Services</Link></li>
          <li><Link to="/about"    className="hover:text-green-200">About</Link></li>
          <li><Link to="/contact"  className="hover:text-green-200">Contact</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <input id="menu-toggle" type="checkbox" className="peer hidden" />
        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
               className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5" />
          </svg>
        </label>

        <ul className="peer-checked:flex hidden flex-col absolute top-16 right-4
                       bg-green-600 rounded-lg shadow-lg p-4 gap-4 md:hidden">
          <li><Link to="/products" className="hover:text-green-200"
                    onClick={() => (document.getElementById('menu-toggle').checked=false)}>Products</Link></li>
          <li><Link to="/services" className="hover:text-green-200"
                    onClick={() => (document.getElementById('menu-toggle').checked=false)}>Services</Link></li>
          <li><Link to="/about" className="hover:text-green-200"
                    onClick={() => (document.getElementById('menu-toggle').checked=false)}>About</Link></li>
          <li><Link to="/contact" className="hover:text-green-200"
                    onClick={() => (document.getElementById('menu-toggle').checked=false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

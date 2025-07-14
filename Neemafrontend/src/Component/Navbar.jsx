import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ width: '100%', background: 'green', color: 'white', position: 'fixed', top: 0, zIndex: 50, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
        <Link to="/" style={{ fontSize: '1.875rem', fontWeight: '800', letterSpacing: '0.05em', textDecoration: 'none', color: 'white' }}>
          Neema Agrovet
        </Link>

        <ul style={{ display: 'flex', gap: '2rem', fontSize: '1.125rem', fontWeight: '600', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
          <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

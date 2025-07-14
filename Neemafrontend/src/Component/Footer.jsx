export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'green', color: 'white', padding: '2rem 0', marginTop: '5rem', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', lineHeight: 1.5 }}>
        <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>© {new Date().getFullYear()} Neema Agrovet. All rights reserved.</p>
        <p style={{ fontSize: '0.875rem', color: '#a7d7a7' }}>
          Supplying quality plant & animal health solutions across Kenya.
        </p>
      </div>
    </footer>
  );
}

export default function ProductCard({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', backgroundColor: 'white', overflow: 'hidden', transition: 'box-shadow 0.3s ease' }}>
      <div style={{ height: '11rem', backgroundColor: '#d9f0d9', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ fontWeight: '700', fontSize: '1.25rem', color: '#225522' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', color: '#4a4a4a', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{description}</p>
        <button style={{ backgroundColor: '#225522', color: 'white', padding: '0.75rem 1.25rem', borderRadius: '12px', marginTop: '1rem', cursor: 'pointer', border: 'none', width: '100%', transition: 'background-color 0.3s ease' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a441a'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#225522'}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <main style={{ paddingTop: '7rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '480px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '2rem', color: '#225522' }}>Get in Touch</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input type="text" placeholder="Name"
               style={{ width: '100%', border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', outlineColor: '#225522', transition: 'outline-color 0.3s ease' }} />
        <input type="email" placeholder="Email"
               style={{ width: '100%', border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', outlineColor: '#225522', transition: 'outline-color 0.3s ease' }} />
        <textarea rows="5" placeholder="Message"
                  style={{ width: '100%', border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', outlineColor: '#225522', transition: 'outline-color 0.3s ease' }} />
        <button type="submit"
                style={{ display: 'block', width: '100%', backgroundColor: '#225522', color: 'white', padding: '1rem', borderRadius: '12px', cursor: 'pointer', border: 'none', transition: 'background-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a441a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#225522'}>
          Send Message
        </button>
      </form>
    </main>
  );
}

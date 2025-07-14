import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ paddingTop: '7rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
      <section style={{ backgroundImage: "url('/images/agrovet-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundColor: 'rgba(5, 64, 5, 0.8)', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', textAlign: 'center', maxWidth: '640px' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'white', marginBottom: '1.5rem' }}>
            Healthy Crops, Thriving Livestock
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#d4f1d4', marginBottom: '2rem' }}>
            Explore our trusted range of veterinary medicines, agrochemicals and feeds tailored for Kenyan farmers.
          </p>
          <Link
            to="/products"
            style={{ display: 'inline-block', backgroundColor: 'white', color: '#225522', fontWeight: '700', padding: '1rem 2rem', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', transition: 'background-color 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d4f1d4'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            Browse Products
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

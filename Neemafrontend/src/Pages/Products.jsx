import ProductCard from "../Component/ProductCard";

export default function Products() {
  const sample = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Product Name ${i + 1}`,
    description: "Brief description of the product detailing uses, dosage, and benefits."
  }));

  return (
    <main style={{ paddingTop: '7rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1120px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '2rem', color: '#225522' }}>Our Products</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {sample.map(p => (
          <ProductCard key={p.id} title={p.title} description={p.description} />
        ))}
      </div>
    </main>
  );
}

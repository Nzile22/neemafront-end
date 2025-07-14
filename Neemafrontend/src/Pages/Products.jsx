// If you created ProductCard.jsx, import it; otherwise keep inline card markup.
import ProductCard from "../Component/ProductCard";

export default function Products() {
  const sample = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Product Name ${i + 1}`,
    description: "Brief description of the product detailing uses, dosage, and benefits."
  }));

  return (
    <main className="pt-28 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Our Products</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map(p => (
          <ProductCard key={p.id} title={p.title} description={p.description} />
        ))}
      </div>
    </main>
  );
}

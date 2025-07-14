export default function ProductCard({ title, description }) {
  return (
    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white">
      <div className="h-40 bg-green-100 rounded-t-2xl" />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-green-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-700 w-full">
          View Details
        </button>
      </div>
    </div>
  );
}

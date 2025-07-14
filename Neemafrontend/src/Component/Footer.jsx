export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p>© {new Date().getFullYear()} Neema Agrovet. All rights reserved.</p>
        <p className="text-sm">
          Supplying quality plant & animal health solutions across Kenya.
        </p>
      </div>
    </footer>
  );
}

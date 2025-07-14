import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pt-24">
      <section className="bg-[url('/images/agrovet-hero.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-900 bg-opacity-70 p-8 rounded-2xl shadow-lg text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Healthy Crops, Thriving Livestock
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-6">
            Explore our trusted range of veterinary medicines, agrochemicals and feeds tailored for Kenyan farmers.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-200 transition"
          >
            Browse Products
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

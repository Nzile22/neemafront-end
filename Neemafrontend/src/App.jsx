import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Conatct";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/products"  element={<Products />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"   element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

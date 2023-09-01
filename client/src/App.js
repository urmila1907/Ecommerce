import React from "react";
import "./app.scss";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import { Store } from "./pages/Store/Store";
import { Blog } from "./pages/Blog/Blog";
import {CompareProducts} from "./pages/CompareProducts/CompareProducts";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compare-products" element={<CompareProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

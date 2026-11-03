import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import AboutUs from './pages/AboutUs';
import BlogFullWidth from './pages/BlogFullWidth';
import BlogRightSide from './pages/BlogRightSide';
import Card from './pages/Card';
import Chackout from './pages/Chackout';
import Faq from './pages/Faq';
import FullWide from './pages/FullWide';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import ProductListLeft from './pages/ProductListLeft';
import Registion from './pages/Registion';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Asosiy sahifalar */}
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />

        {/* Katalog va Mahsulotlar */}
        <Route path="/product-list-left" element={<ProductListLeft />} />
        <Route path="/full-wide" element={<FullWide />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* Savatcha va Buyurtma */}
        <Route path="/card" element={<Card />} />
        <Route path="/chackout" element={<Chackout />} />

        {/* Profil va Kirish */}
        <Route path="/login" element={<Login />} />
        <Route path="/registion" element={<Registion />} />

        {/* Blog va Ma'lumot sahifalari */}
        <Route path="/blog-full-width" element={<BlogFullWidth />} />
        <Route path="/blog-right-side" element={<BlogRightSide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      {/* 1. TOP NAVBAR */}
      <div className="border-b border-gray-100 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium text-gray-700">
          
          {/* Menyu va Yo'nalishlar */}
          <div className="flex items-center gap-8">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {/* Home */}
              <Link to="/" className="hover:text-emerald-600 transition-colors">Home 1</Link>
              <Link to="/home2" className="hover:text-emerald-600 transition-colors">Home 2</Link>
              <Link to="/home3" className="hover:text-emerald-600 transition-colors">Home 3</Link>

              {/* Products Dropdown */}
              <div className="relative cursor-pointer group" onMouseEnter={() => setOpenDropdown('products')} onMouseLeave={() => setOpenDropdown(null)}>
                <div className="flex items-center gap-1 hover:text-emerald-600 py-1">
                  <span>Products</span>
                  <span className="text-xs">▾</span>
                </div>
                {openDropdown === 'products' && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col text-xs font-normal">
                    <Link to="/product-list-left" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Product List Left</Link>
                    <Link to="/full-wide" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Full Wide</Link>
                    <Link to="/product-details" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Product Details</Link>
                  </div>
                )}
              </div>

              {/* Pages Dropdown */}
              <div className="relative cursor-pointer group" onMouseEnter={() => setOpenDropdown('pages')} onMouseLeave={() => setOpenDropdown(null)}>
                <div className="flex items-center gap-1 hover:text-emerald-600 py-1">
                  <span>Pages</span>
                  <span className="text-xs">▾</span>
                </div>
                {openDropdown === 'pages' && (
                  <div className="absolute top-full left-0 w-44 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col text-xs font-normal">
                    <Link to="/about-us" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">About Us</Link>
                    <Link to="/faq" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">FAQ</Link>
                    <Link to="/chackout" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Checkout</Link>
                  </div>
                )}
              </div>

              {/* Blog Dropdown */}
              <div className="relative cursor-pointer group" onMouseEnter={() => setOpenDropdown('blog')} onMouseLeave={() => setOpenDropdown(null)}>
                <div className="flex items-center gap-1 hover:text-emerald-600 py-1">
                  <span>Blog</span>
                  <span className="text-xs">▾</span>
                </div>
                {openDropdown === 'blog' && (
                  <div className="absolute top-full left-0 w-44 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col text-xs font-normal">
                    <Link to="/blog-full-width" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Blog Full Width</Link>
                    <Link to="/blog-right-side" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Blog Right Side</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Telefon raqam */}
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+123 ( 456 ) ( 7890 )</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 leading-none">Foodzy</h1>
              <p className="text-xs text-gray-500 font-medium mt-0.5">A Treasure of Tastes</p>
            </div>
          </Link>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex items-center border-2 border-emerald-500 rounded-md overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Search For items..."
                className="w-full py-2.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <div className="border-l border-emerald-500 px-4 py-2.5 text-sm text-gray-600 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50 min-w-[140px] justify-between">
                <span>All Categories</span>
                <span className="text-xs">▾</span>
              </div>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Icons (Account, Wishlist, Cart) */}
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-800">
            {/* Account -> Login / Registion */}
            <div className="relative cursor-pointer group" onMouseEnter={() => setOpenDropdown('account')} onMouseLeave={() => setOpenDropdown(null)}>
              <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors py-1">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Account</span>
              </div>
              {openDropdown === 'account' && (
                <div className="absolute right-0 w-36 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col text-xs font-normal">
                  <Link to="/login" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Login</Link>
                  <Link to="/registion" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Register</Link>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link to="/card" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Wishlist</span>
            </Link>

            {/* Cart -> Card.jsx */}
            <Link to="/card" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span>Cart</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
import React, { useState } from 'react';

export default function ShopLeftSidebar() {
  const [priceRange, setPriceRange] = useState(250);

  const products = [
    {
      id: 1,
      category: 'Vegetables',
      title: 'Fresh organic villa farm lemon 500gm pack',
      rating: 4.5,
      price: '$120.25',
      oldPrice: '$123.25',
      image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=300',
    },
    {
      id: 2,
      category: 'Snacks',
      title: 'Best snakes with hazel nut pack 200gm',
      rating: 5.0,
      price: '$145',
      oldPrice: '$150',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300',
    },
    {
      id: 3,
      category: 'Fruits',
      title: 'Fresh organic apple 1kg simla morning',
      rating: 4.5,
      price: '$120.25',
      oldPrice: '$123.25',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300',
    },
    {
      id: 4,
      category: 'Fruits',
      title: 'Organic fresh villa farm watermelon 5kg',
      rating: 3.2,
      price: '$50.30',
      oldPrice: '$72.00',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=300',
    },
    {
      id: 5,
      category: 'Snacks',
      title: 'Sweet crunchy nut mix 250gm pack',
      rating: 5.0,
      price: '$120.25',
      oldPrice: '$123.25',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300',
    },
    {
      id: 6,
      category: 'Bakery',
      title: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      price: '$20',
      oldPrice: '$22.10',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
    },
    {
      id: 7,
      category: 'Bakery',
      title: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      price: '$20',
      oldPrice: '$22.10',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
    },
    {
      id: 8,
      category: 'Bakery',
      title: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      price: '$20',
      oldPrice: '$22.10',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
    },
    {
      id: 9,
      category: 'Bakery',
      title: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      price: '$20',
      oldPrice: '$22.10',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Shop</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Shop</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR FILTERS */}
          <aside className="space-y-6">
            
            {/* Product Category */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Product Category</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-500 rounded" />
                    <span>Juice & Drinks</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">[20]</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-500 rounded" />
                    <span>Dairy & Milk</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">[54]</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-red-500 rounded" />
                    <span>Snack & Spice</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">[64]</span>
                </label>
              </div>
            </div>

            {/* Filter By Price */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Filter By Price</h3>
              <input
                type="range"
                min="20"
                max="250"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-red-500"
              />
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Price : <strong>$20 — ${priceRange}</strong></span>
                <button className="px-4 py-1.5 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors">
                  Filter
                </button>
              </div>
            </div>

            {/* Product Category (Colors) */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Product Category</h3>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-red-500 rounded" />
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                  <span className="text-gray-700">Blue</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-red-500 rounded" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                  <span className="text-gray-700">Yellow</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-red-500 rounded" />
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="text-gray-700">Red</span>
                </label>
              </div>
            </div>

            {/* Weight */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Weight</h3>
              <div className="space-y-2 text-xs text-gray-700">
                {['2kg Pack', '20kg Pack', '30kg Pack'].map((w, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-red-500 rounded" />
                    <span>{w}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Products Tags */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Products Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Vegetables', 'Juice', 'Food', 'Dry Fruits', 'Vegetables', 'Juice'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-lg text-[10px] cursor-pointer hover:border-red-500 hover:text-red-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT PRODUCTS LISTING */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2V5zM11 13a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 bg-white border border-gray-200 text-gray-600 rounded-md hover:border-red-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span>We found {products.length} items for you!</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Sort By:</span>
                <select className="bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-red-500 text-gray-700">
                  <option value="featured">Featured</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-2xl p-4 text-center space-y-3 hover:shadow-md transition-all group relative"
                >
                  <div className="h-44 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-xs text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  <span className="text-[10px] text-gray-400 uppercase font-semibold block">{item.category}</span>
                  
                  <div className="flex items-center justify-center text-yellow-400 text-xs gap-1">
                    <span>★</span>
                    <span className="text-gray-500 font-medium">({item.rating})</span>
                  </div>

                  <h4 className="text-xs font-bold text-gray-800 line-clamp-2 hover:text-red-500 cursor-pointer transition-colors">
                    {item.title}
                  </h4>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="text-sm font-extrabold text-red-500">{item.price}</span>
                    <span className="text-xs text-gray-400 line-through">{item.oldPrice}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <button className="px-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1.5 bg-red-500 text-white rounded-md text-xs font-bold">
                1
              </button>
              <button className="px-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
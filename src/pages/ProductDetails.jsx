import React, { useState } from 'react';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('100g');
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300',
    'https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=300',
    'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300',
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300',
    'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=300',
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Product</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Product</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR: FILTERS & CATEGORIES */}
          <aside className="space-y-6">
            
            {/* Product Category Filter */}
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

            {/* Price Filter */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Filter By Price</h3>
              <input type="range" min="20" max="250" className="w-full accent-red-500" />
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Price : <strong>$20 — $250</strong></span>
                <button className="px-4 py-1.5 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors">
                  Filter
                </button>
              </div>
            </div>

            {/* Color Filter */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Product Category</h3>
              <div className="space-y-2 text-xs">
                {['Blue', 'White', 'Red', 'Green'].map((color, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-red-500 rounded" />
                    <span className="text-gray-700">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Weight Filter */}
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

            {/* Product Tags */}
            <div className="border border-gray-100 rounded-2xl p-5 space-y-3 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-900 border-b pb-2">Products Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Vegetables', 'Juice', 'Food', 'Dry Fruits', 'Vegetables', 'Juice'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-lg text-[10px] cursor-pointer hover:border-red-500 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT SIDE: PRODUCT DETAILS */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Top Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Product Gallery */}
              <div className="space-y-4">
                <div className="h-80 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-center">
                  <img src={mainImage} alt="Product" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {thumbnails.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(thumb)}
                      className={`w-16 h-16 rounded-xl border-2 overflow-hidden flex-shrink-0 bg-gray-50 p-1 ${
                        mainImage === thumb ? 'border-red-500' : 'border-gray-100'
                      }`}
                    >
                      <img src={thumb} alt="Thumb" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Specs */}
              <div className="space-y-4 text-xs">
                <h2 className="text-lg font-bold text-gray-900 leading-snug">
                  Seeds Of Change Organic Quinoa, Brown
                </h2>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore.
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <span className="text-gray-400 text-[11px]">(4.5 Review)</span>
                </div>

                {/* Meta details */}
                <div className="space-y-1.5 text-gray-600 border-y border-gray-100 py-3">
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Brand:</span> ESTA BOTANICA</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Flavour:</span> Super Sweet Pack</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Diet Type:</span> Vegetarian</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Weight:</span> 200 Grams</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Speciality:</span> Gluten Free, Sugar Free</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Info:</span> Egg Free, Allergen-Free</div>
                  <div className="flex"><span className="w-24 font-bold text-gray-800">Items:</span> 1</div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-extrabold text-red-500">$120.25</span>
                  <span className="text-xs text-gray-400 line-through">$123.25</span>
                </div>

                {/* Size / Weight Selector */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800">Size/Weight:</span>
                  {['100g', '200g', '500g', '1kg'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${
                        selectedSize === sz
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-gray-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>

                {/* Add to cart actions */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 gap-3 bg-white">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-gray-700 font-bold">-</button>
                    <span className="font-bold text-gray-800">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-gray-700 font-bold">+</button>
                  </div>
                  <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs">
                    Add To Cart
                  </button>
                  <button className="p-2.5 border border-gray-200 text-gray-400 hover:text-red-500 rounded-lg transition-colors">
                    ♡
                  </button>
                  <button className="p-2.5 border border-gray-200 text-gray-400 hover:text-red-500 rounded-lg transition-colors">
                    🔄
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Tabs Section */}
            <div className="border border-gray-100 rounded-2xl p-6 space-y-6">
              <div className="flex gap-6 border-b border-gray-100 text-xs font-bold">
                {['description', 'information', 'review'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 capitalize transition-colors ${
                      activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="text-xs text-gray-500 leading-relaxed space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto libero, vero natus.
                </p>
                <h4 className="font-bold text-gray-800 text-xs">Packaging & Delivery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.
                </p>
              </div>
            </div>

            {/* Popular Products Slider / Grid */}
            <div className="space-y-6 pt-4">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-extrabold text-gray-900">Popular Products</h3>
                <p className="text-xs text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {thumbnails.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 text-center space-y-2 hover:shadow-xs transition-shadow">
                    <div className="h-36 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-3">
                      <img src={img} alt="Prod" className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Snacks</span>
                    <h5 className="text-xs font-bold text-gray-800 line-clamp-2">Best snacks with hazel nut mix pack 200gm</h5>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs font-extrabold text-red-500">$120.25</span>
                      <span className="text-[10px] text-gray-400 line-through">$123.25</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
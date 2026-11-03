import React from 'react';

export default function Home3() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 py-6">

        {/* 1. HERO BANNER */}
        <section className="relative rounded-3xl bg-emerald-50/60 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <div className="max-w-xl space-y-4 z-10">
            <span className="inline-block bg-red-100 text-red-500 font-bold text-xs px-3 py-1 rounded-full">
              100% Organic Vegetables
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              The best way to stuff your wallet.
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">
              Save up to 50% off on your first order with fresh organic products.
            </p>
            <div className="flex items-center bg-white rounded-full p-1.5 shadow-sm max-w-md border border-gray-100 mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 text-xs focus:outline-none bg-transparent"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600"
              alt="Fresh Organic Vegetables"
              className="max-h-72 object-contain rounded-2xl"
            />
          </div>
        </section>

        {/* 2. MINI PROMO CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Everyday Fresh & Clean with Our Products',
              bg: 'bg-amber-50',
              btnBg: 'bg-amber-500',
              img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300'
            },
            {
              title: 'Make Your Breakfast Healthy and Easy',
              bg: 'bg-pink-50',
              btnBg: 'bg-pink-500',
              img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300'
            },
            {
              title: 'The Best Organic Products Online',
              bg: 'bg-emerald-50',
              btnBg: 'bg-emerald-500',
              img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300'
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className={`${card.bg} rounded-2xl p-6 flex items-center justify-between border border-gray-100 hover:shadow-sm transition-shadow`}
            >
              <div className="space-y-3 max-w-[60%]">
                <h3 className="font-bold text-sm text-gray-900 leading-snug">{card.title}</h3>
                <button className={`${card.btnBg} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm`}>
                  Shop Now ➔
                </button>
              </div>
              <img src={card.img} alt={card.title} className="w-20 h-20 object-cover rounded-xl shadow-inner" />
            </div>
          ))}
        </section>

        {/* 3. POPULAR PRODUCTS */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Popular Products</h2>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
              <span className="text-emerald-500 font-bold border-b-2 border-emerald-500 pb-3 -mb-3 cursor-pointer">All</span>
              <span className="hover:text-emerald-600 cursor-pointer">Milks & Dairies</span>
              <span className="hover:text-emerald-600 cursor-pointer">Coffees & Teas</span>
              <span className="hover:text-emerald-600 cursor-pointer">Pet Foods</span>
              <span className="hover:text-emerald-600 cursor-pointer">Vegetables</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { title: 'Fresh Lemon Yellow', category: 'Snack', price: '$2.85', badge: 'Hot', badgeBg: 'bg-pink-500' },
              { title: 'Organic Fresh Hazelnut', category: 'Snack', price: '$12.85', badge: 'Sale', badgeBg: 'bg-blue-500' },
              { title: 'Fresh Watermelon Slice', category: 'Fruit', price: '$4.85', badge: 'New', badgeBg: 'bg-emerald-500' },
              { title: 'Green Apple Organic', category: 'Fruit', price: '$3.85', badge: '', badgeBg: '' },
              { title: 'All Natural Style Roasted', category: 'Snack', price: '$5.85', badge: 'Save 10%', badgeBg: 'bg-amber-500' },
              { title: 'Choco Muffin Cream', category: 'Bakery', price: '$8.85', badge: 'Hot', badgeBg: 'bg-pink-500' },
              { title: 'Pistachio Spread Cream', category: 'Spread', price: '$14.85', badge: '', badgeBg: '' },
              { title: 'Organic Honey Pure', category: 'Natural', price: '$18.85', badge: 'Sale', badgeBg: 'bg-blue-500' },
              { title: 'Canned Tomato Paste', category: 'Food', price: '$2.85', badge: 'Hot', badgeBg: 'bg-pink-500' },
              { title: 'Organic Green Tea Bag', category: 'Drink', price: '$6.85', badge: '', badgeBg: '' }
            ].map((prod, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between relative hover:shadow-md transition-shadow">
                {prod.badge && (
                  <span className={`absolute top-3 left-3 ${prod.badgeBg} text-white text-[9px] font-bold px-2 py-0.5 rounded-md`}>
                    {prod.badge}
                  </span>
                )}
                <div className="h-28 w-full bg-gray-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200" alt={prod.title} className="object-cover h-full" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 font-medium">{prod.category}</span>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2">{prod.title}</h4>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-emerald-600 font-bold text-xs">{prod.price}</span>
                    <button className="bg-red-50 hover:bg-red-500 text-red-500 hover:text-white text-[10px] font-bold px-3 py-1 rounded-lg transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DAILY BEST SELLS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Daily Best Sells</h2>
            <div className="flex gap-4 text-xs font-medium text-gray-400">
              <span className="text-emerald-500 font-bold border-b-2 border-emerald-500 pb-3 -mb-3">Featured</span>
              <span className="hover:text-gray-700 cursor-pointer">Popular</span>
              <span className="hover:text-gray-700 cursor-pointer">New added</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Promo Card */}
            <div
              className="relative rounded-2xl overflow-hidden bg-cover bg-center p-6 text-white flex flex-col justify-between min-h-[280px]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10 text-xl font-bold leading-snug">Bring nature into your home</h3>
              <button className="relative z-10 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg w-max mt-auto transition-colors">
                Shop Now ➔
              </button>
            </div>

            {/* Product Cards */}
            {[
              { title: 'Seeds of Change Organic Quinoa', price: '$28.85', old: '$32.80', badge: 'Save 10%' },
              { title: 'All Natural Style Roasted Turkey', price: '$52.85', old: '$55.80', badge: 'Hot' },
              { title: 'Organic Baby Spinach Fresh', price: '$14.85', old: '$16.80', badge: 'Sale' },
              { title: 'Simply Orange Juice Fresh Pure', price: '$17.85', old: '$19.80', badge: '10%' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between relative hover:shadow-md transition-shadow">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                  {prod.badge}
                </span>
                <div className="h-32 w-full bg-gray-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=300" alt={prod.title} className="object-cover h-full" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400">Snack</span>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2">{prod.title}</h4>
                  <div className="pt-2">
                    <span className="text-emerald-600 font-bold text-xs">{prod.price}</span>
                    <span className="text-gray-400 text-[10px] line-through ml-1">{prod.old}</span>
                  </div>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold py-1.5 rounded-lg mt-2 transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DEALS OF THE DAY */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Deals Of The Day</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Seeds of Change Organic Quinoa Rice', price: '$28.85', old: '$32.80', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300' },
              { title: 'Perdue Simply Smart Organics Gluten', price: '$14.85', old: '$16.80', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300' },
              { title: 'Signature Organic Baby Spinach', price: '$18.85', old: '$20.80', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300' },
              { title: 'Simply Orange Juice Fresh Pure', price: '$22.85', old: '$25.80', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300' }
            ].map((deal, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-3 space-y-2 hover:shadow-md transition-shadow">
                <img src={deal.img} alt={deal.title} className="w-full h-36 object-cover rounded-xl" />
                <h4 className="font-bold text-xs text-gray-800 line-clamp-1">{deal.title}</h4>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-emerald-600 font-bold text-xs">{deal.price}</span>
                    <span className="text-gray-400 text-[10px] line-through ml-1">{deal.old}</span>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-md transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. GRID COLUMNS (Top Selling, Trending, Recently Added, Top Rated) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {[
            { title: 'Top Selling', items: ['Organic Carrot Fresh', 'Mastering UX Soft Fruit', 'Organic Apple Red'] },
            { title: 'Trending Products', items: ['Organic Green Banana', 'Fresh Orange Juice', 'Avocado Tropical Fresh'] },
            { title: 'Recently Added', items: ['Fresh Watermelon Slice', 'Organic Organic Spinach', 'Sweet Corn Yellow'] },
            { title: 'Top Rated', items: ['Red Radish Fresh', 'Organic Broccoli Fresh', 'Yellow Bell Pepper'] }
          ].map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
                {col.title}
              </h3>
              <div className="space-y-3">
                {col.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-3 bg-white p-2 border border-gray-50 rounded-xl hover:shadow-sm transition-shadow">
                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100"
                      alt={item}
                      className="w-14 h-14 object-cover rounded-lg bg-gray-50"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-gray-800 line-clamp-1">{item}</h4>
                      <span className="text-emerald-600 font-bold text-xs">$12.85</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 7. BOTTOM NEWSLETTER BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-emerald-50/80 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-100">
          <div className="space-y-2 max-w-md z-10">
            <h2 className="text-xl md:text-2xl font-black text-gray-900">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-xs text-gray-500">Start Your Daily Shopping with Foodzy</p>
            <div className="flex items-center gap-2 pt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="py-2 px-4 rounded-full text-xs text-gray-800 bg-white border border-gray-200 focus:outline-none w-56"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-40 flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500"
              alt="Grocery Delivery"
              className="h-full object-contain"
            />
          </div>
        </section>

        {/* 8. FEATURE ICONS (Bottom Bar) */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-gray-100">
          {[
            { icon: '💵', title: 'Best prices & offers', desc: 'Orders $50 or more' },
            { icon: '🚚', title: 'Free delivery', desc: '24/7 amazing services' },
            { icon: '🏷️', title: 'Great daily deal', desc: 'When you sign up' },
            { icon: '🌱', title: 'Wide assortment', desc: 'Mega Discounts' },
            { icon: '🔄', title: 'Easy returns', desc: 'Within 30 days' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-xs text-gray-900 leading-tight">{item.title}</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
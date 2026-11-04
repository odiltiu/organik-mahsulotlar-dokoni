import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubscribeBar from '../components/SubscribeBar'
import ProductCard from '../components/shop/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'


const POPULAR_LIMIT = 10

export default function Home3() {
  const [activeCategory, setActiveCategory] = useState('All')
  const popularProducts = PRODUCTS.filter(
    (product) => activeCategory === 'All' || product.category === activeCategory,
  ).slice(0, POPULAR_LIMIT)

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
            <SubscribeBar wrapperClass="flex items-center bg-white rounded-full p-1.5 shadow-sm max-w-md border border-gray-100 mt-4" inputClass="w-full px-4 text-xs focus:outline-none bg-transparent" buttonClass="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors shrink-0" />
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
                <Link to="/full-wide" className={`${card.btnBg} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm`}>
                  Shop Now ➔
                </Link>
              </div>
              <img src={card.img} alt={card.title} className="w-20 h-20 object-cover rounded-xl shadow-inner" />
            </div>
          ))}
        </section>

        {/* 3. POPULAR PRODUCTS */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Popular Products</h2>
            <div role="group" aria-label="Filter products by category" className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
              {['All', ...CATEGORIES].map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category
                    ? 'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-3 -mb-3'
                    : 'hover:text-emerald-600'}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} imageHeight="h-28" />
            ))}
          </div>
        </section>

        {/* 4. DAILY BEST SELLS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Daily Best Sells</h2>
            <Link to="/full-wide" className="text-xs font-bold text-emerald-500 hover:underline">View all ➔</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Promo Card */}
            <div
              className="relative rounded-2xl overflow-hidden bg-cover bg-center p-6 text-white flex flex-col justify-between min-h-[280px]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10 text-xl font-bold leading-snug">Bring nature into your home</h3>
              <Link to="/full-wide" className="inline-block relative z-10 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg w-max mt-auto transition-colors">
                Shop Now ➔
              </Link>
            </div>

            {/* Product Cards */}
            {PRODUCTS.slice(2, 6).map((product) => (
              <ProductCard key={product.id} product={product} imageHeight="h-32" />
            ))}
          </div>
        </section>

        {/* 5. DEALS OF THE DAY */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Deals Of The Day</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.slice(6, 10).map((product) => (
              <ProductCard key={product.id} product={product} imageHeight="h-36" />
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
            <SubscribeBar wrapperClass="flex items-center gap-2 pt-2" inputClass="py-2 px-4 rounded-full text-xs text-gray-800 bg-white border border-gray-200 focus:outline-none w-56" buttonClass="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full transition-colors" />
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
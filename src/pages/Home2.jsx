import { Link } from 'react-router-dom'
import ProductCard from '../components/shop/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'


export default function Home2() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 py-6">

        {/* 1. DARK HERO BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-[#1e2229] text-white p-8 md:p-14 flex items-center justify-between min-h-[400px]">
          <div className="max-w-lg space-y-4 z-10">
            <span className="text-amber-500 font-semibold text-sm tracking-wide uppercase">Super Delicious</span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              THE BEST WAY TO <br />
              STUFF YOUR <br />
              <span className="text-white">WALLET.</span>
            </h1>
            <p className="text-xs text-gray-400">Tasty & Fresh Food</p>
            <Link to="/full-wide" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all">
              SHOP NOW ➔
            </Link>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center relative w-1/2 h-80">
            <div className="absolute top-4 right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-amber-400">50%</span>
              <span className="text-[10px] text-gray-200 font-bold">OFF</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800"
              alt="Delicious Pasta"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-2 right-4 text-right">
              <p className="text-xs text-amber-400 font-bold">📞 800-701-5555</p>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY LIST + 2 PROMO BANNERS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chap bo'limlar ro'yxati */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-2">
            {[
              'Fresh Fruit',
              'Fresh Meat',
              'Vegetables',
              'Apple & Mango',
              'Fast Food',
              'Fresh Milk',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:border-emerald-500 cursor-pointer transition-all">
                <span className="text-xs font-bold text-gray-700">{item}</span>
                <span className="text-gray-400 text-xs">➔</span>
              </div>
            ))}
          </div>

          {/* O'rta Promo Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-end p-6 text-white group">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" alt="Cake promo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 space-y-2">
              <span className="text-3xl font-black text-white">50% OFF</span>
              <p className="text-xs text-gray-200">Tasty Cake</p>
              <Link to="/full-wide" className="inline-block bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full">Shop Now</Link>
            </div>
          </div>

          {/* O'ng Promo Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-end p-6 text-white group">
            <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600" alt="Milk promo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 space-y-2">
              <span className="text-3xl font-black text-white">40% OFF</span>
              <p className="text-xs text-gray-200">Fresh Milk</p>
              <Link to="/full-wide" className="inline-block bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full">Shop Now</Link>
            </div>
          </div>
        </section>

        {/* 3. POPULAR PRODUCTS WITH SIDEBAR */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-gray-900">Popular Products</h2>
            <p className="text-xs text-gray-400 mt-1">Do not miss current offers until the end of March.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Chap Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-3">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    to={`/product-list-left?category=${encodeURIComponent(category)}`}
                    className="flex justify-between items-center text-xs font-semibold text-gray-600 hover:text-emerald-600 border-b border-gray-200/60 pb-2"
                  >
                    <span>{category}</span>
                    <span aria-hidden="true">➔</span>
                  </Link>
                ))}
              </div>

              {/* Sidebar Banner */}
              <div className="relative rounded-2xl overflow-hidden min-h-[320px] p-6 text-white flex flex-col justify-between">
                <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400" alt="Juicy Fruits" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 space-y-1">
                  <span className="text-xs font-bold uppercase text-amber-400">Juicy</span>
                  <h3 className="text-2xl font-black">FRUITS</h3>
                  <p className="text-[10px] text-gray-300">100% Natural Organic</p>
                </div>
                <Link to="/full-wide" className="inline-block relative z-10 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full w-max">Shop Now</Link>
              </div>
            </div>

            {/* O'ng tomon: 6 ta mahsulot (2x3 grid) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PRODUCTS.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} imageHeight="h-36" />
            ))}
            </div>
          </div>
        </section>

        {/* 4. 3 TA KICHIK PROMO BANNER */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Fresh Healthy Breakfast', off: '30% OFF', color: 'bg-emerald-100', btn: 'bg-red-500', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300' },
            { title: 'Fresh Organic Spices', off: '20% OFF', color: 'bg-orange-100', btn: 'bg-red-500', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300' },
            { title: 'Fresh & Healthy Organic Fruit', off: '15% OFF', color: 'bg-pink-100', btn: 'bg-red-500', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} rounded-2xl p-6 flex items-center justify-between min-h-[140px]`}>
              <div className="space-y-2 max-w-[60%]">
                <span className="text-xs font-bold text-red-500">{item.off}</span>
                <h4 className="font-black text-xs text-gray-900 leading-snug">{item.title}</h4>
                <Link to="/full-wide" className={`${item.btn} text-white text-[9px] font-bold px-3 py-1.5 rounded-full`}>Shop Now</Link>
              </div>
              <img src={item.img} alt={item.title} className="w-20 h-20 rounded-full object-cover shadow" />
            </div>
          ))}
        </section>

        {/* 5. 4 TA XIZMAT KATAKLARI */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Product Packing', desc: 'Secure & high quality' },
            { title: '24X7 Support', desc: 'Dedicated customer care' },
            { title: 'Delivery in 5 Days', desc: 'Fast & safe shipping' },
            { title: 'Payment Secure', desc: '100% encrypted checkout' },
          ].map((srv, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center space-y-1">
              <h4 className="font-bold text-xs text-gray-900">{srv.title}</h4>
              <p className="text-[10px] text-gray-400">{srv.desc}</p>
            </div>
          ))}
        </section>

        {/* 6. COUNTDOWN DEAL BANNER */}
        <section className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center p-8 md:p-12 text-gray-900">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200" alt="Organic Food Deal" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 bg-white/95 backdrop-blur p-6 md:p-8 rounded-2xl max-w-md space-y-3 shadow-xl">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Special Deal</span>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug">Great deal on organic food</h3>
            <p className="text-xs text-gray-500">Save up to 50% on selected items this week.</p>
            {/* Timer */}
            <div className="flex gap-3 pt-2">
              {[ { num: '02', label: 'Days' }, { num: '14', label: 'Hours' }, { num: '45', label: 'Mins' }, { num: '30', label: 'Secs' } ].map((t, i) => (
                <div key={i} className="bg-gray-100 px-3 py-2 rounded-lg text-center min-w-[50px]">
                  <span className="font-black text-sm text-gray-900 block">{t.num}</span>
                  <span className="text-[9px] text-gray-400 uppercase">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. 3 TA KATTA TAOM BLOKI */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm h-64 relative group">
            <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500" alt="Pasta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-64 relative group">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-64 relative p-6 text-white flex flex-col justify-end">
            <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500" alt="Organic Salad" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-black">Organic & Healthy Vegetables</h3>
              <Link to="/full-wide" className="inline-block bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full w-max">Shop Now</Link>
            </div>
          </div>
        </section>

        {/* 8. TESTIMONIALS */}
        <section className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Great Words From People</h2>
            <p className="text-xs text-gray-400 mt-1">What our happy customers say about our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Stephen Lawson', role: 'Co Founder', text: 'Fast delivery and amazing fresh quality food every time I order.' },
              { name: 'Laura Harrison', role: 'Designer', text: 'The organic items are top notch! Highly recommend Foodzy store.' },
              { name: 'Michael Scott', role: 'Manager', text: 'Great prices, wide selection of fruits and quick customer support.' },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center space-y-3 relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?img=${i + 12}`} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-500 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">{review.name}</h4>
                  <span className="text-[10px] text-gray-400">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. LATEST NEWS (Blog) */}
        <section className="space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Latest News</h2>
            <p className="text-xs text-gray-400 mt-1">Read our latest blog posts and food recipes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: '5 Healthy Salad Recipes for Your Daily Lunch', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
              { title: 'Best Ways to Store Fresh Fruits and Vegetables', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400' },
              { title: 'Organic Food Benefits That You Need To Know', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
            ].map((news, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <img src={news.img} alt={news.title} className="w-full h-44 object-cover" />
                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-emerald-600 font-bold uppercase">By Admin</span>
                  <h4 className="font-bold text-xs text-gray-900 line-clamp-2 hover:text-emerald-600 cursor-pointer">{news.title}</h4>
                  <Link to="/blog-full-width" className="inline-block text-[10px] text-red-500 font-bold pt-1">Read More ➔</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
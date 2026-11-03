import React from 'react';

export default function Home1() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* ================= MAIN CONTAINER ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 py-6">

        {/* 1. HERO BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-[#241a15] text-white p-8 md:p-14 flex items-center justify-between min-h-[360px]">
          <div className="max-w-md space-y-4 z-10">
            <span className="italic text-yellow-500 text-xl font-serif">Snack</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
              Delicious <br />
              <span className="bg-[#b39359] text-gray-900 px-3 py-1 rounded inline-block mt-1 text-3xl md:text-5xl">
                ROAST TURKEY
              </span>
            </h1>
            <button className="bg-[#b39359] hover:bg-amber-600 text-gray-900 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 mt-4 shadow">
              <span>➔</span> Order Now
            </button>
          </div>
          <div className="hidden md:block w-1/2 h-72 relative">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
              alt="Roast Turkey"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* 2. POPULAR CATEGORIES */}
        <section className="space-y-6 text-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">CUSTOMER FAVORITES</span>
            <h2 className="text-2xl font-black text-gray-900 mt-1">Popular Catagories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'Main Dish', count: '(85 items)', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200' },
              { name: 'Break Fast', count: '(175 items)', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=200' },
              { name: 'Dessert', count: '(142 items)', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200' },
              { name: 'Browse All', count: '(540 items)', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200' },
              { name: 'Breakfast food', count: '(210 items)', img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=200' },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow cursor-pointer">
                <img src={cat.img} alt={cat.name} className="w-16 h-16 mx-auto rounded-full object-cover shadow-inner" />
                <h3 className="font-bold text-gray-900 text-xs mt-2">{cat.name}</h3>
                <p className="text-[10px] text-gray-400">{cat.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DAILY BEST SELLS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold text-gray-900">Daily Best Sells</h2>
            <div className="flex gap-4 text-xs font-medium text-gray-400">
              <span className="text-emerald-500 font-bold border-b-2 border-emerald-500 pb-2 -mb-2">Featured</span>
              <span className="hover:text-gray-700 cursor-pointer">Popular</span>
              <span className="hover:text-gray-700 cursor-pointer">New added</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Banner card */}
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center p-6 text-white flex flex-col justify-between min-h-[300px]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400')` }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10 text-xl font-bold leading-snug">Bring nature into your home</h3>
              <button className="relative z-10 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded w-max mt-auto">Shop Now ➔</button>
            </div>

            {/* Products */}
            {[
              { title: 'Seeds of Change Organic Quinoa', price: '$28.85', old: '$32.80', badge: 'Save 10%' },
              { title: 'All Natural Style Roasted Turkey', price: '$52.85', old: '$55.80', badge: 'Hot' },
              { title: 'Organic Baby Spinach', price: '$14.85', old: '$16.80', badge: 'Sale' },
              { title: 'Simply Orange Juice Fresh', price: '$17.85', old: '$19.80', badge: '10%' },
            ].map((prod, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between relative hover:shadow-md">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">{prod.badge}</span>
                <div className="h-32 w-full bg-gray-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=300" alt={prod.title} className="object-cover h-full" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase">Snack</span>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2">{prod.title}</h4>
                  <div className="pt-2">
                    <span className="text-red-500 font-bold text-xs">{prod.price}</span>
                    <span className="text-gray-400 text-[10px] line-through ml-1">{prod.old}</span>
                  </div>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold py-1.5 rounded-lg mt-2 transition-colors">Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. STANDOUT DISHES */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">SPECIAL DISH</span>
              <h2 className="text-2xl font-black text-gray-900 mt-1">Standout Dishes From Our Menu</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">❮</button>
              <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">❯</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Fattoush salad', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
              { name: 'Vegetable salad', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
              { name: 'Egg vegi salad', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
            ].map((dish, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 text-center space-y-3 relative hover:shadow-md">
                <button className="absolute top-4 right-4 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">❤️</button>
                <img src={dish.img} alt={dish.name} className="w-32 h-32 mx-auto rounded-full object-cover shadow" />
                <h3 className="font-bold text-gray-900 text-sm">{dish.name}</h3>
                <p className="text-[11px] text-gray-400">Description of the item</p>
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
              { title: 'Simply Orange Juice Fresh Pure', price: '$22.85', old: '$25.80', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300' },
            ].map((deal, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-3 space-y-2 hover:shadow-md">
                <img src={deal.img} alt={deal.title} className="w-full h-36 object-cover rounded-xl" />
                <h4 className="font-bold text-xs text-gray-800 line-clamp-1">{deal.title}</h4>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-emerald-600 font-bold text-xs">{deal.price}</span>
                    <span className="text-gray-400 text-[10px] line-through ml-1">{deal.old}</span>
                  </div>
                  <button className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">Add</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHY PEOPLE CHOOSE US */}
        <section className="bg-white border border-gray-100 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600" alt="Why Choose Us" className="w-full h-64 object-cover rounded-2xl" />
          <div className="space-y-5">
            <h2 className="text-2xl font-black text-gray-900">Why People Choose us?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">🚚</span>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Convenient and Reliable</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Whether you dine in, order online, or pick up, we ensure seamless delivery to your doorstep.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">🥗</span>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Variety of Options</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Explore a diverse range of menu items designed to suit every diet and preference.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">🍔</span>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">Eat Healthy</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Fresh ingredients, organic products, and carefully prepared dishes every day.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. NEWSLETTER BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-[#45362a] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-md z-10">
            <h2 className="text-xl md:text-2xl font-black">Stay home & get your daily needs from our shop</h2>
            <p className="text-xs text-gray-300">Start You're Daily Shopping with Foodzy</p>
            <div className="flex items-center gap-2 pt-2">
              <input type="email" placeholder="Your email address" className="py-2 px-4 rounded-full text-xs text-gray-800 bg-white focus:outline-none w-56" />
              <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full">Subscribe</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-44 flex justify-end">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500" alt="Fresh Groceries" className="h-full object-contain" />
          </div>
        </section>

        {/* 8. FEATURE ICONS (Bottom Bar) */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-gray-100">
          {[
            { icon: '💵', title: 'Best prices & offers', desc: 'Orders $50 or more' },
            { icon: '🚚', title: 'Free delivery', desc: '24/7 amazing services' },
            { icon: '🏷️', title: 'Great daily deal', desc: 'When you sign up' },
            { icon: '🌱', title: 'Wide assortment', desc: 'Mega Discounts' },
            { icon: '🔄', title: 'Easy returns', desc: 'Within 30 days' },
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
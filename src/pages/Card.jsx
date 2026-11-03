import React from 'react';

export default function Card() {
  const cartItems = [
    {
      id: 1,
      name: 'Organic Lemon',
      price: 50.00,
      image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=200',
    },
    {
      id: 2,
      name: 'Apple Juice',
      price: 75.00,
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200',
    },
    {
      id: 3,
      name: 'Watermelon 5kg pack',
      price: 48.00,
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=200',
    },
    {
      id: 4,
      name: 'Pomegranate 5kg pack',
      price: 90.00,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200',
    },
    {
      id: 5,
      name: 'Organic Peach Fruits',
      price: 50.00,
      image: 'https://images.unsplash.com/photo-1603569283847-be29b883bc5d?w=200',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Cart</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Cart</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* CART TABLE */}
        <div className="overflow-x-auto border border-gray-100 rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-100">
              <tr>
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6 text-center">Quantity</th>
                <th className="py-4 px-6">Total</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-gray-100"
                    />
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium">${item.price.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center border border-gray-200 rounded-md w-24 mx-auto py-1 px-2 gap-3 text-xs">
                      <button className="text-gray-400 hover:text-gray-700 font-bold">-</button>
                      <span className="font-bold text-gray-800">1</span>
                      <button className="text-gray-400 hover:text-gray-700 font-bold">+</button>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900 font-bold">${item.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CART BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold transition-colors">
            Continue Shopping
          </button>
          <button className="w-full sm:w-auto px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-colors shadow-sm">
            Check Out
          </button>
        </div>

        {/* POPULAR PRODUCTS SECTION */}
        <section className="pt-10 space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900">Popular Products</h2>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Best snacks with hazelnut mix pack 200gm', price: '$120.25', oldPrice: '$123.25', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300' },
              { title: 'Sweet snacks crunchy nut mix 200gm pack', price: '$100.00', oldPrice: '$110.00', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300' },
              { title: 'Best snacks with hazelnut mix pack 200gm', price: '$120.25', oldPrice: '$123.25', image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=300' },
              { title: 'Sweet snacks crunchy nut mix 200gm pack', price: '$100.00', oldPrice: '$110.00', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 text-center space-y-3 hover:shadow-sm transition-shadow">
                <div className="h-40 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <img src={prod.image} alt={prod.title} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Snacks</span>
                <h4 className="text-xs font-bold text-gray-800 line-clamp-2">{prod.title}</h4>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-extrabold text-red-500">{prod.price}</span>
                  <span className="text-xs text-gray-400 line-through">{prod.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 mt-16 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">👨‍🍳</span>
            <span className="text-lg font-black text-gray-900">Foodzy</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">Foodzy is an awesome grocery store website template for all your daily needs.</p>
          <p className="text-[11px] text-gray-600">📍 Address: 517 New Boston St, MA</p>
          <p className="text-[11px] text-gray-600">📞 Call Us: +123 ( 456 ) ( 7890 )</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-[11px]">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Delivery Information</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Category</h4>
          <ul className="space-y-2 text-[11px]">
            <li className="hover:underline cursor-pointer">Dairy & Milk</li>
            <li className="hover:underline cursor-pointer">Snack & Spice</li>
            <li className="hover:underline cursor-pointer">Fast Food</li>
            <li className="hover:underline cursor-pointer">Juice & Drinks</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Subscribe Newsletter</h4>
          <div className="flex items-center border border-gray-200 rounded overflow-hidden mb-3">
            <input type="email" placeholder="Your email..." className="w-full px-2 py-1.5 text-xs focus:outline-none" />
            <button className="bg-emerald-600 text-white px-3 py-1.5 text-xs">➔</button>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs cursor-pointer">📷</div>
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs cursor-pointer">📘</div>
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs cursor-pointer">🐦</div>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-100 pt-4 text-[10px] text-gray-400">
        &copy; 2026 Foodzy. All rights reserved.
      </div>
    </footer>
  );
}
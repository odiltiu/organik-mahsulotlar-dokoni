import React from 'react';

export default function Chackout() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Checkout</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Checkout</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT SIDE: SUMMARY & METHODS */}
        <div className="space-y-6">
          
          {/* Summary Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-3">Summary</h3>
            
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Sub-Total</span>
                <span className="font-semibold text-gray-800">$80.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="font-semibold text-gray-800">$80.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t text-sm font-bold text-gray-900">
                <span>Total Amount</span>
                <span className="text-red-500">$80.00</span>
              </div>
            </div>

            {/* Product items preview */}
            <div className="space-y-3 pt-3 border-t border-gray-200/60">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100" alt="Dates" className="w-12 h-12 rounded-lg object-cover bg-white p-1 border" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Dates Value Pack Pouch</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-red-500">$120.25</span>
                    <span className="text-[10px] text-gray-400 line-through">$123.25</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=100" alt="Nuts" className="w-12 h-12 rounded-lg object-cover bg-white p-1 border" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Smoked Honey Spiced Nuts</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-red-500">$120.25</span>
                    <span className="text-[10px] text-gray-400 line-through">$123.25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Method Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-3">Delivery Method</h3>
            <p className="text-[11px] text-gray-400">Please select the preferred shipping method to use on this order.</p>

            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="shipping" defaultChecked className="accent-red-500" />
                <span className="font-semibold text-gray-700">Free Shipping</span>
                <span className="text-gray-400 text-[11px]">(Rate: $0.00)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="shipping" className="accent-red-500" />
                <span className="font-semibold text-gray-700">Flat Rate</span>
                <span className="text-gray-400 text-[11px]">(Rate: $5.00)</span>
              </label>
            </div>

            <div className="pt-2">
              <label className="text-xs font-semibold text-gray-700 block mb-1">Add Comments About Your Order</label>
              <textarea rows="3" className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" placeholder="Notes..."></textarea>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-3">Payment Method</h3>
            <p className="text-[11px] text-gray-400">Please select the preferred payment method to use on this order.</p>

            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="accent-red-500" />
                <span className="font-semibold text-gray-700">Cash On Delivery</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" className="accent-red-500" />
                <span className="font-semibold text-gray-700">UPI</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="payment" className="accent-red-500" />
                <span className="font-semibold text-gray-700">Bank Transfer</span>
              </label>
            </div>

            {/* Payment Logos */}
            <div className="flex items-center gap-2 pt-2 border-t">
              <span className="text-[10px] font-bold px-2 py-1 bg-blue-600 text-white rounded">VISA</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-red-600 text-white rounded">MasterCard</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-blue-400 text-white rounded">PayPal</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-pink-600 text-white rounded">Skrill</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: CUSTOMER FORMS & BILLING DETAILS */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* New / Returning Customer Box */}
          <div className="border border-gray-100 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">New Customer</h3>
              <p className="text-xs text-gray-400 mb-3">Checkout Options:</p>

              <div className="space-y-2 text-xs mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="accountOption" defaultChecked className="accent-red-500" />
                  <span className="text-gray-700">Register Account</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="accountOption" className="accent-red-500" />
                  <span className="text-gray-700">Guest Account</span>
                </label>
              </div>

              <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">
                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
              </p>

              <button className="px-6 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">
                Continue
              </button>
            </div>

            <hr className="border-gray-100" />

            {/* Returning Customer */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Returning Customer</h3>
              <form className="space-y-4 max-w-md">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">Password</label>
                  <input type="password" placeholder="Enter your password" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
                </div>

                <div className="flex items-center gap-4">
                  <button type="button" className="px-6 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">
                    Login
                  </button>
                  <a href="#" className="text-xs text-red-500 hover:underline">Forgot Password?</a>
                </div>
              </form>
            </div>
          </div>

          {/* Billing Details Box */}
          <div className="border border-gray-100 rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-3">Billing Details</h3>

            <div className="space-y-2 text-xs mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="addressOption" className="accent-red-500" />
                <span className="text-gray-700">I want to use an existing address</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="addressOption" defaultChecked className="accent-red-500" />
                <span className="text-gray-700">I want to use a new address</span>
              </label>
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">First Name*</label>
                <input type="text" placeholder="Enter your first name" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Last Name*</label>
                <input type="text" placeholder="Enter your last name" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-700 block mb-1">Address</label>
                <input type="text" placeholder="Address line 1" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">City*</label>
                <select className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 bg-white">
                  <option value="">City</option>
                  <option value="Tashkent">Tashkent</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Post Code</label>
                <input type="text" placeholder="Post Code" className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Country*</label>
                <select className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 bg-white">
                  <option value="">Country</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">Region / State</label>
                <select className="w-full text-xs p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 bg-white">
                  <option value="">Region/State</option>
                </select>
              </div>
            </form>

            <div className="flex justify-end pt-4">
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-sm">
                Place Order
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
import React from 'react';

export default function Login() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Login</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Login</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex items-center justify-center">
        
        {/* LOGIN FORM CARD */}
        <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl p-8 shadow-xs">
          
          {/* Logo / Title */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🥭</span>
              <span className="text-xl font-bold tracking-tight text-gray-900">FoodTrove</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 accent-red-500"
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                Login
              </button>
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-red-500 transition-colors"
              >
                Signup?
              </a>
            </div>
          </form>

        </div>

      </main>
    </div>
  );
}
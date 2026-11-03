import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postCode: '',
    country: '',
    regionState: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="w-full bg-white text-gray-800 font-sans min-h-screen">
      
      {/* PAGE HEADER BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Register</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Register</span>
        </div>
      </section>

      {/* FORM CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex justify-center items-center">
        <div className="w-full max-w-xl border border-gray-100 rounded-2xl p-8 bg-white shadow-xs">
          
          {/* Logo / Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥑</span>
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">FoodTrove</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your email"
                  className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your phone number"
                  className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            {/* City & Post Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-3 py-2.5 bg-gray-100/70 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Post Code</label>
                <input
                  type="text"
                  name="postCode"
                  value={formData.postCode}
                  onChange={handleChange}
                  placeholder="Post Code"
                  className="w-full px-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Country & Region State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Country*</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full px-3 py-2.5 bg-gray-100/70 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Region/State*</label>
                <input
                  type="text"
                  name="regionState"
                  value={formData.regionState}
                  onChange={handleChange}
                  placeholder="Region/State"
                  className="w-full px-3 py-2.5 bg-gray-100/70 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button & Links */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                Signup
              </button>

              <a
                href="#login"
                className="text-gray-500 hover:text-red-500 text-xs font-medium transition-colors"
              >
                Have an account?
              </a>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
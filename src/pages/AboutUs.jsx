import React from 'react';

export default function AboutUs() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* PAGE HEADER / BREADCRUMB BANNER */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">About Us</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">About Us</span>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ABOUT CONTENT & IMAGE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Box */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              About The Carrot
            </h2>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.
            </p>
            

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
              recusandae magni consequuntur architecto, ipsum deleniti expedita doloribus
              suscipit voluptatum eius perferendis amet!.
            </p>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
              architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
              libero nesciunt qui illum? Voluptates deserunt adipisci voluptatum magni sunt sed
              blanditiis quod aspernatur iusto?
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 mt-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-red-500">
                  0.1<span className="text-sm font-semibold">k</span>
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Vendors</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-red-500">
                  23<span className="text-sm font-semibold">k</span>
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Customers</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-red-500">
                  2<span className="text-sm font-semibold">k</span>
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">Products</p>
              </div>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="w-full h-full min-h-[350px] md:min-h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
              alt="Fresh Organic Vegetables"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </section>

        {/* FEATURES GRID SECTION */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Product Packing',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            },
            {
              title: '24X7 Support',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            },
            {
              title: 'Delivery in 5 Days',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            },
            {
              title: 'Payment Secure',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 text-center space-y-2 border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="w-8 h-0.5 bg-gray-300 mx-auto mb-4"></div>
              <h4 className="font-bold text-sm text-gray-900">{feature.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
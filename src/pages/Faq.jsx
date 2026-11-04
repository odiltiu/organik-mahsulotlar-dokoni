import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import SafeImage from '../components/SafeImage'

const FAQ_ITEMS = [
  {
    question: 'How fresh are your organic products?',
    answer: 'Fruits, vegetables and bakery items are sourced from partner farms and bakeries every morning and packed on the day your order is dispatched.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Add products to your cart, open the cart page, press Check Out and fill in your billing details. You can pay on delivery or choose another payment method at checkout.',
  },
  {
    question: 'What are the delivery options and costs?',
    answer: 'Free Shipping is available on every order. If you need faster handling, choose the Flat Rate option for a $5.00 delivery fee.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Yes. Call us before the order is dispatched and we will update or cancel it free of charge.',
  },
  {
    question: 'What if a product arrives damaged or not fresh?',
    answer: 'Contact us on the day of delivery with a photo of the product and we will replace it or refund the item.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'You can pay with Cash On Delivery, UPI or Bank Transfer. Card logos shown on the site are for illustration in this demo store.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="FAQ" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xs">
            <SafeImage
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
              alt="Fresh vegetables layout"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.question} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-xs">
                  <h2>
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left py-4 px-5 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800 hover:text-red-500 transition-colors focus-visible:outline-2 focus-visible:outline-red-500"
                    >
                      <span>{item.question}</span>
                      <span className="text-gray-400 text-lg leading-none ml-2" aria-hidden="true">
                        {isOpen ? '∨' : '>'}
                      </span>
                    </button>
                  </h2>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="px-5 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-3"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Faq

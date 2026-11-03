import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: 'What Facilities Does Your Hotel Have?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto libero, vero natus.',
    },
    {
      question: 'How Do I Book A Room For My Vacation?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
    {
      question: 'How We are best among others?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
    {
      question: 'Is There Any Fitness Center In Your Hotel?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
    {
      question: 'What Type Of Room Service Do You Offer?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
    {
      question: 'What Facilities Does Your Hotel Have?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
    {
      question: 'How Do I Book A Room For My Vacation?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* BANNER SECTION */}
      <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Faq</h1>
        <div className="text-xs font-medium space-x-1 opacity-90">
          <span>Home</span>
          <span>-</span>
          <span className="font-semibold">Faq</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE IMAGE */}
          <div className="w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
              alt="Fresh vegetables layout"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-4 px-5 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800 hover:text-red-500 transition-colors focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <span className="text-gray-400 text-lg leading-none ml-2">
                      {isOpen ? '∨' : '>'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
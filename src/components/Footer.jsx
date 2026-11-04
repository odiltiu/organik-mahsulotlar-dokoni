import { Link } from 'react-router-dom'
import NewsletterForm from './NewsletterForm'
import { CATEGORIES } from '../data/products'

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Delivery Information', to: '/faq' },
  { label: 'Blog', to: '/blog-full-width' },
  { label: 'Wishlist', to: '/wishlist' },
]

const LINK_CLASS = 'hover:underline hover:text-emerald-600'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 mt-16 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">👨‍🍳</span>
            <span className="text-lg font-black text-gray-900">Foodzy</span>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">Foodzy is an organic grocery store for all your daily needs.</p>
          <p className="text-[11px] text-gray-600">📍 Address: 517 New Boston St, MA</p>
          <p className="text-[11px] text-gray-600">📞 Call Us: +123 ( 456 ) ( 7890 )</p>
        </div>

        <nav aria-label="Company">
          <h2 className="font-bold text-gray-900 mb-3">Company</h2>
          <ul className="space-y-2 text-[11px]">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}><Link to={link.to} className={LINK_CLASS}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categories">
          <h2 className="font-bold text-gray-900 mb-3">Category</h2>
          <ul className="space-y-2 text-[11px]">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link to={`/product-list-left?category=${encodeURIComponent(category)}`} className={LINK_CLASS}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-bold text-gray-900 mb-3">Subscribe Newsletter</h2>
          <NewsletterForm />
        </div>
      </div>

      <div className="text-center border-t border-gray-100 pt-4 text-[10px] text-gray-400">
        &copy; {new Date().getFullYear()} Foodzy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

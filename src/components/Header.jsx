import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeaderSearch from './header/HeaderSearch'
import MobileMenu from './header/MobileMenu'
import NavDropdown from './header/NavDropdown'
import { ACCOUNT_LINKS, HOME_LINKS, NAV_GROUPS } from '../constants/navigation'
import { useCart } from '../hooks/useCart'

const ICON_LINK_CLASS = 'relative flex items-center gap-2 hover:text-emerald-600 transition-colors'

function CountBadge({ count, label }) {
  if (count === 0) return null
  return (
    <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 rounded-full bg-red-500 text-white text-[10px] leading-4 text-center font-bold">
      {count}
      <span className="sr-only"> {label}</span>
    </span>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount, wishlistIds } = useCart()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="border-b border-gray-100 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium text-gray-700">
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="md:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>

            <nav aria-label="Main" className="hidden md:flex items-center gap-6">
              {HOME_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) => `hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
              {NAV_GROUPS.map((group) => <NavDropdown key={group.label} label={group.label} items={group.items} />)}
            </nav>
          </div>

          <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 hover:text-emerald-600">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+123 ( 456 ) ( 7890 )</span>
          </a>
        </div>
      </div>

      <div className="py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-12 h-12 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center text-2xl" aria-hidden="true">👨‍🍳</span>
            <span>
              <span className="block text-2xl font-black text-gray-900 leading-none">Foodzy</span>
              <span className="block text-xs text-gray-500 font-medium mt-0.5">A Treasure of Tastes</span>
            </span>
          </Link>

          <div className="order-last w-full md:order-none md:w-auto md:flex-1 md:max-w-2xl md:mx-4">
            <HeaderSearch />
          </div>

          <div className="flex items-center gap-5 sm:gap-6 text-sm font-semibold text-gray-800">
            <NavDropdown label="Account" items={ACCOUNT_LINKS} align="right">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="sr-only sm:not-sr-only">Account</span>
            </NavDropdown>

            <Link to="/wishlist" className={ICON_LINK_CLASS}>
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="sr-only sm:not-sr-only">Wishlist</span>
              <CountBadge count={wishlistIds.length} label="saved products" />
            </Link>

            <Link to="/cart" className={ICON_LINK_CLASS}>
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="sr-only sm:not-sr-only">Cart</span>
              <CountBadge count={itemCount} label="items in cart" />
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && <MobileMenu onNavigate={closeMenu} />}
    </header>
  )
}

export default Header

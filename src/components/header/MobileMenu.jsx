import { Link } from 'react-router-dom'
import { ACCOUNT_LINKS, HOME_LINKS, NAV_GROUPS } from '../../constants/navigation'

const LINK_CLASS = 'block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'

function MobileMenu({ onNavigate }) {
  const sections = [
    { label: 'Home', items: HOME_LINKS },
    ...NAV_GROUPS,
    { label: 'Account', items: ACCOUNT_LINKS },
  ]

  return (
    <nav id="mobile-menu" aria-label="Mobile" className="md:hidden border-t border-gray-100 bg-white max-h-[70vh] overflow-y-auto">
      {sections.map((section) => (
        <div key={section.label} className="py-2 border-b border-gray-100 last:border-b-0">
          <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wide text-gray-400">{section.label}</p>
          <ul>
            {section.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={onNavigate} className={LINK_CLASS}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default MobileMenu

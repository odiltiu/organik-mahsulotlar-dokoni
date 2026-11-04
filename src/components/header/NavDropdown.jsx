import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function NavDropdown({ label, items, align = 'left', children }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const close = () => setIsOpen(false)

  const handleBlur = (event) => {
    if (!wrapperRef.current?.contains(event.relatedTarget)) close()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') close()
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={close}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 hover:text-emerald-600 transition-colors py-1"
      >
        {children ?? <span>{label}</span>}
        <span className="text-xs" aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <ul
          className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} z-50 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col text-xs font-normal`}
        >
          {items.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={close} className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavDropdown

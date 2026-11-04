import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../data/products'

function HeaderSearch() {
  const navigate = useNavigate()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const params = new URLSearchParams()
    const query = String(formData.get('q') ?? '').trim()
    const category = String(formData.get('category') ?? '')
    if (query) params.set('q', query)
    if (category) params.set('category', category)
    navigate(`/full-wide${params.size > 0 ? `?${params}` : ''}`)
  }

  return (
    <form
      role="search"
      onSubmit={handleSearchSubmit}
      className="flex items-center border-2 border-emerald-500 rounded-md overflow-hidden bg-white"
    >
      <label htmlFor="header-search" className="sr-only">Search for items</label>
      <input
        id="header-search"
        name="q"
        type="search"
        placeholder="Search For items..."
        className="w-full min-w-0 py-2.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <label htmlFor="header-category" className="sr-only">Category</label>
      <select
        id="header-category"
        name="category"
        className="hidden sm:block border-l border-emerald-500 px-3 py-2.5 text-sm text-gray-600 bg-white focus:outline-none"
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>
      <button type="submit" aria-label="Search" className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 flex items-center justify-center transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
}

export default HeaderSearch

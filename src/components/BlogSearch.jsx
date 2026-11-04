import { useNavigate } from 'react-router-dom'

function BlogSearch() {
  const navigate = useNavigate()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const query = String(new FormData(event.currentTarget).get('q') ?? '').trim()
    navigate(query ? `/full-wide?q=${encodeURIComponent(query)}` : '/full-wide')
  }

  return (
    <form role="search" onSubmit={handleSearchSubmit} className="flex items-center gap-2">
      <label htmlFor="blog-search" className="sr-only">Search products</label>
      <input
        id="blog-search"
        name="q"
        type="search"
        placeholder="Search products..."
        className="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-red-500"
      />
      <button type="submit" aria-label="Search" className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold">
        Q
      </button>
    </form>
  )
}

export default BlogSearch

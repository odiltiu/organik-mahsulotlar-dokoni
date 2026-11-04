import { useRef } from 'react'
import PageBanner from '../PageBanner'
import Pagination from './Pagination'
import ProductCard from './ProductCard'
import ShopSidebar from './ShopSidebar'
import { SORT_OPTIONS, useShopFilters } from '../../hooks/useShopFilters'

function ShopView({ title, withSidebar }) {
  const filters = useShopFilters()
  const resultsRef = useRef(null)

  const handlePageChange = (nextPage) => {
    filters.setPage(nextPage)
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const gridClass = withSidebar
    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title={title} />
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 py-10 ${withSidebar ? 'grid grid-cols-1 lg:grid-cols-4 gap-8' : 'space-y-8'}`}>
        {withSidebar && (
          <ShopSidebar
            categories={filters.categories}
            maxPrice={filters.maxPrice}
            onChange={filters.updateFilters}
            onReset={filters.resetFilters}
          />
        )}

        <div ref={resultsRef} className={`scroll-mt-4 space-y-6 ${withSidebar ? 'lg:col-span-3' : ''}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-500">
            <p aria-live="polite">
              We found {filters.totalResults} {filters.totalResults === 1 ? 'item' : 'items'} for you
              {filters.query && <> matching <strong className="text-gray-800">“{filters.query}”</strong></>}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-by">Sort By:</label>
              <select
                id="sort-by"
                value={filters.sort}
                onChange={(event) => filters.updateFilters({ sort: event.target.value === 'featured' ? '' : event.target.value })}
                className="bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-red-500 text-gray-700"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {filters.visibleProducts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-sm text-gray-500">No products match your filters.</p>
              <button
                type="button"
                onClick={filters.resetFilters}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={gridClass}>
              {filters.visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} imageHeight={withSidebar ? 'h-44' : 'h-48'} />
              ))}
            </div>
          )}

          <Pagination page={filters.page} totalPages={filters.totalPages} onPageChange={handlePageChange} />
        </div>
      </main>
    </div>
  )
}

export default ShopView

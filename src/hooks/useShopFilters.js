import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PRICE_MAX, PRODUCTS } from '../data/products'

export const PAGE_SIZE = 8

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'low-high', label: 'Price: Low to High' },
  { value: 'high-low', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const SORTERS = {
  featured: () => 0,
  'low-high': (a, b) => a.price - b.price,
  'high-low': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
}

function readMaxPrice(rawValue) {
  const parsed = Number(rawValue)
  if (!rawValue || Number.isNaN(parsed)) return PRICE_MAX
  return Math.min(PRICE_MAX, Math.max(0, parsed))
}

function matchesQuery(product, query) {
  if (!query) return true
  const haystack = `${product.title} ${product.category} ${product.brand}`.toLowerCase()
  return haystack.includes(query.toLowerCase())
}

function withParams(current, changes) {
  const next = new URLSearchParams(current)
  Object.entries(changes).forEach(([key, value]) => {
    next.delete(key)
    const values = Array.isArray(value) ? value : [value]
    values.filter((item) => item !== '' && item != null).forEach((item) => next.append(key, item))
  })
  return next
}

export function useShopFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = (searchParams.get('q') ?? '').trim()
  const categories = searchParams.getAll('category').filter((name) => CATEGORIES.includes(name))
  const maxPrice = readMaxPrice(searchParams.get('max'))
  const requestedSort = searchParams.get('sort')
  const sort = Object.hasOwn(SORTERS, requestedSort ?? '') ? requestedSort : 'featured'
  const requestedPage = Number(searchParams.get('page')) || 1

  const categoriesKey = categories.join('|')

  const filtered = useMemo(() => {
    const selected = categoriesKey ? categoriesKey.split('|') : []
    return PRODUCTS.filter(
      (product) =>
        matchesQuery(product, query) &&
        product.price <= maxPrice &&
        (selected.length === 0 || selected.includes(product.category)),
    ).sort(SORTERS[sort])
  }, [query, maxPrice, sort, categoriesKey])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const page = Math.min(Math.max(1, requestedPage), totalPages)
  const visibleProducts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const updateFilters = (changes) => {
    setSearchParams(withParams(searchParams, { ...changes, page: null }), { replace: true })
  }

  const setPage = (nextPage) => {
    setSearchParams(withParams(searchParams, { page: nextPage > 1 ? nextPage : null }))
  }

  const resetFilters = () => setSearchParams({}, { replace: true })

  return {
    query,
    categories,
    maxPrice,
    sort,
    page,
    totalPages,
    totalResults: filtered.length,
    visibleProducts,
    updateFilters,
    setPage,
    resetFilters,
  }
}

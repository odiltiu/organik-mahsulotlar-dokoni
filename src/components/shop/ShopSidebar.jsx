import { CATEGORIES, PRICE_MAX, PRODUCTS } from '../../data/products'
import { formatPrice } from '../../utils/formatPrice'

const BOX_CLASS = 'border border-gray-100 rounded-2xl p-5 space-y-4 bg-gray-50/50'

function countInCategory(category) {
  return PRODUCTS.filter((product) => product.category === category).length
}

function ShopSidebar({ categories, maxPrice, onChange, onReset }) {
  const toggleCategory = (category) => {
    const next = categories.includes(category)
      ? categories.filter((name) => name !== category)
      : [...categories, category]
    onChange({ category: next })
  }

  const handlePriceChange = (event) => {
    const value = Number(event.target.value)
    onChange({ max: value >= PRICE_MAX ? '' : value })
  }

  return (
    <aside className="space-y-6" aria-label="Product filters">
      <fieldset className={BOX_CLASS}>
        <legend className="sr-only">Product Category</legend>
        <h2 className="text-xs font-bold text-gray-900 border-b pb-2" aria-hidden="true">Product Category</h2>
        <div className="space-y-2 text-xs text-gray-600">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center justify-between cursor-pointer">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="accent-red-500 rounded"
                />
                {category}
              </span>
              <span className="text-gray-400 text-[10px]">[{countInCategory(category)}]</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={BOX_CLASS}>
        <label htmlFor="price-range" className="block text-xs font-bold text-gray-900 border-b pb-2">
          Filter By Price
        </label>
        <input
          id="price-range"
          type="range"
          min="0"
          max={PRICE_MAX}
          step="1"
          value={maxPrice}
          onChange={handlePriceChange}
          className="w-full accent-red-500"
        />
        <p className="text-xs text-gray-600">
          Price : <strong>{formatPrice(0)} — {formatPrice(maxPrice)}</strong>
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full py-2 text-xs font-bold text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
      >
        Reset filters
      </button>
    </aside>
  )
}

export default ShopSidebar

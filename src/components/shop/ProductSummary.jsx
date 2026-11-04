import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'

const MAX_STARS = 5

function renderStars(rating) {
  const filled = Math.round(rating)
  return '★'.repeat(filled) + '☆'.repeat(MAX_STARS - filled)
}

function ProductSummary({ product }) {
  const { addItem, toggleWishlist, wishlistIds, maxQuantity } = useCart()
  const [quantity, setQuantity] = useState(1)
  const isSaved = wishlistIds.includes(product.id)

  const metaRows = [
    ['Brand', product.brand],
    ['Category', product.category],
    ['Diet Type', product.diet],
    ['Weight', product.weight],
  ]

  return (
    <div className="space-y-4 text-xs">
      <h2 className="text-lg font-bold text-gray-900 leading-snug">{product.title}</h2>
      <p className="text-gray-400 text-[11px] leading-relaxed">{product.description}</p>

      <div className="flex items-center gap-2">
        <span className="text-yellow-400" aria-hidden="true">{renderStars(product.rating)}</span>
        <span className="text-gray-400 text-[11px]">{product.rating.toFixed(1)} out of 5</span>
      </div>

      <dl className="space-y-1.5 text-gray-600 border-y border-gray-100 py-3">
        {metaRows.map(([label, value]) => (
          <div key={label} className="flex">
            <dt className="w-24 font-bold text-gray-800">{label}:</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center gap-3">
        <span className="text-xl font-extrabold text-red-500">{formatPrice(product.price)}</span>
        <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 gap-3 bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
            className="text-gray-400 hover:text-gray-700 font-bold disabled:opacity-40"
          >
            -
          </button>
          <span className="font-bold text-gray-800 min-w-4 text-center" aria-live="polite">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            disabled={quantity >= maxQuantity}
            onClick={() => setQuantity(quantity + 1)}
            className="text-gray-400 hover:text-gray-700 font-bold disabled:opacity-40"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => addItem(product.id, quantity)}
          className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
        >
          Add To Cart
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={isSaved}
          aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`p-2.5 border rounded-lg transition-colors ${
            isSaved ? 'border-red-500 text-red-500' : 'border-gray-200 text-gray-400 hover:text-red-500'
          }`}
        >
          {isSaved ? '♥' : '♡'}
        </button>
      </div>
    </div>
  )
}

export default ProductSummary

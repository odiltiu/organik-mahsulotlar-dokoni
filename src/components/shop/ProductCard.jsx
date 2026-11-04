import { Link } from 'react-router-dom'
import SafeImage from '../SafeImage'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'

function ProductCard({ product, imageHeight = 'h-44' }) {
  const { wishlistIds, addItem, toggleWishlist } = useCart()
  const isSaved = wishlistIds.includes(product.id)

  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-4 text-center space-y-3 hover:shadow-md transition-all group relative">
      <div className={`${imageHeight} bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 relative`}>
        <Link to={`/product/${product.id}`} aria-label={product.title} className="flex h-full w-full items-center justify-center">
          <SafeImage
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={isSaved}
          aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-xs transition-colors ${isSaved ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        >
          <svg className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <span className="text-[10px] text-gray-400 uppercase font-semibold block">{product.category}</span>

      <div className="flex items-center justify-center text-yellow-400 text-xs gap-1">
        <span aria-hidden="true">★</span>
        <span className="text-gray-500 font-medium">{product.rating.toFixed(1)}</span>
      </div>

      <h3 className="text-xs font-bold text-gray-800 line-clamp-2 min-h-8">
        <Link to={`/product/${product.id}`} className="hover:text-red-500 transition-colors">
          {product.title}
        </Link>
      </h3>

      <div className="flex items-center justify-center gap-2 pt-1">
        <span className="text-sm font-extrabold text-red-500">{formatPrice(product.price)}</span>
        <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
      </div>

      <button
        type="button"
        onClick={() => addItem(product.id)}
        className="w-full bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold py-2 rounded-lg transition-colors"
      >
        Add To Cart
      </button>
    </article>
  )
}

export default ProductCard

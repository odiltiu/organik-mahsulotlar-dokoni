import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import SafeImage from '../components/SafeImage'
import ProductCard from '../components/shop/ProductCard'
import { useCart } from '../hooks/useCart'
import { PRODUCTS } from '../data/products'
import { formatPrice } from '../utils/formatPrice'

const SUGGESTION_COUNT = 4
const STEP_BUTTON_CLASS = 'text-gray-400 hover:text-gray-700 font-bold disabled:opacity-40'

function EmptyCart() {
  return (
    <div className="text-center py-16 space-y-4">
      <p className="text-sm text-gray-500">Your cart is empty.</p>
      <Link to="/full-wide" className="inline-block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors">
        Start Shopping
      </Link>
    </div>
  )
}

function CartRow({ item }) {
  const { setItemQuantity, removeItem, maxQuantity } = useCart()

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="py-4 px-6">
        <Link to={`/product/${item.id}`} className="flex items-center gap-4">
          <SafeImage src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-gray-100" />
          <span className="font-semibold text-gray-900 hover:text-red-500">{item.title}</span>
        </Link>
      </td>
      <td className="py-4 px-6 text-gray-600 font-medium">{formatPrice(item.price)}</td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-center border border-gray-200 rounded-md w-24 mx-auto py-1 px-2 gap-3 text-xs">
          <button
            type="button"
            aria-label={`Decrease quantity of ${item.title}`}
            disabled={item.quantity <= 1}
            onClick={() => setItemQuantity(item.id, item.quantity - 1)}
            className={STEP_BUTTON_CLASS}
          >
            -
          </button>
          <span className="font-bold text-gray-800">{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${item.title}`}
            disabled={item.quantity >= maxQuantity}
            onClick={() => setItemQuantity(item.id, item.quantity + 1)}
            className={STEP_BUTTON_CLASS}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-900 font-bold">{formatPrice(item.lineTotal)}</td>
      <td className="py-4 px-6 text-center">
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.title} from cart`}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </td>
    </tr>
  )
}

function CartPage() {
  const { items, subtotal } = useCart()
  const suggestions = PRODUCTS.filter((product) => !items.some((item) => item.id === product.id)).slice(0, SUGGESTION_COUNT)

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Cart" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="overflow-x-auto border border-gray-100 rounded-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-100">
                  <tr>
                    <th scope="col" className="py-4 px-6">Product</th>
                    <th scope="col" className="py-4 px-6">Price</th>
                    <th scope="col" className="py-4 px-6 text-center">Quantity</th>
                    <th scope="col" className="py-4 px-6">Total</th>
                    <th scope="col" className="py-4 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item) => <CartRow key={item.id} item={item} />)}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/full-wide" className="w-full sm:w-auto text-center px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold transition-colors">
                Continue Shopping
              </Link>
              <div className="flex w-full sm:w-auto flex-col sm:flex-row items-center gap-4">
                <p className="text-sm font-bold text-gray-900">
                  Subtotal: <span className="text-red-500">{formatPrice(subtotal)}</span>
                </p>
                <Link to="/checkout" className="w-full sm:w-auto text-center px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-colors shadow-sm">
                  Check Out
                </Link>
              </div>
            </div>
          </>
        )}

        {suggestions.length > 0 && (
          <section className="pt-10 space-y-6">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestions.map((product) => <ProductCard key={product.id} product={product} imageHeight="h-40" />)}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default CartPage

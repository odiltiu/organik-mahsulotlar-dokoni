import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/shop/ProductCard'
import { useCart } from '../hooks/useCart'
import { PRODUCTS } from '../data/products'

function WishlistPage() {
  const { wishlistIds } = useCart()
  const savedProducts = PRODUCTS.filter((product) => wishlistIds.includes(product.id))

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Wishlist" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {savedProducts.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-sm text-gray-500">You have not saved any products yet. Tap the heart on a product to keep it here.</p>
            <Link to="/full-wide" className="inline-block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedProducts.map((product) => <ProductCard key={product.id} product={product} imageHeight="h-44" />)}
          </div>
        )}
      </main>
    </div>
  )
}

export default WishlistPage

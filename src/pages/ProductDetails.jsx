import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/shop/ProductCard'
import ProductGallery from '../components/shop/ProductGallery'
import ProductSummary from '../components/shop/ProductSummary'
import ProductTabs from '../components/shop/ProductTabs'
import NotFound from './NotFound'
import { CATEGORIES, PRODUCTS, getProductById } from '../data/products'

const RELATED_COUNT = 4

function getRelatedProducts(product) {
  const others = PRODUCTS.filter((item) => item.id !== product.id)
  const sameCategory = others.filter((item) => item.category === product.category)
  const rest = others.filter((item) => item.category !== product.category)
  return [...sameCategory, ...rest].slice(0, RELATED_COUNT)
}

function CategoryLinks() {
  return (
    <aside aria-label="Categories" className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-gray-50/50 h-fit">
      <h2 className="text-xs font-bold text-gray-900 border-b pb-2">Product Category</h2>
      <ul className="space-y-2 text-xs text-gray-600">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link
              to={`/product-list-left?category=${encodeURIComponent(category)}`}
              className="flex items-center justify-between hover:text-red-500"
            >
              <span>{category}</span>
              <span className="text-gray-400 text-[10px]">
                [{PRODUCTS.filter((item) => item.category === category).length}]
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) return <NotFound />

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Product" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <CategoryLinks />

        <div className="lg:col-span-3 space-y-10">
          {/* key: boshqa mahsulotga o'tilganda rasm va miqdor qayta boshlanadi */}
          <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <ProductGallery title={product.title} images={product.gallery} />
            <ProductSummary product={product} />
          </div>

          <ProductTabs key={`tabs-${product.id}`} product={product} />

          <section className="space-y-6 pt-4">
            <h3 className="text-xl font-extrabold text-gray-900 text-center">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {getRelatedProducts(product).map((item) => (
                <ProductCard key={item.id} product={item} imageHeight="h-36" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails

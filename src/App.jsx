import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'

const Home1 = lazy(() => import('./pages/Home1'))
const Home2 = lazy(() => import('./pages/Home2'))
const Home3 = lazy(() => import('./pages/Home3'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const BlogFullWidth = lazy(() => import('./pages/BlogFullWidth'))
const BlogRightSide = lazy(() => import('./pages/BlogRightSide'))
const CartPage = lazy(() => import('./pages/CartPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const Faq = lazy(() => import('./pages/Faq'))
const FullWide = lazy(() => import('./pages/FullWide'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const ProductListLeft = lazy(() => import('./pages/ProductListLeft'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const WishlistPage = lazy(() => import('./pages/WishlistPage'))

function PageLoader() {
  return (
    <div role="status" className="py-24 text-center text-xs text-gray-400">
      Loading...
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home1" element={<Navigate to="/" replace />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />

          <Route path="/product-list-left" element={<ProductListLeft />} />
          <Route path="/full-wide" element={<FullWide />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product-details" element={<Navigate to="/product/1" replace />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/card" element={<Navigate to="/cart" replace />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/chackout" element={<Navigate to="/checkout" replace />} />
          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registion" element={<Navigate to="/register" replace />} />

          <Route path="/blog-full-width" element={<BlogFullWidth />} />
          <Route path="/blog-right-side" element={<BlogRightSide />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App

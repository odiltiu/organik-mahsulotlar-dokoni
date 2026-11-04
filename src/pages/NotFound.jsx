import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

function NotFound() {
  return (
    <div className="w-full bg-white text-gray-800">
      <PageBanner title="Page not found" />
      <main className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <p className="text-6xl font-black text-red-500">404</p>
        <p className="text-sm text-gray-500">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors">
          Back to Home
        </Link>
      </main>
    </div>
  )
}

export default NotFound

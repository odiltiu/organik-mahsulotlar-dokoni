import { Link } from 'react-router-dom'

function PageBanner({ title }) {
  return (
    <section className="w-full bg-red-500 py-6 px-4 md:px-12 text-white flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      <nav aria-label="Breadcrumb" className="text-xs font-medium space-x-1 opacity-90">
        <Link to="/" className="hover:underline">Home</Link>
        <span aria-hidden="true">-</span>
        <span aria-current="page" className="font-semibold">{title}</span>
      </nav>
    </section>
  )
}

export default PageBanner

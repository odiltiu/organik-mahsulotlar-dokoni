const BUTTON_CLASS = 'px-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:hover:bg-transparent'

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 pt-6">
      <button type="button" disabled={page === 1} onClick={() => onPageChange(page - 1)} className={BUTTON_CLASS}>
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onPageChange(number)}
          aria-current={number === page ? 'page' : undefined}
          className={
            number === page
              ? 'px-3 py-1.5 bg-red-500 text-white rounded-md text-xs font-bold'
              : BUTTON_CLASS
          }
        >
          {number}
        </button>
      ))}
      <button type="button" disabled={page === totalPages} onClick={() => onPageChange(page + 1)} className={BUTTON_CLASS}>
        Next
      </button>
    </nav>
  )
}

export default Pagination

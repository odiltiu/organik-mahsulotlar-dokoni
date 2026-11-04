const SHARE_TARGETS = [
  { label: 'Facebook', text: 'f', url: (page) => `https://www.facebook.com/sharer/sharer.php?u=${page}` },
  { label: 'X', text: 'X', url: (page) => `https://twitter.com/intent/tweet?url=${page}` },
  { label: 'LinkedIn', text: 'in', url: (page) => `https://www.linkedin.com/sharing/share-offsite/?url=${page}` },
]

function ShareButtons() {
  const page = encodeURIComponent(window.location.href)

  return (
    <div className="flex items-center gap-3 text-xs text-gray-500">
      {SHARE_TARGETS.map((target) => (
        <a
          key={target.label}
          href={target.url(page)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${target.label}`}
          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center font-bold"
        >
          {target.text}
        </a>
      ))}
    </div>
  )
}

export default ShareButtons

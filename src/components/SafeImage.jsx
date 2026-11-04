import { useState } from 'react'

function SafeImage({ src, alt, className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null)

  if (failedSrc === src) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gray-100 text-2xl ${className}`}>
        🥗
      </div>
    )
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} className={className} />
}

export default SafeImage

import { useState } from 'react'
import SafeImage from '../SafeImage'

function ProductGallery({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="h-80 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-center">
        <SafeImage src={selectedImage} alt={title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={selectedImage === image}
            className={`w-16 h-16 rounded-xl border-2 overflow-hidden flex-shrink-0 bg-gray-50 p-1 ${
              selectedImage === image ? 'border-red-500' : 'border-gray-100'
            }`}
          >
            <SafeImage src={image} alt="" className="w-full h-full object-cover rounded-lg" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery

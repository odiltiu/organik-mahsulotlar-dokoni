import { useState } from 'react'

const TABS = ['description', 'information', 'review']

function TabContent({ tab, product }) {
  if (tab === 'information') {
    return (
      <ul className="space-y-1">
        <li>Brand: {product.brand}</li>
        <li>Net weight: {product.weight}</li>
        <li>Diet: {product.diet}</li>
        <li>Stored in a cool, dry place. Best consumed within the date printed on the pack.</li>
      </ul>
    )
  }
  if (tab === 'review') {
    return <p>No written reviews yet. The average rating is {product.rating.toFixed(1)} out of 5.</p>
  }
  return (
    <>
      <p>{product.description}</p>
      <h4 className="font-bold text-gray-800 text-xs">Packaging & Delivery</h4>
      <p>Every order is packed on the day of dispatch and delivered in sealed, recyclable packaging.</p>
    </>
  )
}

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <div className="border border-gray-100 rounded-2xl p-6 space-y-6">
      <div role="tablist" aria-label="Product details" className="flex gap-6 border-b border-gray-100 text-xs font-bold">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            id={`tab-${tab}`}
            aria-selected={activeTab === tab}
            aria-controls="product-tab-panel"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize transition-colors ${
              activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="product-tab-panel"
        aria-labelledby={`tab-${activeTab}`}
        className="text-xs text-gray-500 leading-relaxed space-y-4"
      >
        <TabContent tab={activeTab} product={product} />
      </div>
    </div>
  )
}

export default ProductTabs

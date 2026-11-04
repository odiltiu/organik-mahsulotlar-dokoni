import SafeImage from '../SafeImage'
import { formatPrice } from '../../utils/formatPrice'

function OrderSummary({ items, subtotal, deliveryRate, total }) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
      <h2 className="text-sm font-bold text-gray-900 border-b pb-3">Summary</h2>

      <dl className="space-y-2 text-xs text-gray-600">
        <div className="flex justify-between">
          <dt>Sub-Total</dt>
          <dd className="font-semibold text-gray-800">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Delivery Charges</dt>
          <dd className="font-semibold text-gray-800">{formatPrice(deliveryRate)}</dd>
        </div>
        <div className="flex justify-between pt-2 border-t text-sm font-bold text-gray-900">
          <dt>Total Amount</dt>
          <dd className="text-red-500">{formatPrice(total)}</dd>
        </div>
      </dl>

      <ul className="space-y-3 pt-3 border-t border-gray-200/60">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <SafeImage src={item.image} alt="" className="w-12 h-12 rounded-lg object-cover bg-white p-1 border" />
            <div className="min-w-0">
              <h3 className="text-xs font-bold text-gray-800 line-clamp-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {item.quantity} × <span className="font-bold text-red-500">{formatPrice(item.price)}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderSummary

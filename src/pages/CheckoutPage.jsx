import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import BillingForm from '../components/checkout/BillingForm'
import OptionsCard from '../components/checkout/OptionsCard'
import OrderSummary from '../components/checkout/OrderSummary'
import { BILLING_RULES, INITIAL_BILLING, PAYMENT_METHODS, SHIPPING_METHODS } from '../constants/checkout'
import { useCart } from '../hooks/useCart'
import { focusFirstError, useFormValues } from '../hooks/useFormValues'
import { formatPrice } from '../utils/formatPrice'
import { collectErrors } from '../utils/validation'

function Message({ children, action }) {
  return (
    <div className="text-center py-16 space-y-4 max-w-md mx-auto">
      {children}
      {action}
    </div>
  )
}

function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const billing = useFormValues(INITIAL_BILLING)
  const [shippingId, setShippingId] = useState(SHIPPING_METHODS[0].id)
  const [paymentId, setPaymentId] = useState(PAYMENT_METHODS[0].id)
  const [orderNote, setOrderNote] = useState('')
  const [placedOrder, setPlacedOrder] = useState(null)

  const deliveryRate = SHIPPING_METHODS.find((method) => method.id === shippingId).rate
  const total = subtotal + deliveryRate

  const handleOrderSubmit = (event) => {
    event.preventDefault()
    const errors = collectErrors(billing.values, BILLING_RULES)
    billing.setErrors(errors)
    if (Object.keys(errors).length > 0) {
      focusFirstError(errors)
      return
    }
    setPlacedOrder({ number: Date.now().toString(36).toUpperCase(), total, email: billing.values.email.trim() })
    clearCart()
  }

  const shopLink = (
    <Link to="/full-wide" className="inline-block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors">
      Continue Shopping
    </Link>
  )

  let content
  if (placedOrder) {
    content = (
      <Message action={shopLink}>
        <p className="text-4xl" aria-hidden="true">🎉</p>
        <h2 className="text-lg font-extrabold text-gray-900">Thank you for your order!</h2>
        <p className="text-xs text-gray-500">
          Order <strong>#{placedOrder.number}</strong> for <strong>{formatPrice(placedOrder.total)}</strong> has been placed.
          A confirmation will be sent to {placedOrder.email}.
        </p>
        <p className="text-[11px] text-gray-400">This is a demo store — no real order is created.</p>
      </Message>
    )
  } else if (items.length === 0) {
    content = (
      <Message action={shopLink}>
        <p className="text-sm text-gray-500">Your cart is empty, so there is nothing to check out.</p>
      </Message>
    )
  } else {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <OrderSummary items={items} subtotal={subtotal} deliveryRate={deliveryRate} total={total} />

          <OptionsCard
            title="Delivery Method"
            hint="Please select the preferred shipping method to use on this order."
            name="shipping"
            options={SHIPPING_METHODS}
            selectedId={shippingId}
            onSelect={setShippingId}
            showRate
          >
            <div>
              <label htmlFor="order-note" className="text-xs font-semibold text-gray-700 block mb-1">
                Add Comments About Your Order
              </label>
              <textarea
                id="order-note"
                rows="3"
                value={orderNote}
                onChange={(event) => setOrderNote(event.target.value)}
                className="w-full text-xs p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Notes..."
              />
            </div>
          </OptionsCard>

          <OptionsCard
            title="Payment Method"
            hint="Please select the preferred payment method to use on this order."
            name="payment"
            options={PAYMENT_METHODS}
            selectedId={paymentId}
            onSelect={setPaymentId}
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <p className="text-xs text-gray-500">
            Already have an account? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login</Link>
          </p>
          <BillingForm
            values={billing.values}
            errors={billing.errors}
            onChange={billing.handleChange}
            onSubmit={handleOrderSubmit}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Checkout" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">{content}</main>
    </div>
  )
}

export default CheckoutPage

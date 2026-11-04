import FormField from '../FormField'
import { CITIES, COUNTRIES } from '../../constants/checkout'

function BillingForm({ values, errors, onChange, onSubmit }) {
  const fieldProps = (name) => ({ id: name, value: values[name], error: errors[name], onChange })

  return (
    <form onSubmit={onSubmit} noValidate className="border border-gray-100 rounded-2xl p-6 space-y-6">
      <h2 className="text-sm font-bold text-gray-900 border-b pb-3">Billing Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="First Name*" placeholder="Enter your first name" autoComplete="given-name" {...fieldProps('firstName')} />
        <FormField label="Last Name*" placeholder="Enter your last name" autoComplete="family-name" {...fieldProps('lastName')} />
        <FormField label="Email*" type="email" placeholder="Enter your email" autoComplete="email" {...fieldProps('email')} />
        <FormField label="Phone*" type="tel" placeholder="+998 90 123 45 67" autoComplete="tel" {...fieldProps('phone')} />
        <FormField label="Address*" placeholder="Street, house, apartment" autoComplete="street-address" className="sm:col-span-2" {...fieldProps('address')} />

        <FormField label="City*" as="select" {...fieldProps('city')}>
          <option value="">Select city</option>
          {CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
        </FormField>
        <FormField label="Post Code" placeholder="Post Code" autoComplete="postal-code" {...fieldProps('postCode')} />
        <FormField label="Country*" as="select" {...fieldProps('country')}>
          {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
        </FormField>
      </div>

      <div className="flex justify-end pt-2">
        <button type="submit" className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-sm">
          Place Order
        </button>
      </div>
    </form>
  )
}

export default BillingForm

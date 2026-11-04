import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import PageBanner from '../components/PageBanner'
import { CITIES, COUNTRIES } from '../constants/checkout'
import { focusFirstError, useFormValues } from '../hooks/useFormValues'
import {
  collectErrors,
  validateEmail,
  validatePassword,
  validatePhone,
  validateRequired,
} from '../utils/validation'

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  address: '',
  city: '',
  country: 'Uzbekistan',
}

const REGISTER_RULES = {
  firstName: validateRequired('First name'),
  lastName: validateRequired('Last name'),
  email: validateEmail,
  phone: validatePhone,
  password: validatePassword,
  address: validateRequired('Address'),
  city: validateRequired('City'),
  country: validateRequired('Country'),
}

function RegisterPage() {
  const form = useFormValues(INITIAL_VALUES)
  const [registeredName, setRegisteredName] = useState('')

  const fieldProps = (name) => ({ id: name, value: form.values[name], error: form.errors[name], onChange: form.handleChange })

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    const errors = collectErrors(form.values, REGISTER_RULES)
    form.setErrors(errors)
    if (Object.keys(errors).length > 0) {
      focusFirstError(errors)
      return
    }
    setRegisteredName(form.values.firstName.trim())
    form.reset()
  }

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Register" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex justify-center">
        <div className="w-full max-w-xl border border-gray-100 rounded-2xl p-8 bg-white shadow-xs">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl" aria-hidden="true">🥑</span>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Foodzy</span>
          </div>

          {registeredName && (
            <p role="status" className="mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
              Thanks, {registeredName}! Your account request was received. (Demo store — nothing is stored.){' '}
              <Link to="/login" className="font-semibold underline">Go to Login</Link>
            </p>
          )}

          <form onSubmit={handleRegisterSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="First Name*" placeholder="First name" autoComplete="given-name" {...fieldProps('firstName')} />
            <FormField label="Last Name*" placeholder="Last name" autoComplete="family-name" {...fieldProps('lastName')} />
            <FormField label="Email*" type="email" placeholder="Email address" autoComplete="email" {...fieldProps('email')} />
            <FormField label="Phone*" type="tel" placeholder="+998 90 123 45 67" autoComplete="tel" {...fieldProps('phone')} />
            <FormField label="Password*" type="password" placeholder="At least 6 characters" autoComplete="new-password" className="sm:col-span-2" {...fieldProps('password')} />
            <FormField label="Address*" placeholder="Street, house, apartment" autoComplete="street-address" className="sm:col-span-2" {...fieldProps('address')} />
            <FormField label="City*" as="select" {...fieldProps('city')}>
              <option value="">Select city</option>
              {CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
            </FormField>
            <FormField label="Country*" as="select" {...fieldProps('country')}>
              {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
            </FormField>

            <div className="sm:col-span-2 flex items-center justify-between pt-2">
              <button type="submit" className="px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors">
                Register
              </button>
              <Link to="/login" className="text-xs font-medium text-gray-500 hover:text-red-500 transition-colors">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage

import {
  validateEmail,
  validatePhone,
  validateRequired,
} from '../utils/validation'

export const SHIPPING_METHODS = [
  { id: 'free', label: 'Free Shipping', rate: 0 },
  { id: 'flat', label: 'Flat Rate', rate: 5 },
]

export const PAYMENT_METHODS = [
  { id: 'cash', label: 'Cash On Delivery' },
  { id: 'upi', label: 'UPI' },
  { id: 'bank', label: 'Bank Transfer' },
]

export const CITIES = ['Tashkent', 'Samarkand', 'Bukhara', 'Namangan', 'Andijan', 'Fergana']

export const COUNTRIES = ['Uzbekistan']

export const INITIAL_BILLING = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postCode: '',
  country: 'Uzbekistan',
}

export const BILLING_RULES = {
  firstName: validateRequired('First name'),
  lastName: validateRequired('Last name'),
  email: validateEmail,
  phone: validatePhone,
  address: validateRequired('Address'),
  city: validateRequired('City'),
  country: validateRequired('Country'),
}

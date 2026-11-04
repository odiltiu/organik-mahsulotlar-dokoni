const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?[0-9\s()-]{7,20}$/
export const MIN_PASSWORD_LENGTH = 6

export function validateEmail(value) {
  if (!value.trim()) return 'Email is required'
  return EMAIL_PATTERN.test(value.trim()) ? '' : 'Enter a valid email address'
}

export function validatePhone(value) {
  if (!value.trim()) return 'Phone number is required'
  return PHONE_PATTERN.test(value.trim()) ? '' : 'Enter a valid phone number'
}

export function validatePassword(value) {
  if (!value) return 'Password is required'
  return value.length >= MIN_PASSWORD_LENGTH ? '' : `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
}

export function validateRequired(label) {
  return (value) => (value.trim() ? '' : `${label} is required`)
}

export function collectErrors(values, rules) {
  const errors = {}
  Object.entries(rules).forEach(([field, rule]) => {
    const message = rule(values[field] ?? '')
    if (message) errors[field] = message
  })
  return errors
}

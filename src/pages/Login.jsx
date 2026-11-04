import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import PageBanner from '../components/PageBanner'
import { focusFirstError, useFormValues } from '../hooks/useFormValues'
import { collectErrors, validateEmail, validatePassword } from '../utils/validation'

const LOGIN_RULES = { email: validateEmail, password: validatePassword }

function Login() {
  const form = useFormValues({ email: '', password: '' })
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const errors = collectErrors(form.values, LOGIN_RULES)
    form.setErrors(errors)
    if (Object.keys(errors).length > 0) {
      focusFirstError(errors)
      return
    }
    setIsSignedIn(true)
  }

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      <PageBanner title="Login" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex items-center justify-center">
        <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl p-8 shadow-xs">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl" aria-hidden="true">🥭</span>
            <span className="text-xl font-bold tracking-tight text-gray-900">Foodzy</span>
          </div>

          {isSignedIn && (
            <p role="status" className="mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
              Welcome back, {form.values.email.trim()}! (Demo store — no real sign-in happens.)
            </p>
          )}

          <form onSubmit={handleLoginSubmit} noValidate className="space-y-4">
            <FormField
              id="email"
              label="Email Address*"
              type="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              value={form.values.email}
              error={form.errors.email}
              onChange={form.handleChange}
            />
            <FormField
              id="password"
              label="Password*"
              type="password"
              placeholder="Enter Your password"
              autoComplete="current-password"
              value={form.values.password}
              error={form.errors.password}
              onChange={form.handleChange}
            />

            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-500">
              <input type="checkbox" className="rounded border-gray-300 accent-red-500" />
              <span>Remember Me</span>
            </label>

            <div className="flex items-center justify-between pt-2">
              <button type="submit" className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs">
                Login
              </button>
              <Link to="/register" className="text-xs font-medium text-gray-500 hover:text-red-500 transition-colors">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login

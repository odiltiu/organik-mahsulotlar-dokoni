import { useState } from 'react'
import { validateEmail } from '../utils/validation'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    const message = validateEmail(email)
    setError(message)
    setIsSubscribed(!message)
    if (!message) setEmail('')
  }

  return (
    <form onSubmit={handleSubscribe} noValidate>
      <div className={`flex items-center border rounded overflow-hidden mb-2 ${error ? 'border-red-400' : 'border-gray-200'}`}>
        <label htmlFor="newsletter-email" className="sr-only">Your email</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby="newsletter-message"
          placeholder="Your email..."
          className="w-full px-2 py-1.5 text-xs focus:outline-none"
        />
        <button type="submit" aria-label="Subscribe" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs">➔</button>
      </div>
      <p id="newsletter-message" role="status" className={`text-[11px] ${error ? 'text-red-500' : 'text-emerald-600'}`}>
        {error || (isSubscribed ? 'Thanks for subscribing!' : '')}
      </p>
    </form>
  )
}

export default NewsletterForm

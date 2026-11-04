import { useId, useState } from 'react'
import { validateEmail } from '../utils/validation'

function SubscribeBar({ wrapperClass, inputClass, buttonClass }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState({ text: '', isError: false })
  const messageId = useId()

  const handleSubscribe = (event) => {
    event.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setMessage({ text: error, isError: true })
      return
    }
    setMessage({ text: 'Thanks for subscribing!', isError: false })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubscribe} noValidate>
      <div className={wrapperClass}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Your email address"
          aria-describedby={messageId}
          placeholder="Your email address"
          className={inputClass}
        />
        <button type="submit" className={buttonClass}>Subscribe</button>
      </div>
      <p id={messageId} role="status" className={`mt-1.5 pl-2 text-[11px] ${message.isError ? 'text-red-400' : 'text-emerald-500'}`}>
        {message.text}
      </p>
    </form>
  )
}

export default SubscribeBar

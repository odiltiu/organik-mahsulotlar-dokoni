import { useState } from 'react'

export function useFormValues(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => (current[name] ? { ...current, [name]: '' } : current))
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
  }

  return { values, errors, setErrors, handleChange, reset }
}

export function focusFirstError(errors) {
  const [firstField] = Object.keys(errors)
  if (firstField) document.getElementById(firstField)?.focus()
}

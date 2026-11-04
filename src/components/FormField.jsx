const INPUT_CLASS = 'w-full text-xs p-2.5 border rounded-lg focus:outline-none focus:border-red-500 transition-colors bg-white'

function FormField({ id, label, error, as = 'input', children, className = '', ...inputProps }) {
  const Control = as
  const errorId = `${id}-error`

  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-semibold text-gray-700 block mb-1">{label}</label>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${INPUT_CLASS} ${error ? 'border-red-400' : 'border-gray-200'}`}
        {...inputProps}
      >
        {children}
      </Control>
      {error && <p id={errorId} className="mt-1 text-[11px] text-red-500">{error}</p>}
    </div>
  )
}

export default FormField

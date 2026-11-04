import { formatPrice } from '../../utils/formatPrice'

function OptionsCard({ title, hint, name, options, selectedId, onSelect, showRate = false, children }) {
  return (
    <fieldset className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
      <legend className="sr-only">{title}</legend>
      <h2 className="text-sm font-bold text-gray-900 border-b pb-3" aria-hidden="true">{title}</h2>
      <p className="text-[11px] text-gray-400">{hint}</p>

      <div className="space-y-2 text-xs">
        {options.map((option) => (
          <label key={option.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={selectedId === option.id}
              onChange={() => onSelect(option.id)}
              className="accent-red-500"
            />
            <span className="font-semibold text-gray-700">{option.label}</span>
            {showRate && <span className="text-gray-400 text-[11px]">(Rate: {formatPrice(option.rate)})</span>}
          </label>
        ))}
      </div>

      {children}
    </fieldset>
  )
}

export default OptionsCard

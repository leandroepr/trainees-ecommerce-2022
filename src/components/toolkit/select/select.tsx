type Value = string | number
// type props made based in:
// https://stackoverflow.com/questions/66738941/how-to-type-a-custom-react-select-component-using-typescript
interface SelectProps {
  id: string
  label?: string
  value: Value
  onChange: (event: string) => void
  options: readonly Value[]
  optionsClassName?: string
  labelClassName?: string
  selectClassName?: string
}
const Select = ({
  id,
  label,
  value,
  onChange,
  options,
  labelClassName,
  optionsClassName,
  selectClassName,
}: SelectProps) => {
  return (
    <label htmlFor={id} className={labelClassName}>
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={selectClassName}
      >
        {options.map((option) => (
          <option
            value={option}
            key={`option-${options.indexOf(option)}`}
            className={optionsClassName}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select

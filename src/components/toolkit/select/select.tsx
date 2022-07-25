type Value = string | number
// type props made based in:
// https://stackoverflow.com/questions/66738941/how-to-type-a-custom-react-select-component-using-typescript
interface SelectProps {
  label: string
  value: Value
  onChange: (newValue: Value) => void
  options: readonly Value[]
}
const Select = ({ label, value, onChange, options }: SelectProps) => {
  return (
    <label htmlFor={label}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option value={option} key={options.indexOf(option)}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select

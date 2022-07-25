type Value = string | number
// type props made based in:
// https://stackoverflow.com/questions/66738941/how-to-type-a-custom-react-select-component-using-typescript
interface SelectProps {
  id: string
  value: Value
  onChange: (event: string) => void
  options: readonly Value[]
}
const Select = ({ id, value, onChange, options }: SelectProps) => {
  return (
    <label htmlFor={id}>
      <select value={value} onChange={(e) => onChange(e.target.value)} id={id}>
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

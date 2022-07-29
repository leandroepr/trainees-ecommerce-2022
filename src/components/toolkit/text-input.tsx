import { classNames } from 'core/helpers/class-names'
import React from 'react'
import Row from './row'

export interface TextInputProps {
  name: string
  id?: string
  value?: string
  label?: string
  placeholder?: string
  shape?: 'rounded' | 'square'
  disabled?: boolean
  required?: boolean
  className?: string
  onChange: (value: string, name: string) => void
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  id,
  value = '',
  label,
  placeholder,
  shape = 'rounded',
  disabled,
  required,
  className,
  onChange,
}) => {
  const [typedValue, setTypedValue] = React.useState(value)

  const handleOnChange = (value: any) => {
    setTypedValue(value)
    onChange(value, name)
  }

  // React.useEffect(() => {
  //   onChange?.(typedValue)
  // }, [typedValue, onChange])

  return (
    <Row className="relative">
      <label
        htmlFor={id}
        className={classNames(
          'w-full group',
          disabled ? 'text-dark/30' : 'block focus-within:text-info'
        )}
      >
        <div className="bg-light absolute mt-[-10px] ml-3 text-dark/50 font-light text-sm group-focus-within:text-info">
          {required ? `${label}*` : label}
        </div>
        <input
          className={classNames(
            'py-5 block h-8 w-full placeholder:text-dark/20',
            disabled
              ? 'border border-dark/10 text-dark/10 cursor-not-allowed focus:border-dark/30 focus:ring-0'
              : 'border border-dark/20 focus:text-info focus:border-info',
            inputShapeMap[shape],
            className
          )}
          type="text"
          name={name}
          id={id}
          value={typedValue}
          placeholder={placeholder}
          onChange={(e) => handleOnChange(e.target.value)}
        ></input>
      </label>
    </Row>
  )
}

export default TextInput

const inputShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

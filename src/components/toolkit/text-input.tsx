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
    <Row>
      <label
        htmlFor={id}
        className={classNames(
          'w-full  shadow',
          disabled ? 'text-dark/30' : 'block focus-within:text-info'
        )}
      >
        {label}
        <input
          className={classNames(
            'py-5 block h-8 w-full placeholder:text-dark/30',
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

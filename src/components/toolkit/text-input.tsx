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
  required,
  className,
  onChange,
}) => {

  const [typedValue, setTypedValue] = React.useState(value)
  const [emptyRequired, setEmptyRequired] = React.useState('')

  const handleOnChange = (value: any) => {
    setTypedValue(value)
    onChange(value, name)
  }

  const inputValidation = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!e.currentTarget.value) {
      setEmptyRequired('border-danger ring-1 ring-danger')
    } else {
      setEmptyRequired('focus-within:text-info')
    }
  }

  return (
    <Row className="relative">
      <label
        htmlFor={id}
        className='w-full group'
      >
        <div className="bg-light absolute mt-[-13px] ml-3 text-dark/30 group-focus-within:text-info">{required ? `${label}*` : label}</div>
        <input
          className={classNames(
            `py-5 block h-8 w-full border border-dark/20 focus:text-info ${emptyRequired}`,
            inputShapeMap[shape],
            className
          )}
          type="text"
          name={name}
          id={id}
          value={typedValue}
          placeholder={placeholder}
          onChange={(e) => handleOnChange(e.target.value)}
          onBlur={(e) => required ? inputValidation(e) : undefined}
        ></input>
      </label>
    </Row >

  )
}

export default TextInput

const inputShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

import { classNames } from 'core/helpers/class-names'
import React from 'react'
import Row from './row'

export interface InputProps {
  name: string
  id?: string
  type?: string
  value?: string | number
  label?: string
  placeholder?: string
  shape?: 'rounded' | 'square'
  disabled?: boolean
  required?: boolean
  className?: string
  onChange: (value: string, name: string) => void
}

const Input: React.FC<InputProps> = ({
  name,
  id,
  type = 'text',
  value = '',
  label,
  placeholder,
  shape = 'rounded',
  required,
  disabled,
  className,
  onChange,
}) => {
  const [typedValue, setTypedValue] = React.useState(value)
  const [emptyRequired, setEmptyRequired] = React.useState('')
  const [emptyLabelRequired, setEmptyLabelRequired] = React.useState('')

  const handleOnChange = (value: any) => {
    setTypedValue(value)
    onChange(value, name)
  }

  const inputValidation = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!e.currentTarget.value) {
      setEmptyRequired('border-danger ring-1 ring-danger')
      setEmptyLabelRequired('text-danger')
    } else {
      setEmptyRequired('focus-within:text-info')
      setEmptyLabelRequired('text-info')

    }
  }

  return (
    <Row className="relative">
      <label htmlFor={id} className="w-full group">
        <div className={`bg-light absolute mt-[-10px] ml-3 text-dark/50 font-light text-sm group-focus-within:text-info ${emptyLabelRequired}`}>
          {required ? `${label}*` : label}
        </div>
        <input
          className={classNames(
            `py-5 block h-8 w-full border border-dark/20 focus:text-info placeholder:text-dark/40 ${emptyRequired}`,
            disabled
              ? 'border border-dark/10 text-dark/10 cursor-not-allowed focus:border-dark/30 focus:ring-0'
              : 'border border-dark/20 focus:text-info focus:border-info',
            inputShapeMap[shape],
            className
          )}
          type={type}
          name={name}
          id={id}
          value={typedValue}
          placeholder={placeholder}
          onChange={(e) => handleOnChange(e.target.value)}
          onBlur={(e) => (required ? inputValidation(e) : undefined)}
        ></input>
      </label>
    </Row>
  )
}

export default Input

const inputShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

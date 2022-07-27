import { classNames } from 'core/helpers/class-names'
import React from 'react'
import Row from './row'

export interface NumberInputProps {
  name?: string
  id?: string
  value?: number | undefined
  label?: string
  placeholder?: string
  shape?: 'rounded' | 'square'
  disabled?: boolean
  className?: string
  onChange?: (value: number | undefined) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  id,
  value,
  label,
  placeholder,
  shape = 'rounded',
  disabled,
  className,
  onChange,
}) => {
  const [typedValue, setTypedValue] = React.useState(value)

  React.useEffect(() => {
    onChange?.(typedValue)
  }, [typedValue, onChange])

  return (
    <Row>
      <label
        htmlFor={id}
        className={classNames(
          'w-full',
          disabled ? 'text-dark/30' : 'block focus-within:text-info'
        )}
      >
        {label}
        <input
          type="number"
          className={classNames(
            'block h-8 w-full',
            disabled
              ? 'border border-dark/30 text-dark/30 cursor-not-allowed focus:border-dark/30 focus:ring-0'
              : 'border border-dark/50 focus:text-info focus:border-info',
            inputShapeMap[shape],
            className
          )}
          name={name}
          id={id}
          value={typedValue}
          placeholder={placeholder}
          onChange={(event) => setTypedValue(Number(event.target.value))}
        ></input>
      </label>
    </Row>
  )
}

export default NumberInput

const inputShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

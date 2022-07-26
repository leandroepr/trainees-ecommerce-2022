import { classNames } from 'core/helpers/class-names';
import React from 'react';
import Row from './row';

export interface TextInputProps {
  name?: string
  id?: string
  value?: string
  label?: string
  placeholder?: string
  shape: 'rounded' | 'square'
  disabled?: boolean
  className?: string
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  id,
  value = '',
  label,
  placeholder,
  shape,
  disabled,
  className,
  onChange
}) => {

  return (
    <Row>
      <label className={classNames('w-full', disabled ? 'text-dark/30' : 'block focus-within:text-info')}>{label}
        <input className={classNames('block h-8 w-full', disabled ? 'border border-dark/30 text-dark/30 cursor-not-allowed focus:border-dark/30 focus:ring-0' : 'border border-dark/50 focus:text-info focus:border-info', inputShapeMap[shape], className)} type='text' name={name} id={id} value={value} placeholder={placeholder} onChange={onChange}>
        </input>
      </label>
    </Row>
  )
}

export default TextInput

const inputShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

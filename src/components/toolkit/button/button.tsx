import { classNames } from 'core/helpers/class-names'
import React from 'react'

/**
 * @contentButton text/icon
 * @className styles
 * @type button type
 * @onClick function onClick
 //  */

export interface ButtonProps {
  children: React.ReactNode
  className: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <button className={classNames('', className)} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

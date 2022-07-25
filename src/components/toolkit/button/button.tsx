import { classNames } from 'core/helpers/class-names'
import React from 'react'

/**
 * @contentButton text/icon
 * @type button type
 * @variant button color
 * @size button size
 * @className other styles
 * @onClick function onClick
 //  */

export interface ButtonProps {
  contentButton: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant: 'info' | 'light' | 'disabled'
  size: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  contentButton,
  type,
  variant,
  size,
  className,
  onClick,
}) => {
  return (
    <button className={classNames('cursor-pointer py-1 px-4 rounded', buttonColorMap[variant], buttonSizeMap[size], className)} type={type} onClick={onClick}>
      {contentButton}
    </button>
  )
}

export default Button

const buttonColorMap = {
  info: 'bg-info text-light',
  light: 'bg-light text-info border border-info',
  disabled: 'bg-light text-dark/30 border border-dark/30 cursor-not-allowed'
}

const buttonSizeMap = {
  sm: 'w-32 h-10',
  md: 'w-50 h-10',
  lg: 'w-80 h-10'
}

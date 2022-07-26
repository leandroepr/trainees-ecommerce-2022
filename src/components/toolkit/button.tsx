import { classNames } from 'core/helpers/class-names'
import React from 'react'

/**
 * @contentButton text/icon
 * @type button type
 * @variant button color
 * @size button size
 * @shape button shape
 * @className other styles
 * @onClick function onClick
 //  */

export interface ButtonProps {
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'info' | 'light'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'square'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant = 'info',
  size = 'md',
  shape = 'rounded',
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'py-1 px-4 rounded',
        disabled
          ? 'bg-light text-dark/30 border border-dark/30 cursor-not-allowed'
          : buttonColorMap[variant],
        buttonSizeMap[size],
        buttonShapeMap[shape],
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

const buttonColorMap = {
  info: 'bg-info text-light',
  light: 'bg-light text-info border border-info',
}

const buttonSizeMap = {
  xs: 'w-10 h-10',
  sm: 'w-32 h-10',
  md: 'w-50 h-10',
  lg: 'w-80 h-10',
}

const buttonShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}
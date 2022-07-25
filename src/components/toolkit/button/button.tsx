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
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant: 'info' | 'light' | 'disabled'
  size: 'sm' | 'md' | 'lg'
  shape: 'rounded' | 'square'
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant,
  size,
  shape,
  className,
  onClick,
}) => {
  return (
    <button className={classNames('cursor-pointer py-1 px-4 rounded', buttonColorMap[variant], buttonSizeMap[size], buttonShapeMap[shape], className)} type={type} onClick={onClick}>
      {children}
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

const buttonShapeMap = {
  rounded: 'rounded',
  square: 'rounded-none',
}

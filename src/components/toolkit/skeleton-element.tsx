import { classNames } from 'core/helpers/class-names'
import React, { ReactNode } from 'react'

export type SkeletonElementTheme = 'light' | 'dark'
export type SkeletonElementOrder = 'primary' | 'secondary'
export interface SkeletonElementProps {
  children?: ReactNode
  className?: string
  as?: 'div' | 'span'
  theme?: SkeletonElementTheme
  order?: SkeletonElementOrder
}

const SkeletonElement: React.FC<SkeletonElementProps> = ({
  children,
  className,
  as = 'div',
  theme = 'light',
  order = 'primary',
}) => {
  return React.createElement(
    as,
    { className: classNames(themeMap[theme](order), className) },
    children
  )
}

export default SkeletonElement

const themeMap: Record<
  SkeletonElementTheme,
  (order: SkeletonElementOrder) => string
> = {
  light: (order) => {
    switch (order) {
      case 'primary':
        return 'bg-light'
      case 'secondary':
        return 'bg-gray-200'
      default:
        return ''
    }
  },
  dark: (order) => {
    switch (order) {
      case 'primary':
        return 'bg-dark'
      case 'secondary':
        return 'bg-gray-800'
      default:
        return ''
    }
  },
}

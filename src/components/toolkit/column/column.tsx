import { classNames } from 'core/helpers/class-names'
import React from 'react'

export type ColumnElementType = 'div' | 'section'
export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ColumnElementType
}

const Column: React.FC<ColumnProps> = ({
  className,
  as = 'div',
  children,
  ...props
}) => {
  return React.createElement(
    as,
    { ...props, className: classNames('flex flex-col', className) },
    children
  )
}

export default Column

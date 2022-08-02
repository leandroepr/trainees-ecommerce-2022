import { Column, ColumnProps } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export type CardProps = ColumnProps
const Card: React.FC<CardProps> = ({ className, ...divProps }) => {
  return (
    <Column
      className={classNames(
        'flex flex-col bg-white shadow border rounded-md overflow-hidden cursor-pointer hover:shadow-md h-full',
        className
      )}
      {...divProps}
    />
  )
}

export default Card

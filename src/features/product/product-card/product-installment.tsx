import { Text } from 'components/toolkit'
import { classNames } from 'helpers/class-names'
import React from 'react'

type sizeMapType = 'small' | 'medium'
type colorMapType = 'dark' | 'gray'
export interface ProductInstallmentProps {
  className?: string
  installmentsInfo?: string
  size?: sizeMapType
  color?: colorMapType
}

const ProductInstallment: React.FC<ProductInstallmentProps> = ({
  className,
  installmentsInfo,
  size = 'small',
  color = 'dark',
}) => {
  if (!installmentsInfo) return null

  return (
    <Text className={classNames(colorMap[color], sizeMap[size], className)}>
      {installmentsInfo}
    </Text>
  )
}

export default ProductInstallment

const colorMap: Record<colorMapType, string> = {
  dark: 'text-slate-800',
  gray: 'text-slate-500',
}

const sizeMap: Record<sizeMapType, string> = {
  small: 'text-sm',
  medium: 'text-base',
}

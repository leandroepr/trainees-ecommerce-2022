import { Row } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export type ProductPriceSize = 'small' | 'medium' | 'large'
export interface ProductPriceProps {
  price?: number
  size?: ProductPriceSize
  className?: string
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  className,
  size = 'medium',
}) => {
  if (!price) return null

  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString()
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2)
    return { currency, cents }
  }
  const { currency, cents } = splitProductPrice(price)

  return (
    <Row className={classNames('text-slate-800', className)}>
      <span className={currencySizeMap[size]}>R$ {currency}</span>
      <span className={centsSizeMap[size]}>{cents}</span>
    </Row>
  )
}

export default ProductPrice

const currencySizeMap: Record<ProductPriceSize, string> = {
  large: '',
  medium: 'text-2xl',
  small: 'font-light text-2xl',
}

const centsSizeMap: Record<ProductPriceSize, string> = {
  large: '',
  medium: 'leading-7 text-base',
  small: 'font-light leading-7 text-base',
}
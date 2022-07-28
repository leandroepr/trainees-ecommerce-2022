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
  price = 0,
  className,
  size = 'medium',
}) => {
  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString()
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2)
    return { currency, cents }
  }
  const { currency, cents } = splitProductPrice(price)

  return (
    <Row className={classNames('text-dark', className)}>
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
  medium: 'text-base',
  small: 'font-light text-base',
}

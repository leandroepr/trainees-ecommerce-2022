import { Row } from 'components/toolkit'
import { classNames } from 'helpers/class-names'
import React from 'react'

export interface ProductPriceProps {
  price?: number
  size?: 'small' | 'medium' | 'large'
  className?: string
}
const ProductPrice: React.FC<ProductPriceProps> = ({ price, className }) => {
  if (!price) return null

  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString()
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2)
    return { currency, cents }
  }
  const { currency, cents } = splitProductPrice(price)

  return (
    <Row className={classNames('text-slate-800 font-light', className)}>
      <span className="text-2xl">R$ {currency}</span>
      <span className="leading-7">{cents}</span>
    </Row>
  )
}

export default ProductPrice

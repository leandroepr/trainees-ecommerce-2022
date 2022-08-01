import { Button, Column, Row } from 'components/toolkit'
import useCartContext from 'features/cart/hooks/use-cart-context'
import { CartItemType } from 'features/cart/types/cart-item-type'
import React from 'react'
import CartItem from '../cart-item/cart-item'
import ProductsTotalPrice from '../total-price/products-total-price'

const CartBoxFirstTab: React.FC = () => {
  const { items, dispatch } = useCartContext()

  const manageItem = (type: string, item: CartItemType) => {
    switch (type) {
      case 'increase':
        return dispatch({
          type: 'update',
          data: { ...item, amount: (item.amount += 1) },
        })
      case 'decrease':
        if (item.amount >= 1) {
          return dispatch({
            type: 'update',
            data: { ...item, amount: (item.amount -= 1) },
          })
        } else {
          return dispatch({
            type: 'remove',
            data: { ...item },
          })
        }
      case 'delete':
        return dispatch({
          type: 'remove',
          data: { ...item },
        })
      case 'save':
        console.log('Produto salvo:', item)
        return dispatch({
          type: 'remove',
          data: { ...item },
        })
      default:
        console.error('Undefined action')
    }
  }
  return (
    <Column className="w-full">
      <Column className="flex flex-col">
        <Column>
          {items.map((item) => (
            <CartItem
              handleItem={(type) => manageItem(type, item)}
              key={item.product.slug}
              item={item}
            />
          ))}
        </Column>
        <Row className="pt-16 justify-end border-b pb-10">
          <ProductsTotalPrice />
        </Row>
      </Column>
      <Row className="pt-16 justify-end">
        <Button shape="rounded" variant="light" size="md" className="mr-2">
          Cancelar a compra
        </Button>
        <Button shape="rounded" variant="info" size="md">
          Continuar a compra
        </Button>
      </Row>
    </Column>
  )
}
export default CartBoxFirstTab

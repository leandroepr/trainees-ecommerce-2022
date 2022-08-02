import { Button, Column, Row } from 'components/toolkit'
import useCartContext from 'features/cart/hooks/use-cart-context'
import { CartItemType } from 'features/cart/types/cart-item-type'
import { useRouter } from 'next/router'
import React from 'react'
import CartItem from '../cart-item/cart-item'
import ProductsTotalPrice from '../total-price/products-total-price'

const CartBoxFirstTab: React.FC = () => {
  const { items, dispatch } = useCartContext()
  const router = useRouter()

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

  const finishSale = () => {
    router.push('/sucesso')
    dispatch({
      type: 'clear',
    })
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
        <Button
          shape="rounded"
          variant="light"
          size="md"
          className="mr-2"
          onClick={() => router.push('/')}
        >
          Cancelar a compra
        </Button>
        <Button
          disabled={items.length <= 0}
          shape="rounded"
          variant="info"
          size="md"
          onClick={() => finishSale()}
        >
          Continuar a compra
        </Button>
      </Row>
    </Column>
  )
}
export default CartBoxFirstTab

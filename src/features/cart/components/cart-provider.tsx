import React from 'react'
import { CartContext } from '../contexts/cart-context'
import { CartContextType } from '../types/cart-context-type'
import { CartItemType } from '../types/cart-item-type'

interface CartContextProviderProps {
  children?: React.ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = React.useState<CartItemType[]>([])
  const add = (item: CartItemType) => setProducts((p) => [...p, item])
  const remove = (item: CartItemType) =>
    setProducts((p) => p.filter((i) => i.product.slug !== item.product.slug))
  const update = (item: CartItemType) =>
    setProducts((p) => [
      ...p.filter((i) => i.product.slug !== item.product.slug),
      item,
    ])
  const clear = () => setProducts([])
  const cartContext: CartContextType = {
    products,
    add,
    remove,
    update,
    clear,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider

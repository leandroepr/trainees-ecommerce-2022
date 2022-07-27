import React from 'react'
import { CartContextType } from '../types/cart-context-type'

const defaultCartContextValue: CartContextType = {
  products: [],
  add: () => console.error('add is not implemented'),
  remove: () => console.error('remove is not implemented'),
  update: () => console.error('update is not implemented'),
  clear: () => console.error('clear is not implemented'),
}

export const CartContext = React.createContext(defaultCartContextValue)

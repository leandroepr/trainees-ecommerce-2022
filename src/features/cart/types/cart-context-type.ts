import { Dispatch } from 'react'
import { CartItemType } from './cart-item-type'
import { Action } from './cart-reducer-type'

export type CartContextType = {
  items: CartItemType[]
  dispatch: Dispatch<Action>
}

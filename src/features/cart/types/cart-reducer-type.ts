import { CartItemType } from './cart-item-type'

export type State = CartItemType[]
export type Action =
  | { type: 'add'; data: CartItemType }
  | { type: 'remove'; data: CartItemType }
  | { type: 'update'; data: CartItemType }
  | { type: 'clear' }

import { CartItemType } from './cart-item-type'

export type CartContextType = {
  products: CartItemType[]
  add: (item: CartItemType) => void
  remove: (item: CartItemType) => void
  update: (item: CartItemType) => void
  clear: () => void
}

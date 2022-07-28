import { CartItemType } from '../types/cart-item-type'
import { Action, State } from '../types/cart-reducer-type'

export const defaultCartReducerValue: CartItemType[] = []

const CartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.data]
    case 'update':
      return state.map((item) => {
        if (item.product.slug === action.data.product.slug) return action.data
        return item
      })
    case 'remove':
      return state.filter(
        (order) => order.product.slug !== action.data.product.slug
      )
    case 'clear':
      return defaultCartReducerValue
    default:
      return state
  }
}

export default CartReducer

import { defaultCartContextValue } from '../contexts/cart-context'
import { Action, State } from '../types/cart-reducer-type'

const CartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.data]
    case 'update':
      return [
        ...state.filter(
          (order) => order.product.slug !== action.data.product.slug
        ),
        action.data,
      ]
    case 'remove':
      return [
        ...state.filter(
          (order) => order.product.slug !== action.data.product.slug
        ),
      ]
    case 'clear':
      return defaultCartContextValue
    default:
      return state
  }
}

export default CartReducer

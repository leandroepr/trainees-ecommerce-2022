import React from 'react'
import { CartContext, defaultCartContextValue } from '../contexts/cart-context'
import { DispatchContext } from '../contexts/dispatch-context'
import CartReducer from '../reducers/cart-reducer'

interface CartContextProviderProps {
  children?: React.ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartContext, dispatch] = React.useReducer(
    CartReducer,
    defaultCartContextValue
  )

  return (
    <CartContext.Provider value={cartContext}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  )
}

export default CartContextProvider

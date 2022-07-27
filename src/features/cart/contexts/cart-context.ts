import React from 'react'
import { CartContextType } from '../types/cart-context-type'

export const defaultCartContextValue: CartContextType = []

export const CartContext = React.createContext(defaultCartContextValue)

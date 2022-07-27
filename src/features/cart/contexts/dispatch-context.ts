import React from 'react'
import { DispatchContextType } from '../types/dispatch-context-type'

export const defaultDispatchContextValue: DispatchContextType = () => null

export const DispatchContext = React.createContext(defaultDispatchContextValue)

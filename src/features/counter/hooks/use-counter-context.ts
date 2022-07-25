import React from 'react'
import { CounterContext } from '../contexts/counter-context'

export const useCounterContext = () => {
  const context = React.useContext(CounterContext)
  if (context === undefined) {
    throw new Error('useCounterContext was used outside of its Provider')
  }
  return context
}

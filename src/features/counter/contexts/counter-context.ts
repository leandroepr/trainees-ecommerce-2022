import React from 'react'
import { CounterContextType } from '../types/counter-context-type'

const defaultContextValue: CounterContextType = {
  count: 0,
  increase: () => console.error('increase is not implemented'),
  decrease: () => console.error('decrease is not implemented'),
}
export const CounterContext = React.createContext(defaultContextValue)

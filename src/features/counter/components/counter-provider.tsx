import React from 'react'
import { CounterContext } from '../contexts/counter-context'
import { CounterContextType } from '../types/counter-context-type'

export interface CounterContextProviderProps {
  children?: React.ReactNode
}
const CounterContextProvider: React.FC<CounterContextProviderProps> = ({
  children,
}) => {
  const [count, setCount] = React.useState(0)
  const increase = () => setCount((count) => count + 1)
  const decrease = () => setCount((count) => (count > 1 ? count - 1 : 0))
  const context: CounterContextType = {
    count,
    increase,
    decrease,
  }
  return (
    <CounterContext.Provider value={context}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider

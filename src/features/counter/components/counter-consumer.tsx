import React from 'react'
import { CounterContext } from '../contexts/counter-context'
import { CounterContextType } from '../types/counter-context-type'

export interface CounterContextConsumerProps {
  children: (context: CounterContextType) => React.ReactNode
}
const CounterContextConsumer: React.FC<CounterContextConsumerProps> = ({
  children,
}) => {
  return <CounterContext.Consumer>{children}</CounterContext.Consumer>
}

export default CounterContextConsumer

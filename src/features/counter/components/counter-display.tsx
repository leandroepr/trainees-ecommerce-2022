import { Text } from 'components/toolkit'
import React from 'react'
import { useCounterContext } from '../hooks/use-counter-context'

const CounterDisplay: React.FC = () => {
  const { count } = useCounterContext()
  return <Text className="text-dark">{count}</Text>
}
export default CounterDisplay

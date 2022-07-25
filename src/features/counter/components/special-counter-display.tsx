import { Text } from 'components/toolkit'
import React from 'react'
import { useCounterContext } from '../hooks/use-counter-context'

const SpecialCounterDisplay: React.FC = () => {
  const { count } = useCounterContext()
  return <Text className="text-success text-lg font-bold">{count}</Text>
}

export default SpecialCounterDisplay

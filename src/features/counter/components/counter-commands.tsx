import { Row } from 'components/toolkit'
import React from 'react'
import { useCounterContext } from '../hooks/use-counter-context'
import CustomButton from './custom-button'

const CounterCommands: React.FC = () => {
  const { increase, decrease } = useCounterContext()
  return (
    <Row className="space-x-4">
      <CustomButton onClick={increase}>Increase</CustomButton>
      <CustomButton onClick={decrease}>Decrease</CustomButton>
    </Row>
  )
}
export default CounterCommands

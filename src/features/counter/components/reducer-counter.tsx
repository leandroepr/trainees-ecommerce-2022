import { Column, Row, Text } from 'components/toolkit'
import React from 'react'
import CustomButton from './custom-button'

const initialState = { count: 0, step: 1 }
type State = typeof initialState
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'clear' }
  | { type: 'set-step'; payload: number }
  | { type: 'add'; payload: number }

const CounterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return state.count - state.step < 0
        ? { ...state, count: 0 }
        : { ...state, count: state.count - state.step }
    case 'add':
      return { ...state, count: state.count + action.payload }
    case 'set-step':
      return { ...state, step: action.payload }
    case 'clear':
      return initialState
    default:
      return state
  }
}

const ReducerCounter: React.FC = () => {
  const [{ count, step }, dispatch] = React.useReducer(
    CounterReducer,
    initialState
  )

  const increase = () => dispatch({ type: 'increment' })
  const decrease = () => dispatch({ type: 'decrement' })
  const addFive = () => dispatch({ type: 'add', payload: 5 })
  const increaseStep = () => dispatch({ type: 'set-step', payload: step + 1 })

  return (
    <Column className="space-y-2">
      <Text className="text-dark">{count}</Text>
      <Row className="space-x-2">
        <CustomButton onClick={increase}>+ {step}</CustomButton>
        <CustomButton onClick={decrease}>- {step}</CustomButton>
        <CustomButton onClick={addFive}>+ 5</CustomButton>
        <CustomButton onClick={increaseStep}>change step</CustomButton>
        <CustomButton onClick={() => dispatch({ type: 'clear' })}>
          Clear
        </CustomButton>
      </Row>
    </Column>
  )
}

export default ReducerCounter

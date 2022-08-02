import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { Row } from 'components/toolkit'
import React from 'react'

export interface CountButtonProps {
  children?: React.ReactNode
  handleAmount: (type: string) => void
}

const CountButton: React.FC<CountButtonProps> = (props) => {
  return (
    <Row className="border border-gray-400 rounded-md w-24 h-7 overflow-hidden">
      <button
        onClick={() => props.handleAmount('decrease')}
        className="h-auto w-9 bg-light hover:bg-gray-400 rounded-l flex items-center justify-center"
      >
        <MinusIcon className="w-2 h-2 text-info"></MinusIcon>
      </button>
      <div className="flex w-10 h-7 bg-light items-center justify-center text-sm">
        {props.children}
      </div>
      <button
        onClick={() => props.handleAmount('increase')}
        className="h-auto w-9 bg-light hover:bg-gray-400 rounded-r flex items-center justify-center"
      >
        <PlusIcon className="w-2 h-2 text-info"></PlusIcon>
      </button>
    </Row>
  )
}
export default CountButton

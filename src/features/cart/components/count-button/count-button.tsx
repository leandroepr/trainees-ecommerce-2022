import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { Row } from 'components/toolkit'
import React from 'react'

export interface CountButtonProps {
  children?: React.ReactNode
}

const CountButton: React.FC<CountButtonProps> = (props) => {
  return (
    <Row className="border border-gray-400 rounded-r w-24">
      <button className="w-7 h-7 bg-light hover:bg-gray-400 py-2 px-3 rounded-l">
        <MinusIcon className="w-2 h-2 text-info"></MinusIcon>
      </button>
      <div className="flex w-10 h-7 bg-light py-2 px-3 items-center justify-center text-sm">
        {props.children}
      </div>
      <button className="w-7 h-7 bg-light hover:bg-gray-400 py-2 px-3 rounded-r">
        <PlusIcon className="w-2 h-2 text-info"></PlusIcon>
      </button>
    </Row>
  )
}

export default CountButton

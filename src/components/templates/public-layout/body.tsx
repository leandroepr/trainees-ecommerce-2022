import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface BodyProps {
  className?: string
  children?: React.ReactNode
}
const Body: React.FC<BodyProps> = (props) => {
  return (
    <main className={classNames('flex flex-col flex-1', props.className)}>
      {props.children}
    </main>
  )
}

export default Body

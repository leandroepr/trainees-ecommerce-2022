import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface BodyProps {
  className?: string
  children?: React.ReactNode
  mainBackgroung?: string
}
const Body: React.FC<BodyProps> = (props) => {
  return (
    <main className={classNames('flex flex-col flex-1', props.mainBackgroung)}>
      <div className={classNames('container mx-auto', props.className)}>
        {props.children}
      </div>
    </main>
  )
}

export default Body

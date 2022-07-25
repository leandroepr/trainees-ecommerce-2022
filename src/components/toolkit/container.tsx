import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface ContainerProps {
  className?: string
  children?: React.ReactNode
}
const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className={classNames('container mx-auto', props.className)}>
      {props.children}
    </div>
  )
}

export default Container

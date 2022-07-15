import { classNames } from 'helpers/class-names'
import React from 'react'

interface FooterComponentProps {
  className?: string
}
const FooterComponent: React.FC<FooterComponentProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'justify-center max-w-max text-xs text-opacity-1 text-gray-200 m-auto',
        className
      )}
    >
      Copyright © Trainees 80 Lines 2022.
    </div>
  )
}

export default FooterComponent

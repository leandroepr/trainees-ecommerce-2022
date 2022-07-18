import { classNames } from 'helpers/class-names'
import React from 'react'

interface FooterComponentProps {
  className?: string
}
const FooterComponent: React.FC<FooterComponentProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'text-xs text-gray-700 flex items-center justify-center shrink-0 h-10',
        className
      )}
    >
      Copyright © Trainees 80Lines 2022.
    </div>
  )
}

export default FooterComponent

import { ShoppingBagIcon } from '@heroicons/react/outline'
import Row from 'components/toolkit/row/row'
import { classNames } from 'helpers/class-names'
import React from 'react'

export interface HeaderLogoProps {
  className?: string
}
const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  return (
    <Row
      className={classNames(
        'w-36 h-10 overflow-hidden shrink-0 items-center',
        props.className
      )}
    >
      <Row className="h-10 items-center">
        <ShoppingBagIcon className="h-6 text-blue-800 flex shrink-0 mr-2" />
        <div className="flex flex-col text-base text-blue-800 space-y-[-8px]">
          <div className="flex font-bold tracking-[0.34em]">COMPRE</div>
          <div className="flex tracking-[0.8em]">FÁCIL</div>
        </div>
      </Row>
    </Row>
  )
}

export default HeaderLogo

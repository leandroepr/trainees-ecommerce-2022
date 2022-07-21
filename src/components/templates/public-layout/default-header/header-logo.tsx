import { CheckIcon, ShoppingBagIcon } from '@heroicons/react/outline'
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
        <div className="flex relative flex-row">
          <ShoppingBagIcon className="h-10 text-blue-800 flex shrink-0 pb-1 mt-1 mr-1" />
          <CheckIcon className="absolute h-3 mt-[21px] pl-[12px] text-blue-800" />
        </div>

        <div className="flex flex-col text-blue-800 space-y-[-8px]">
          <div className="flex tracking-[0.2em] font-bold ">COMPRE</div>
          <div className="flex tracking-[0.62em] ">FÁCIL</div>
        </div>
      </Row>
    </Row>
  )
}

export default HeaderLogo

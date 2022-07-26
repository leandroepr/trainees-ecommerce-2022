import { CheckIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
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
        <Row className="relative">
          <ShoppingBagIcon className="h-10 text-blue-800 flex shrink-0 pb-1 mt-1 mr-1" />
          <CheckIcon className="absolute h-4 mt-[21px] pl-3 text-blue-800 pb-1" />
        </Row>

        <Column className=" text-blue-800 space-y-[-8px]">
          <Text as="span" className="flex tracking-[0.2em] font-bold ">
            COMPRE
          </Text>
          <Text as="span" className="flex tracking-[0.6575em] ">
            FÁCIL
          </Text>
        </Column>
      </Row>
    </Row>
  )
}

export default HeaderLogo

import { classNames } from 'core/helpers/class-names'
import Link from 'next/link'
import React from 'react'

export interface NavigationItemProps {
  href: string
  text: string
  className?: string
}
const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  href,
  className,
}) => {
  return (
    <Link href={href}>
      <a className={classNames('hover:text-sky-400', className)}>{text}</a>
    </Link>
  )
}

export default NavigationItem

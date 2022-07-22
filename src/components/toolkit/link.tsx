import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export interface LinkProps {
  href: NextLinkProps['href']
  children: React.ReactNode
  className?: string
}
const Link: React.FC<LinkProps> = ({ children, className, ...linkProps }) => {
  return (
    <NextLink {...linkProps}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link

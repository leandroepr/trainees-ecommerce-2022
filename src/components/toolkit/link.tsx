import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export interface LinkProps {
  href: NextLinkProps['href']
  children: React.ReactNode
}
const Link: React.FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <NextLink {...linkProps}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link

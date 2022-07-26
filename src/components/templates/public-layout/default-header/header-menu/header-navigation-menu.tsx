import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { NavigationItem } from 'components/templates/public-layout/default-header/header-menu'
import { Link, Row, Text } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface HeaderNavigationMenuProps {
  className?: string
}
const HeaderNavigationMenu: React.FC<HeaderNavigationMenuProps> = ({
  className,
}) => {
  return (
    <nav>
      <Row className={classNames('', className)}>
        <NavigationItem text="Todos" href="/" />
        <NavigationItem text="Roupas" href="/produtos?categoria=roupas" />
        <NavigationItem text="Calçados" href="/produtos?categoria=calcados" />
        <NavigationItem
          text="Utilitários"
          href="/produtos?categoria=utilitarios"
        />
        <NavigationItem className="lg:hidden" text="CRUD" href="/admin" />
        <MenuIcon className=" sm:flex h-6 w-6 md:hidden" />
        <Row className="sm:hidden md:flex lg:hidden space-x-3"></Row>
        <Row className="space-x-4 md:hidden pr-4">
          <Row className="md:hidden">
            <Link href="/carrinho">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Text
              as="span"
              className="absolute ml-4 text-sm text-white bg-red-500 rounded-full w-5 h-5 text-center justify-center mt-[-6px]"
            >
              3
            </Text>
          </Row>
        </Row>
      </Row>
    </nav>
  )
}

export default HeaderNavigationMenu

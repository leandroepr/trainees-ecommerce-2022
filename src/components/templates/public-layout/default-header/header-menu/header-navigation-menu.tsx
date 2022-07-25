import { NavigationItem } from 'components/templates/public-layout/default-header/header-menu'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

export interface HeaderNavigationMenuProps {
  className?: string
}
const HeaderNavigationMenu: React.FC<HeaderNavigationMenuProps> = ({
  className,
}) => {
  return (
    <nav className={classNames('', className)}>
      <NavigationItem text="Todos" href="/" />
      <NavigationItem text="Roupas" href="/produtos?categoria=roupas" />
      <NavigationItem text="Calçados" href="/produtos?categoria=calcados" />
      <NavigationItem
        text="Utilitários"
        href="/produtos?categoria=utilitarios"
      />
    </nav>
  )
}

export default HeaderNavigationMenu

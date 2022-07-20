import { NavigationItem } from 'components/navigation-item'
import { classNames } from 'helpers/class-names'
import React from 'react'

export interface HeaderNavigationMenuProps {
  className?: string
}
const HeaderNavigationMenu: React.FC<HeaderNavigationMenuProps> = ({
  className,
}) => {
  return (
    <nav className={classNames('', className)}>
      <NavigationItem text="Todos" href="/" className="hover:text-blue" />

      <NavigationItem
        text="Roupas"
        href="/produtos?categoria=roupas"
        className="hover:text-blue"
      />

      <NavigationItem
        text="Calçados"
        href="/produtos?categoria=calcados"
        className="hover:text-blue"
      />

      <NavigationItem
        text="Utilitários"
        href="/produtos?categoria=utilitarios"
        className="hover:text-blue"
      />
    </nav>
  )
}

export default HeaderNavigationMenu

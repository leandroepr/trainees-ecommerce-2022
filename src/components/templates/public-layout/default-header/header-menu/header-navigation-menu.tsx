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
      <NavigationItem text="Todos" href="/" className="hover:text-sky-400" />

      <NavigationItem
        text="Roupas"
        href="/produtos?categoria=roupas"
        className="hover:text-sky-400"
      />

      <NavigationItem
        text="Calçados"
        href="/produtos?categoria=calcados"
        className="hover:text-sky-400"
      />

      <NavigationItem
        text="Utilitários"
        href="/produtos?categoria=utilitarios"
        className="hover:text-sky-400"
      />
    </nav>
  )
}

export default HeaderNavigationMenu

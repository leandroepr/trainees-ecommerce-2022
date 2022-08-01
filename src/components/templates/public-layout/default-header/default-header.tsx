import {
  BellIcon,
  ChevronDownIcon,
  LightningBoltIcon,
  LocationMarkerIcon,
  MenuIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import { Column, Link, Row, SearchInput, Text } from 'components/toolkit'

import { useQueryParams } from 'core/hooks/use-query-params'
import CartAmount from 'features/cart/components/cart-amount'
import { useRouter } from 'next/router'
import HeaderLogo from './header-logo'
import HeaderNavigationMenu from './header-menu/header-navigation-menu'
import UserDropdownMenu from './user-dropdown-menu'

type QueryType = {
  filtro?: string
}
const DefaultHeader = () => {
  const { query, updateQuery } = useQueryParams<QueryType>()
  const search = query.filtro || ''
  const router = useRouter()

  const redirectAndHandleOnSearch = (query: string) => {
    const currentPathName = router.pathname

    if (currentPathName.includes('/produtos')) {
      updateQuery({ filtro: query })
    } else {
      router.push(`produtos?filtro=${query}`)
    }
  }

  return (
    <Row className="text-secondary/80 space-x-7 bg-primary">
      <Column className="w-44 space-y-2">
        <Link href="/">
          <HeaderLogo className="text-blue" />
        </Link>

        <Row className="space-x-1 overflow-hidden">
          <Text as="span" className="flex items-center justify-center">
            <LocationMarkerIcon className="h-6 w-6" />
          </Text>
          <Text as="span" className="flex flex-col text-xs w-40">
            Envie para Fulano,{' '}
            <span className="font-bold">Endereço Tal, número tal</span>
          </Text>
        </Row>
      </Column>

      <Column className="space-y-3 grow">
        <SearchInput
          placeholder="Pesquise por produtos..."
          value={search}
          onSearch={redirectAndHandleOnSearch}
        />
        <Row className="space-x-6">
          <HeaderNavigationMenu className="space-x-6" />
        </Row>
      </Column>

      <Column className="hidden lg:flex space-y-3">
        <Row className="space-x-3 h-10 items-center">
          <LightningBoltIcon className="h-6 w-6" />
          <Text as="span">Aproveite preços incríveis todos os dias!</Text>
        </Row>

        <Row className="space-x-3">
          <UserCircleIcon className="h-6 w-6" />
          <Row>
            <UserDropdownMenu>
              <Row>
                Usuário <ChevronDownIcon className="w-4" />
              </Row>
            </UserDropdownMenu>
          </Row>

          <Row>
            <Text as="span">Compras</Text>
            <ChevronDownIcon className="w-4 " />
          </Row>
          <Row>
            <Text as="span">Favoritos</Text>
            <ChevronDownIcon className="w-4 " />
          </Row>

          <BellIcon className="h-6 w-6" />

          <Row>
            <Link href="/carrinho">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Text
              as="span"
              className="absolute ml-4 text-sm text-white bg-red-500 rounded-full w-5 h-5 text-center justify-center mt-[-6px]"
            >
              {<CartAmount />}
            </Text>
          </Row>
        </Row>
      </Column>

      <Column className="hidden md:flex md:pt-2 md:space-y-1">
        <Row className="sm:h-10 sm:w-10 lg:hidden">
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
        <MenuIcon className="sm:h-6 sm:w-6 lg:hidden" />
      </Column>
    </Row>
  )
}

export default DefaultHeader

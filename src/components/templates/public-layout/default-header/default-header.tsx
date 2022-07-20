import {
  BellIcon,
  ChevronDownIcon,
  LightningBoltIcon,
  LocationMarkerIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import Column from 'components/toolkit/column/column'
import Row from 'components/toolkit/row/row'
import SearchInput from 'components/toolkit/search-input/search-input'
import { useQueryParams } from 'hooks/use-query-params'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderLogo from './header-logo'

type QueryType = {
  filtro?: string
}
const DefaultHeader = () => {
  const { query, updateQuery } = useQueryParams<QueryType>()
  const search = query.filtro || ''
  const handleOnSearch = (query: string) => updateQuery({ filtro: query })
  const router = useRouter()

  const redirectAndHandleOnSearch = (query: string) => {
    handleOnSearch(query)
    router.push(`produtos?filtro=${query}`)
  }

  return (
    <div className="flex flex-row text-grey/100 space-x-7 ">
      <Column className="w-44 space-y-2">
        <Link href="/">
          <HeaderLogo className="text-blue" />
        </Link>

        <Row className="space-x-1 overflow-hidden">
          <div className="flex items-center justify-center">
            <LocationMarkerIcon className="h-6 w-6" />
          </div>
          <div className="flex flex-col text-xs w-40">
            Envie para Fulano, <strong>Endereço Tal, número tal</strong>
          </div>
        </Row>
      </Column>

      <Column className="space-y-3 grow">
        <SearchInput
          placeholder="Pesquise por produtos..."
          value={search}
          onSearch={redirectAndHandleOnSearch}
        />
        <Row className="flex space-x-6">
          <div>
            <Link href="/">
              <a>Todos</a>
            </Link>
          </div>
          <div>
            <Link href="/produtos?categoria=roupas">
              <a>Roupas</a>
            </Link>
          </div>
          <div>
            <Link href="/produtos?categoria=calcados">
              <a>Calçados</a>
            </Link>
          </div>
          <div>
            <Link href="/produtos?categoria=utilitarios">
              <a>Utilitários</a>
            </Link>
          </div>
        </Row>
      </Column>

      <Column className="space-y-3">
        <Row className="space-x-3 h-10 items-center">
          <LightningBoltIcon className="h-6 w-6" />
          <div>Aproveite preços incríveis todos os dias</div>
        </Row>

        <Row className="space-x-3">
          <div>
            <UserCircleIcon className="h-6 w-6" />
          </div>
          <Row>
            <div>Usuário</div>
            <ChevronDownIcon className="w-4 pt-1" />
          </Row>

          <Row>
            <div>Compras</div>
            <ChevronDownIcon className="w-4 pt-1" />
          </Row>
          <Row>
            <div>Favoritos</div>
            <ChevronDownIcon className="w-4 pt-1" />
          </Row>

          <div>
            <BellIcon className="h-6 w-6" />
          </div>

          <div className="flex flex-row">
            <Link href="/carrinho">
              <a>
                <ShoppingCartIcon className="h-6 w-6" />
              </a>
            </Link>
            <div className="absolute ml-4 text-sm text-white bg-red rounded-full w-5 h-5 text-center justify-center">
              3
            </div>
          </div>
        </Row>
      </Column>
    </div>
  )
}

export default DefaultHeader

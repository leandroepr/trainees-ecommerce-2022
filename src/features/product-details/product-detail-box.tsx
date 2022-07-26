import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { PencilIcon } from '@heroicons/react/solid'
import { Column, Row, Text } from 'components/toolkit'
import Link from 'next/link'
import VendorInfoBox from './vendor-info-box'

const ProductDetailsBox = () => {
  return (
    <Column className="p-6">
      <Text className="text-xs pb-2">Novo | 884 vendidos</Text>
      <Row>
        <Text className="text-2xl font-extrabold max-w-xs pb-2 text-black">
          Camiseta Hering Super Cotton - Unissex
        </Text>
        <PencilIcon className="h-10 text-blue-500" />
      </Row>
      <Text
        as="span"
        className=" bg-blue-500 w-fit rounded text-white px-2 py-1 text-sm"
      >
        Enviando normalmente
      </Text>
      <div className="space-y-2">
        <Column className="max-w-xs">
          <Text as="span" className="text-4xl text-bold pt-4 text-black">
            R$ 49,99
          </Text>
          <Text as="span" className="text-sm text-black pb-4">
            em 10x de R$ 5,65
          </Text>
        </Column>
        <Text as="span" className="text-black">
          Estoque disponível
        </Text>
      </div>

      <Row className="pt-4 pb-2">
        <CheckIcon className="h-5 text-green-500" />
        <Column className="text-sm space-y-1 pb-4">
          <Text as="span" className="text-green-500 font-bold">
            Frete grátis
          </Text>
          <Text as="span">Benefício Lorem Ipsum</Text>

          <Link href="/">
            <a className="text-blue-500 font-bold pb-2">Ver mais opções</a>
          </Link>
        </Column>
      </Row>

      <Column className="items-center justify-center space-y-4 pb-6">
        <button className="bg-blue-500 justify-center items-center h-10 rounded text-white container">
          Comprar agora
        </button>

        <button className="w-full justify-center items-center h-10 rounded text-blue-500 border-2 border-blue-500">
          Adicionar ao carrinho
        </button>
      </Column>

      <Row>
        <ShieldCheckIcon className="h-10 pr-2" />
        <Text as="span" className="text-sm text-gray-600 pb-8">
          Compra garantida, receba o produto que está esperando ou devolvemos o
          dinheiro.
        </Text>
      </Row>
      <VendorInfoBox />
    </Column>
  )
}

export default ProductDetailsBox

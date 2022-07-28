import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { PencilIcon } from '@heroicons/react/solid'
import { Column, Row, Text } from 'components/toolkit'
import useCartContext from 'features/cart/hooks/use-cart-context'
import { Product } from 'features/product/types/product'
import Link from 'next/link'
import React from 'react'
import VendorInfoBox from './vendor-info-box'

export interface ProductDetailsBoxProps {
  product: Product[] | undefined
}

const ProductDetailsBox: React.FC<ProductDetailsBoxProps> = ({ product }) => {
  const { items, dispatch } = useCartContext()

  const add = (product: Product) => {
    const existingProduct = items.find(
      (item) => item.product.slug === product.slug
    )
    if (existingProduct) {
      dispatch({
        type: 'update',
        data: { ...existingProduct, amount: (existingProduct.amount += 1) },
      })
    } else {
      dispatch({
        type: 'add',
        data: { product: product, amount: 1 },
      })
    }
  }

  return (
    <Column className="p-8">
      {product?.map((product) => (
        <>
          <Text className="text-xs pb-2">
            {product.condition} | {product.soldAmount} vendidos
          </Text>
          <Row>
            <Text className="text-2xl font-extrabold max-w-xs pb-2 text-black">
              {product.name}
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
                R$ {String(product.price).replace('.', ',')}
              </Text>
              <Text as="span" className="text-sm text-black pb-4">
                {product.installmentsInfo}
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

            <button
              className="w-full justify-center items-center h-10 rounded text-blue-500 border-2 border-blue-500"
              onClick={() => add(product)}
            >
              Adicionar ao carrinho
            </button>
          </Column>

          <Row>
            <ShieldCheckIcon className="h-10 pr-2" />
            <Text as="span" className="text-sm text-gray-600 pb-8">
              Compra garantida, receba o produto que está esperando ou
              devolvemos o dinheiro.
            </Text>
          </Row>
          <VendorInfoBox />
        </>
      ))}
    </Column>
  )
}

export default ProductDetailsBox

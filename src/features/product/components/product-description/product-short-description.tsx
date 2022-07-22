import { CheckIcon, PencilIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'
import Badge from 'components/toolkit/badge'
import Link from 'next/link'
import React from 'react'

export interface ProductShortDescriptionProps {}
const ProductShortDescription: React.FC<ProductShortDescriptionProps> = () => { 
  return (
    <Column className="max-w-xs gap-2">
      <Text textType="normal">Novo │ 3049 vendidos</Text>
      <Row className="gap-5">
        <Text textType="categoryProductListName">
          Sapatenis Tenis Casual Masculino Cano Alto
        </Text>
        <PencilIcon className="w-14 place-self-start pt-1 text-sky-500" />
      </Row>
      <Badge variant="info">Enviando normalmente</Badge>
      <Column className="pt-2">
        <Row>
          <Text textType="cardCurrency">R$ 64</Text>
          <Text textType="cardCents">50</Text>
        </Row>
        <Text textType="cardInstallment">em 12x R$ 6,13</Text>
      </Column>
      <Text textType="normal">Estoque disponível</Text>
      <Row className="py-2">
        <CheckIcon className="w-5 shrink-0 place-self-start pt-1 text-green-500" />
        <Column className="px-3">
          <Text className="text-green-500" textType="normal">
            Frete grátis
          </Text>
          <Text textType="normal">Benefício Lorem Ipsum</Text>
          <Text textType="categoryProductListLink">
            <Link href="#">Ver mais opções</Link>
          </Text>
        </Column>
      </Row>
      <Column className="gap-3 py-4">
        <button className="bg-sky-500 h-10 text-white rounded-md">
          Comprar agora
        </button>
        <button className="outline outline-offset-0  border-sky-500 h-10 text-sky-500 rounded-md">
          Adicionar ao carrinho
        </button>
      </Column>
      <Row className="gap-2">
        <ShieldCheckIcon className="w-5 shrink-0 place-self-start pt-1" />
        <Text className="text-sm" textType="normal">
          Compra Garantida, recebo o produto que está esperando ou devolvemos o
          dinheiro.
        </Text>
      </Row>
    </Column>
  )
}

export default ProductShortDescription
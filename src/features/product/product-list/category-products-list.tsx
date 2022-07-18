import { ChevronRightIcon } from '@heroicons/react/outline'
import Column from 'components/toolkit/column'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import React from 'react'

export interface CategoryProductsListProps {
  children?: JSX.Element | JSX.Element[]
  className?: string
  categoryName?: string
  categoryPageLink?: string
  cardsQuantity?: number
}
const CategoryProductsList: React.FC<CategoryProductsListProps> = ({
  children,
  className,
  categoryName = '',
  categoryPageLink = '/',
  cardsQuantity = 5,
}) => {
  const sliceCardArray = ({
    cards,
    quantity,
  }: {
    cards: JSX.Element[] | JSX.Element
    quantity: number
  }) => (Array.isArray(cards) ? cards.slice(0, quantity) : cards)
  return (
    <Column className={classNames('space-y-5', className)}>
      <Row className="items-baseline space-x-4">
        <Text textType="categoryProductListName">{categoryName}</Text>
        <Link href={categoryPageLink}>
          <a>
            <Text textType="categoryProductListLink">Ver detalhes</Text>
          </a>
        </Link>
      </Row>
      <Row className="space-x-4 items-center">
        {sliceCardArray({ cards: children || [], quantity: cardsQuantity })}
        <Link href={categoryPageLink}>
          <a>
            <span className="w-16 h-16 p-2 bg-white rounded-full shadow-md flex items-center justify-center -translate-x-12">
              <ChevronRightIcon className="w-6, h-6 text-blue-500 stroke-[3px]" />
            </span>
          </a>
        </Link>
      </Row>
    </Column>
  )
}

export default CategoryProductsList

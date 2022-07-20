import { ChevronRightIcon } from '@heroicons/react/outline'
import { useGetAllProducts } from 'api-hook/product/use-get-all-products'
import { Column } from 'components/toolkit'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ProductCard } from '../product-card'

type QueryType = {
  filtro?: string
}

export interface CategoryProductsListProps {
  className?: string
  categoryName?: string
  categoryPageLink?: string
  categoryId?: string
}
const CategoryProductsList: React.FC<CategoryProductsListProps> = ({
  className,
  categoryName = '',
  categoryPageLink = '/',
  categoryId,
}) => {
  const { data } = useGetAllProducts({ category: categoryId })

  const router = useRouter()

  return (
    <Column className={classNames('space-y-5', className)}>
      <Row className="items-baseline space-x-4">
        <Text className="text-zinc-700 text-2xl font-thin">{categoryName}</Text>
        <Link href={`produtos?categoria=${categoryId}`}>
          <a onClick={() => router.push(`produtos?categoria=${categoryId}`)}>
            <Text className="text-blue">Ver detalhes</Text>
          </a>
        </Link>
      </Row>
      <Row className="relative">
        <Row className={`grid grid-cols-5 space-x-4 items-center`}>
          {data?.slice(0, 5).map((product) => (
            <ProductCard
              className="h-full"
              key={product.slug}
              product={product}
            />
          ))}
        </Row>
        <Column className="absolute -right-8 h-full justify-center">
          <Link href={`produtos?categoria=${categoryId}`}>
            <a onClick={() => router.push(`produtos?categoria=${categoryId}`)}>
              <span className="w-16 h-16 p-2 bg-white rounded-full shadow-md flex items-center justify-center">
                <ChevronRightIcon className="w-6 h-6 text-blue stroke-[3px]" />
              </span>
            </a>
          </Link>
        </Column>
      </Row>
    </Column>
  )
}

export default CategoryProductsList

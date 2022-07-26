import { ChevronRightIcon } from '@heroicons/react/outline'
import { Column, Link, Row, SkeletonElement, Text } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'
import React from 'react'
import { ProductCard } from '../product-card'

export interface CategoryProductsListProps {
  className?: string
  categoryName?: string
  categoryPageLink?: string
  categoryId?: string
  pending?: boolean
}
const CategoryProductsList: React.FC<CategoryProductsListProps> = ({
  className,
  categoryName = '',
  categoryId,
  pending = false,
}) => {
  const { data } = useGetAllProducts({ category: categoryId })

  if (pending)
    return (
      <Column className={classNames('space-y-5 animate-pulse', className)}>
        <Row className="items-baseline space-x-4">
          <SkeletonElement order="secondary" className="h-6 w-1/3" />
          <SkeletonElement order="secondary" className="h-5 w-1/12" />
        </Row>
        <Row className="relative">
          <Row className={`w-full grid grid-cols-5 gap-4 items-center`}>
            {Array(5).fill(<ProductCard pending={true} variant="compressed" />)}
          </Row>
          <Column className="absolute -right-8 h-full justify-center">
            <span className="w-16 h-16 bg-gray-200 rounded-full" />
          </Column>
        </Row>
      </Column>
    )

  return (
    <Column className={classNames('space-y-5', className)}>
      <Row className="items-baseline space-x-4">
        <Text className="text-zinc-700 text-2xl font-thin">{categoryName}</Text>
        <Link href={`/produtos?categoria=${categoryId}`}>
          <Text className="text-info">Ver detalhes</Text>
        </Link>
      </Row>
      <Row className="relative">
        <div className={`grid grid-cols-5 gap-4`}>
          {data?.slice(0, 5).map((product) => (
            <Link key={product.slug} href={`/produtos/${product.slug}`}>
              <ProductCard className="h-full" product={product} />
            </Link>
          ))}
        </div>
        <Column className="absolute -right-8 h-full justify-center">
          <Link href={`/produtos?categoria=${categoryId}`}>
            <span className="w-16 h-16 p-2 bg-light rounded-full text-info hover:bg-info hover:text-white shadow-md flex items-center justify-center">
              <ChevronRightIcon className="w-6 h-6 stroke-[3px]" />
            </span>
          </Link>
        </Column>
      </Row>
    </Column>
  )
}

export default CategoryProductsList

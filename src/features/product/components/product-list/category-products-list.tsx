import { ChevronRightIcon } from '@heroicons/react/outline'
import { Column } from 'components/toolkit'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'core/helpers/class-names'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'
import Link from 'next/link'
import React from 'react'
import { ProductCard } from '../product-card'

export interface CategoryProductsListProps {
  className?: string
  categoryName?: string
  categoryPageLink?: string
  categoryId?: string
}
const CategoryProductsList: React.FC<CategoryProductsListProps> = ({
  className,
  categoryName = '',
  categoryId,
}) => {
  const { data } = useGetAllProducts({ category: categoryId })

  return (
    <Column className={classNames('space-y-5', className)}>
      <Row className="items-baseline space-x-4">
        <Text className="text-zinc-700 text-2xl font-thin">{categoryName}</Text>
        <Link href={`/produtos?categoria=${categoryId}`}>
          <a>
            <Text className="text-blue">Ver detalhes</Text>
          </a>
        </Link>
      </Row>
      <Row className="relative">
        <div className={`grid grid-cols-5 gap-4`}>
          {data?.slice(0, 5).map((product) => (
            <Link key={product.slug} href={`/produtos/${product.slug}`}>
              <a>
                <ProductCard className="h-full" product={product} />
              </a>
            </Link>
          ))}
        </div>
        <Column className="absolute -right-8 h-full justify-center">
          <Link href={`/produtos?categoria=${categoryId}`}>
            <a>
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

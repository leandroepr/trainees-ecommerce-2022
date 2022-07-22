import { Row } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import { ProductCard } from 'features/product'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'
import Link from 'next/link'
import React from 'react'

const ProductsList: React.FC = () => {
  const { data: products } = useGetAllProducts()

  return (
    <Row className={classNames('max-w-screen-lg')}>
      <div
        className={classNames(
          'grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
        )}
      >
        {products?.map((product) => (
          <Link key={product.slug} href={`/produtos/${product.slug}`}>
            <a>
              <ProductCard product={product} variant="detailed" />
            </a>
          </Link>
        ))}
      </div>
    </Row>
  )
}

export default ProductsList

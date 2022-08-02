import { Link, Row } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import { ProductCard } from 'features/product'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'
import { useRouter } from 'next/router'
import React from 'react'

type QueryType = {
  filtro: string
  categoria: string
}

const ProductsList: React.FC = () => {
  const { data: products } = useGetAllProducts()

  const router = useRouter()

  const { filtro, categoria } = router.query as QueryType

  if (categoria) {
    return (
      <Row className={classNames('')}>
        <div
          className={classNames(
            'grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
          )}
        >
          {filtro
            ? products
                ?.filter(
                  (product) =>
                    (product.categoryId.includes(categoria) &&
                      product.name
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .includes(filtro)) ||
                    product.slug
                      .split('-')
                      .join(' ')
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .includes(filtro && categoria)
                )
                .map((product) => (
                  <Link key={product.slug} href={`/produtos/${product.slug}`}>
                    <ProductCard product={product} variant="detailed" />
                  </Link>
                ))
            : products
                ?.filter((product) => product.categoryId.includes(categoria))
                .map((product) => (
                  <Link key={product.slug} href={`/produtos/${product.slug}`}>
                    <ProductCard product={product} variant="detailed" />
                  </Link>
                ))}
        </div>
      </Row>
    )
  } else {
    return (
      <Row className={classNames('')}>
        <div
          className={classNames(
            'grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
          )}
        >
          {products
            ?.filter(
              (product) =>
                product.name
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .includes(filtro) ||
                product.slug
                  .split('-')
                  .join(' ')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .includes(filtro) ||
                product.categoryId.includes(filtro) ||
                product.categories.includes(filtro) ||
                product.name.includes(filtro)
            )
            .map((product) => (
              <Link key={product.slug} href={`/produtos/${product.slug}`}>
                <ProductCard product={product} variant="detailed" />
              </Link>
            ))}
        </div>
      </Row>
    )
  }
}

export default ProductsList

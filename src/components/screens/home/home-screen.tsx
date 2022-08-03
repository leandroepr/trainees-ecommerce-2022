import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Container, Link } from 'components/toolkit'
import { useGetAllCategoriesWithProducts } from 'features/category/hooks/use-get-all-categories-with-products'
import { ProductCard } from 'features/product'
import CategoryProductsList from 'features/product/components/product-list/category-products-list'
import React from 'react'

const HomeScreen: React.FC = () => {
  const { data, isLoading: loadingCategories } =
    useGetAllCategoriesWithProducts()

  return (
    <DefaultPublicLayout title="Compre Fácil | Início">
      <Container className="space-y-12 py-12">
        {loadingCategories
          ? Array.from({ length: 3 }, (_, i) => (
              <CategoryProductsList pending={true} key={i + 1}>
                {Array.from({ length: 5 }, (_, i) => (
                  <ProductCard pending={true} key={i + 1} />
                ))}
              </CategoryProductsList>
            ))
          : data?.map((category) => (
              <CategoryProductsList
                key={category.name}
                categoryName={category.displayName}
                categoryId={category.id}
                categoryPageLink={category.id}
              >
                {category.products.slice(0, 5).map((product) => (
                  <Link key={product.slug} href={`/produtos/${product.slug}`}>
                    <ProductCard className="h-full" product={product} />
                  </Link>
                ))}
              </CategoryProductsList>
            ))}
      </Container>
    </DefaultPublicLayout>
  )
}

export default HomeScreen

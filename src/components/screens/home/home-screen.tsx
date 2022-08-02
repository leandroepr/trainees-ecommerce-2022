import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Container, Link } from 'components/toolkit'
import { useGetAllCategoriesWithProducts } from 'features/category/hooks/use-get-all-categories-with-products'
import { ProductCard } from 'features/product'
import CategoryProductsList from 'features/product/components/product-list/category-products-list'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const {
    data,
    isLoading: loadingCategories,
    error,
  } = useGetAllCategoriesWithProducts()

  React.useEffect(() => {
    console.log({
      log: 'Categories with products',
      data,
      isLoading: loadingCategories,
      error,
    })
  }, [data, loadingCategories, error])

  return (
    <DefaultPublicLayout title="Compre Fácil | Início">
      <Container className="space-y-12 py-12">
        {loadingCategories
          ? Array(3).fill(
              <CategoryProductsList pending={true}>
                {Array(5).fill(<ProductCard pending={true} />)}
              </CategoryProductsList>
            )
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

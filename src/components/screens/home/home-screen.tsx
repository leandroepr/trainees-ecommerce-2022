import { useGetAllProducts } from 'api-hook/product/use-get-all-products'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import ProductCard from 'features/product/product-card/product-card'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: products } = useGetAllProducts()
  return (
    <DefaultPublicLayout title="Home">
      {isLoading && <div>Carregando...</div>}
      <div className="grid grid-cols-5 gap-4 py-4">
        {products?.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </DefaultPublicLayout>
  )
}

export default HomeScreen

import { useGetAllProducts } from 'api-hook/product/use-get-all-products'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, error, data: products } = useGetAllProducts()
  return (
    <DefaultPublicLayout title="Home">
      {isLoading && <div>Carregando...</div>}
      <span>
        {error ? error.message : JSON.stringify(products?.slice(0, 3))}
      </span>
    </DefaultPublicLayout>
  )
}

export default HomeScreen

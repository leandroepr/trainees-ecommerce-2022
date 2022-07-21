import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import React from 'react'

export interface ProductDetailScreenProps {
  slug: string
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ slug }) => {
  return (
    <DefaultPublicLayout title="Detalhes do produto">
      <section className="flex flex-col space-y-4 w-full">
        <div>Voltar à lista | Roupas | Camisetas | Masculino | Curta</div>
        <div className="flex flex-row space-x-6 bg-green-200 items-center">
          <div className="space-y-6 bg-blue-300">
            <div>Row 2 col 1 row 1</div>
            <div>Row 2 col 1 row 2</div>
          </div>
          <div className="space-y-6 bg-red-300">
            <div>Row 2 col 2 row 1</div>
            <div>Row 2 col 2 row 2</div>
          </div>
        </div>
      </section>
    </DefaultPublicLayout>
  )
}

export default ProductDetailScreen

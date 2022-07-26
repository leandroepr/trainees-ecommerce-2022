import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import {
  Column,
  Container,
  Flex,
  Image,
  Link,
  Row,
  Text,
} from 'components/toolkit'
import ProductDetailsBox from 'features/product-details/product-detail-box'
import React from 'react'

export interface ProductDetailScreenProps {
  slug: string
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = () => {
  return (
    <DefaultPublicLayout title="Detalhes do produto">
      <Container className="py-4">
        <Column as="section" className="flex flex-col space-y-4 text-gray-700">
          <Row className="text-blue-500 space-x-4">
            <Link className="text-gray-700" href="/">
              Voltar à lista
            </Link>
            <Link href="/produtos">Roupas </Link>
            <Link href="/produtos?categoria=roupa">Camisetas</Link>
            <Link href="/produtos?categoria=roupa">Masculino</Link>
            <Link href="/produtos?categoria=roupa">Curta</Link>
          </Row>
          <Row className="w-full h-full bg-white drop-shadow mt-4">
            <Column className="grow">
              <Flex className="items-center justify-center border-b max-h-[34rem] py-2">
                <Image
                  src="https://http2.mlstatic.com/camiseta-hering-super-cotton-masculina-D_NQ_NP_851063-MLB40515678610_012020-O.jpg"
                  alt="Camisa preta"
                />
              </Flex>
              <Column className="space-y-4 p-8">
                <Text as="h2" className="font-bold text-lg text-black">
                  Descrição
                </Text>
                <Text as="span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ac magna vehicula, hendrerit arcu condimentum,
                  mollis ligula. Quisque enim nisi, commodo eu ex nec,
                  sollicitudin sagittis mauris. Pellentesque non metus vitae leo
                  aliquam commodo pulvinar et sem. Vestibulum fringilla massa a
                  mauris lacinia varius. Nulla a ante felis. Ut eu eleifend
                  arcu, sit amet semper nisi. Duis fermentum ligula nec blandit
                  vehicula. Integer ut libero justo. Pellentesque eget mauris
                  lobortis, hendrerit nisl vitae, fermentum justo.
                </Text>
              </Column>
            </Column>
            <Column className="shrink-0 border-l h-full">
              <div className="max-w-sm">
                <ProductDetailsBox />
              </div>
            </Column>
          </Row>
        </Column>
      </Container>
    </DefaultPublicLayout>
  )
}

export default ProductDetailScreen

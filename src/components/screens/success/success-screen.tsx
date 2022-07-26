import { BadgeCheckIcon } from '@heroicons/react/outline'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container, Text } from 'components/toolkit'

const ProductsScreen: React.FC = () => {

  return (
    <DefaultPublicLayout>
      <Container className='bg-light h-[40rem] m-auto drop-shadow'>
        <Column className='items-center p-8 mt-40'>
          <BadgeCheckIcon className="w-28 h-28" />
          <Text as='h1' className="font-bold text-2xl">Compra realizada com sucesso!</Text>
          <Text as='span' className="font-medium text-dark/50">Agradecemos sua preferência!</Text>
        </Column>
      </Container>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen

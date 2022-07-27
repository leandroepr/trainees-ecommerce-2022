import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container, Row } from 'components/toolkit'
import NewProductForm from 'features/admin/components/new-product-form/new-product-form'
import ProductDetails from 'features/admin/components/product-details/product-details'

const NewProductScreen: React.FC = () => {
  return (
    <DefaultPublicLayout>
      <Container>
        <Row className='h-[40rem] w-full my-4'>
          <Column className='w-60 drop-shadow hidden md:block'>
            <ProductDetails />
          </Column>
          <Column className='m-auto md:ml-8 md:grow basis-2/3 rounded-sm bg-white h-fit drop-shadow'>
            <NewProductForm />
          </Column>
        </Row>
      </Container>
    </DefaultPublicLayout>
  )
}

export default NewProductScreen

import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import Grid from 'components/toolkit/grid/grid'
import Placeholder from 'components/toolkit/placeholder/placeholder'
import Row from 'components/toolkit/row/row'

const ProductsScreen: React.FC = () => {
  return (
    <DefaultPublicLayout>
      <Placeholder height="50" width="800" text="Buscas Relacionadas" />
      <Row className="flex-row justify-between">
        <Placeholder height="600" width="300" text="Menu Lateral" />
        <Grid>
          <Placeholder height="500" width="300" text="Card" />
          <Placeholder height="500" width="300" text="Card" />
          <Placeholder height="500" width="300" text="Card" />
          <Placeholder height="500" width="300" text="Card" />
          <Placeholder height="500" width="300" text="Card" />
          <Placeholder height="500" width="300" text="Card" />
        </Grid>
      </Row>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen

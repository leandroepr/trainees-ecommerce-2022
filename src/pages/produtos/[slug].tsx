import ProductDetailScreen from 'components/screens/product-detail/product-detail-screen'
import { GetServerSideProps, NextPage } from 'next'

interface Props {
  slug: string
}
const ProductDetailRoute: NextPage<Props> = ({ slug }) => {
  return <ProductDetailScreen slug={slug} />
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const slug = context.query.slug?.toString() || ''
  return { props: { slug } }
}

export default ProductDetailRoute

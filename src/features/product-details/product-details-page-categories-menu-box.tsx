import { Row } from 'components/toolkit'
import Link from 'next/link'

const ProductDetailsPageCategoriesBox = () => {
  return (
    <Row>
      <Link href="/">
        <a className="pr-2 border-r-2 pl-2">Voltar à lista</a>
      </Link>{' '}
      <nav className="text-blue-500">
        <Link href="/">
          <a className="border-r-2 px-2">Roupas</a>
        </Link>{' '}
        <Link href="/">
          <a className="border-r-2 px-2">Camisetas</a>
        </Link>{' '}
        <Link href="/">
          <a className="border-r-2 px-2">Masculino</a>
        </Link>{' '}
        <Link href="/">
          <a className="pr-2 pl-2">Curta</a>
        </Link>
      </nav>
    </Row>
  )
}

export default ProductDetailsPageCategoriesBox

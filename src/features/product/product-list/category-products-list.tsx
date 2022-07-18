import Column from 'components/toolkit/column'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import React from 'react'

export interface CategoryProductsListProps {
  children?: JSX.Element | JSX.Element[]
  className?: string
  categoryName?: string
  categoryPageLink?: string
}
const CategoryProductsList: React.FC<CategoryProductsListProps> = ({
  children,
  className,
  categoryName = '',
  categoryPageLink = '/',
}) => {
  return (
    <Column className={classNames('space-y-5', className)}>
      <Row className="items-baseline space-x-4">
        <Text textType="categoryProductListName">{categoryName}</Text>
        <Link href={categoryPageLink}>
          <a>
            <Text textType="categoryProductListLink">Ver detalhes</Text>
          </a>
        </Link>
      </Row>
      <Row className="space-x-4">{children}</Row>
    </Column>
  )
}

export default CategoryProductsList

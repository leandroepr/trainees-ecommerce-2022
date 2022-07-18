import Row from 'components/toolkit/row/row'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import React from 'react'

const RelatedSearches: React.FC = () => {
  const relatedList = [
    'roupas femininas',
    'camisas masculinas',
    'body feminino',
    'cropped',
    'conjuntos femininos'
  ]

  return (
    <Row>
      <h3 className={classNames('font-bold text-gray-700')}>
        Buscas relacionadas:
      </h3>
      {relatedList.map((relatedItem, i) => (
        <Link key={relatedItem} href={relatedItem}>
          <Row>
            <a
              className={classNames(
                'ml-2 cursor-pointer text-gray-500 font-normal'
              )}
            >
              {relatedItem}
            </a>
            <span className={classNames('ml-2')}>
              {i < relatedList.length - 1 ? '-' : null}
            </span>
          </Row>
        </Link>
      ))}
    </Row>
  )
}

export default RelatedSearches

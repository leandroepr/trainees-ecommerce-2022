import Row from 'components/toolkit/row/row'
import { classNames } from 'helpers/class-names'
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
      <h3 className={classNames('line-clamp-1 font-bold text-gray-700')}>
        Buscas relacionadas:
      </h3>
      {relatedList.map((relatedItem, i) => (
        <Row key={relatedItem}>
          <p
            className={classNames(
              'line-clamp-1 ml-2 text-gray-500 font-normal'
            )}
          >
            {relatedItem}
          </p>
          <span className={classNames('ml-2')}>
            {i < relatedList.length - 1 ? '-' : null}
          </span>
        </Row>
      ))}
    </Row>
  )
}

export default RelatedSearches

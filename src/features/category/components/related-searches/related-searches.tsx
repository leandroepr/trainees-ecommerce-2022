import { Row } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

const RelatedSearches: React.FC = () => {
  const relatedList = [
    'roupas femininas',
    'camisas masculinas',
    'body feminino',
    'cropped',
    'conjuntos femininos',
  ]

  return (
    <Row className="py-4">
      <h3
        className={classNames(
          'whitespace-nowrap line-clamp-1 font-bold text-gray-700'
        )}
      >
        Buscas relacionadas:
      </h3>
      {relatedList.map((relatedItem, i) => (
        <Row className="overflow-hidden" key={relatedItem}>
          <p
            className={classNames(
              'line-clamp-1 ml-2 truncate text-gray-500 font-normal'
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

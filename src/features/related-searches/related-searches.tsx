import Row from 'components/toolkit/row/row'
import { classNames } from 'helpers/class-names'
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
    <Row>
      <h3 className={classNames('whitespace-nowrap font-bold text-gray-700')}>
        Buscas relacionadas:
      </h3>
      {relatedList.map((relatedItem, i) => (
        <Row key={relatedItem} className="overflow-hidden">
          <p className={classNames('ml-2 truncate text-gray-500 font-normal')}>
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

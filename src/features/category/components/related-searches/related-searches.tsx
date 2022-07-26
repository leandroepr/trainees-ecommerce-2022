import { Text } from 'components/toolkit'
import Row from 'components/toolkit/row/row'
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
      <Text as='h3'
        className={classNames(
          'whitespace-nowrap line-clamp-1 font-bold text-gray-700'
        )}
      >
        Buscas relacionadas:
      </Text>
      {relatedList.map((relatedItem, i) => (
        <Row className="overflow-hidden" key={relatedItem}>
          <Text as='p'
            className={classNames(
              'line-clamp-1 ml-2 truncate text-gray-500 font-normal'
            )}
          >
            {relatedItem}
          </Text>
          <Text className={classNames('ml-2')}>
            {i < relatedList.length - 1 ? '-' : null}
          </Text>
        </Row>
      ))}
    </Row>
  )
}

export default RelatedSearches

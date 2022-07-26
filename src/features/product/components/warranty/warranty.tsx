import { Column, Link, Row, Text } from 'components/toolkit'
import React from 'react'

const Warranty: React.FC = () => {
  return (
    <Column className="max-w-sm">
      <Row className="py-8">
        <Text as="h3" className="font-bold text-lg">
          Garantia
        </Text>
      </Row>
      <Row className="pb-2 items-center">
        <Column>
          <Text as="h4" className="font-medium text-dark">
            Compra garantida com o Compre Fácil Seguro
          </Text>
          <Text className="font-medium text-dark/30">
            Receba o produto que está esperando ou devolvemos seu dinheiro
          </Text>
        </Column>
      </Row>
      <Row className="pb-4">
        <Column>
          <Text as="h4" className="font-medium text-dark">
            Compra garantida do vendedor
          </Text>
          <Text className="font-medium text-dark/30">Sem garantia</Text>
        </Column>
      </Row>
      <Row className="pb-6">
        <Link href="#" className="cursor-pointer text-info font-bold">
          Saiba mais sobre garantia
        </Link>
      </Row>
    </Column>
  )
}

export default Warranty

import { Column } from 'components/toolkit'
import Row from 'components/toolkit/row/row'
import React from 'react'

const Warranty: React.FC = () => {
  return (
    <Column className='max-w-sm'>
      <Row className='py-8'>
        <h3 className='font-bold text-lg'>
          Garantia
        </h3>
      </Row>
      <Row className='pb-2 items-center'>
        <Column>
          <h4 className='font-medium text-dark'>Compra garantida com o Compre Fácil Seguro</h4>
          <span className='font-medium text-dark/30'>Receba o produto que está esperando ou devolvemos seu dinheiro</span>
        </Column>
      </Row>
      <Row className='pb-4'>
        <Column>
          <h4 className='font-medium text-dark'>Compra garantida do vendedor</h4>
          <span className='font-medium text-dark/30'>Sem garantia</span>
        </Column>
      </Row>
      <Row className='pb-6'>
        <a className='cursor-pointer text-info font-bold'>Saiba mais sobre garantia</a>
      </Row>
    </Column>
  )
}

export default Warranty
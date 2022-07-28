import { Column, Row } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import CartAmount from 'features/cart/cart-amount'
import React, { useState } from 'react'
import CartBoxFirstTab from './cart-box-tab-1'

export interface CartBoxProps {
  className?: string
}
const CartBox: React.FC<CartBoxProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState('tab1')
  return (
    <Column className={classNames('p-8 bg-light border-2 rounded', className)}>
      <Row className="pb-8 divid">
        <ul className="flex">
          <li
            className={
              activeTab === 'tab1'
                ? 'cursor-pointer text-dark font-bold divide-inherit border-x-2 border-t-2 rounded-md rounded-b-none py-1 px-8'
                : 'cursor-pointer text-info font-medium border-light border-x-2 border-t-2 rounded-md py-1 px-8'
            }
            onClick={() => {
              setActiveTab('tab1')
            }}
          >
            Carrinho (<CartAmount />)
          </li>
          <li
            className={
              activeTab === 'tab2'
                ? 'cursor-pointer text-dark font-bold divide-inherit border-x-2 border-t-2 rounded-md rounded-b-none py-1 px-8'
                : 'cursor-pointer text-info font-medium border-light border-x-2 border-t-2 rounded-md py-1 px-8'
            }
            onClick={() => {
              setActiveTab('tab2')
            }}
          >
            Salvo (0)
          </li>
        </ul>
      </Row>
      <Row>
        {activeTab === 'tab1' ? (
          <CartBoxFirstTab />
        ) : (
          <div>Nenhum item salvo</div>
        )}
      </Row>
    </Column>
  )
}

export default CartBox

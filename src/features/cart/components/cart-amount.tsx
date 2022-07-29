import useCartContext from 'features/cart/hooks/use-cart-context'

const CartAmount = () => {
  const { items } = useCartContext()

  const getCartAmount = () => {
    let amount = 0
    items.forEach((item) => (amount += item.amount))
    return amount
  }
  return <span>{getCartAmount()}</span>
}

export default CartAmount

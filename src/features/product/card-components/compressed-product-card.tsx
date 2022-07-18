import Column from 'components/toolkit/column'
import ImageComponent from 'components/toolkit/image'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import { ProductInstallmentType } from 'types/card-component-props'

export interface CompressedProductCardProps {
  className?: string
  productPrice?: number
  productInstallment?: ProductInstallmentType
  productImage?: { src?: string; alt?: string }
  productLink: string
}

const CompressedProductCard: React.FC<CompressedProductCardProps> = ({
  className,
  productPrice = 0,
  productInstallment = {
    quantity: 0,
    value: 0,
  },
  productImage = {
    src: '',
    alt: '',
  },
  productLink = '/',
}) => {
  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString()
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2)
    return { currency, cents }
  }
  const formatInstallment = ({ quantity, value }: ProductInstallmentType) =>
    `em ${quantity}x de ${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`

  const { cents, currency } = splitProductPrice(productPrice)
  const formattedInstallment = formatInstallment(productInstallment)
  const showingCurrency = 'R$'

  return (
    <Link href={productLink}>
      <Column
        className={classNames(
          'bg-white shadow border rounded-md overflow-hidden cursor-pointer hover:shadow-md group',
          className
        )}
      >
        <Column className="justify-center aspect-square overflow-hidden">
          <ImageComponent
            src={productImage.src}
            alt={productImage.alt}
            noSrcAlt="https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg"
          />
        </Column>
        <Column className="border-t flex-grow p-5 group-active:bg-gray-100">
          <Row>
            <Text textType="cardCurrency" className="mr-1">
              {showingCurrency}
            </Text>
            <Text textType="cardCurrency" className="mr-[2px]">
              {currency}
            </Text>
            {Number(cents) > 0 && <Text textType="cardCents">{cents}</Text>}
          </Row>
          {productInstallment.value > 0 && productInstallment.quantity > 0 && (
            <Text textType="cardInstallment">{formattedInstallment}</Text>
          )}
        </Column>
      </Column>
    </Link>
  )
}

export default CompressedProductCard

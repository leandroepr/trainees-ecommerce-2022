import Column from 'components/toolkit/column'
import ImageComponent from 'components/toolkit/image'
import Row from 'components/toolkit/row'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'

export interface ExpandedProductCardProps {
  className?: string
  productPrice?: number
  installment?: { quantity: number; value: number }
  image?: { src?: string; alt?: string }
  tags?: string[]
  productName?: string
  productLink: string
}

const ExpandedProductCard: React.FC<ExpandedProductCardProps> = ({
  className,
  productPrice = 0,
  installment = {
    quantity: 0,
    value: 0,
  },
  image = {
    src: '',
    alt: '',
  },
  tags = [],
  productName = '',
  productLink = '/',
}) => {
  const splitProductPrice = (integerPrice: number) => {
    const currency = Math.floor(integerPrice).toLocaleString()
    const cents = ('0' + Math.round((integerPrice % 1) * 100)).slice(-2)
    return { currency, cents }
  }
  const formatInstallment = ({ quantity, value }: typeof installment) =>
    `em ${quantity}x de ${value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`

  const splittedProductPrice = splitProductPrice(productPrice)
  const formattedInstallment = formatInstallment(installment)
  const showingCurrency = 'R$'

  return (
    <Link href={productLink}>
      <Column
        className={classNames(
          'bg-white shadow border rounded-md overflow-hidden cursor-pointer',
          className
        )}
      >
        <Column className="items-center justify-center">
          <ImageComponent
            src={image.src}
            alt={image.alt}
            noSrcAlt="https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg"
          />
        </Column>
        <Column className="border-t flex-grow p-5">
          <Row>
            <Text textType="cardCurrency" className="mr-1">
              {showingCurrency}
            </Text>
            <Text textType="cardCurrency" className="mr-[2px]">
              {splittedProductPrice.currency}
            </Text>
            {Number(splittedProductPrice.cents) > 0 && (
              <Text textType="cardCents">{splittedProductPrice.cents}</Text>
            )}
          </Row>
          {installment.value > 0 && installment.quantity > 0 && (
            <Text textType="expandedCardInstallment">
              {formattedInstallment}
            </Text>
          )}
          {tags.length > 0 && (
            <Row className="flex-wrap gap-1 max-h-[64px] overflow-hidden">
              {tags.map((tag) => (
                <span
                  className="w-fit px-1 py-[1px] bg-sky-100 rounded-sm text-xs text-sky-600 truncate 6"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </Row>
          )}
          <Text textType="productName" className="break-words line-clamp-2">
            {productName}
          </Text>
        </Column>
      </Column>
    </Link>
  )
}

export default ExpandedProductCard

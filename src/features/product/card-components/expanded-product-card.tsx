import Column from 'components/toolkit/column'
import ImageComponent from 'components/toolkit/image'
import Row from 'components/toolkit/row'
import Tag from 'components/toolkit/tag'
import { tagStyleType } from 'components/toolkit/tag/tag'
import Text from 'components/toolkit/text'
import { classNames } from 'helpers/class-names'
import Link from 'next/link'
import {
  ProductImageType,
  ProductInstallmentType,
} from 'types/card-component-props'

export interface ExpandedProductCardProps {
  className?: string
  productPrice?: number
  productInstallment?: ProductInstallmentType
  productImage?: ProductImageType
  productTags?: { style: tagStyleType; content: string }[]
  productName?: string
  productLink: string
}

const ExpandedProductCard: React.FC<ExpandedProductCardProps> = ({
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
  productTags: tags = [],
  productName = '',
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

  const splittedProductPrice = splitProductPrice(productPrice)
  const formattedInstallment = formatInstallment(productInstallment)
  const showingCurrency = 'R$'

  return (
    <Link href={productLink}>
      <Column
        className={classNames(
          'bg-white shadow border rounded-md cursor-pointer hover:shadow-md group',
          className
        )}
      >
        <Column className="justify-center aspect-square">
          <ImageComponent
            src={productImage.src}
            alt={productImage.alt}
            noSrcAlt="https://m.media-amazon.com/images/I/3157LdLqwVL._AC_SY395_.jpg"
          />
        </Column>
        <Column className="border-t flex-grow p-5 space-y-3 group-active:bg-gray-100">
          <Column>
            <Row>
              <Text textType="expandedCardCurrency" className="mr-1">
                {showingCurrency}
              </Text>
              <Text textType="expandedCardCurrency" className="mr-[2px]">
                {splittedProductPrice.currency}
              </Text>
              {Number(splittedProductPrice.cents) > 0 && (
                <Text textType="expandedCardCents">
                  {splittedProductPrice.cents}
                </Text>
              )}
            </Row>
            {productInstallment.value > 0 &&
              productInstallment.quantity > 0 && (
                <Text textType="expandedCardInstallment">
                  {formattedInstallment}
                </Text>
              )}
          </Column>
          {tags.length > 0 && (
            <Row className="flex-wrap gap-1 max-h-[64px] overflow-hidden">
              {tags.map((tag) => (
                <Tag style={tag.style} key={tag.content}>
                  {tag.content}
                </Tag>
              ))}
            </Row>
          )}
          <Text textType="productName" className="break-words line-clamp-3">
            {productName}
          </Text>
        </Column>
      </Column>
    </Link>
  )
}

export default ExpandedProductCard

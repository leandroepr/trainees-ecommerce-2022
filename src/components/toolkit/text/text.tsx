import { classNames } from 'helpers/class-names'

export interface TextProps {
  children?: React.ReactNode
  className?: string
  textType?: keyof typeof textTypeMap
}
const Text: React.FC<TextProps> = ({
  children,
  className,
  textType = 'noStyle',
}) => {
  return (
    <p className={classNames('relative', textTypeMap[textType], className)}>
      {children}
    </p>
  )
}

export default Text

const textTypeMap = {
  noStyle: '',
  normal: 'text-slate-800',
  cardCurrency: 'text-slate-800 text-2xl font-light',
  expandedCardCurrency: 'text-slate-800 text-2xl',
  cardCents: 'text-slate-800 leading-7 font-light',
  expandedCardCents: 'text-slate-800 leading-7',
  cardInstallment: 'text-slate-500 text-md',
  expandedCardInstallment: 'text-slate-800 text-sm',
  productName: 'text-gray-500 tracking-tight text-sm',
  categoryProductListName: 'text-zinc-700 text-2xl font-thin',
  categoryProductListLink: 'text-blue-500',
}

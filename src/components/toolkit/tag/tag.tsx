import { classNames } from 'helpers/class-names'

export interface TagProps {
  children: React.ReactNode
  className?: string
  style?: tagStyleType
}
const Tag: React.FC<TagProps> = ({ className, style = 'gray', ...props }) => (
  <span className={classNames(tagStyleMap[style], className)} {...props} />
)

export default Tag

export type tagStyleType = keyof typeof tagStyleMap
const tagStyleMap = {
  blue: 'w-fit px-2 py-[2px] rounded-sm text-sm truncate bg-sky-100 text-sky-600',
  gray: 'w-fit px-2 py-[2px] rounded-sm text-sm truncate bg-zinc-200 text-gray-500',
}

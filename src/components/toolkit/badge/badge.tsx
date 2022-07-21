import { classNames } from 'core/helpers/class-names'

export type BadgeVariant = 'info' | 'gray'
export interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: BadgeVariant
}
const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'gray',
  ...props
}) => (
  <span
    className={classNames(
      'w-fit px-2 py-[2px] rounded-sm text-sm truncate',
      tagStyleMap[variant],
      className
    )}
    {...props}
  />
)

export default Badge

const tagStyleMap: Record<BadgeVariant, string> = {
  info: 'bg-sky-100 text-sky-600',
  gray: 'bg-zinc-200 text-gray-500',
}

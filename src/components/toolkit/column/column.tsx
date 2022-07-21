import { classNames } from 'core/helpers/class-names'

export type ColumnProps = React.HTMLAttributes<HTMLDivElement>

const Column: React.FC<ColumnProps> = ({ className, ...props }) => (
  <div className={classNames('flex flex-col', className)} {...props} />
)

export default Column

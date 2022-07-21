import { classNames } from 'core/helpers/class-names'

export type RowProps = React.HTMLAttributes<HTMLDivElement>

const Grid: React.FC<RowProps> = ({ className, ...props }) => (
  <div className={classNames('grid grid-cols-3 gap-4', className)} {...props} />
)

export default Grid

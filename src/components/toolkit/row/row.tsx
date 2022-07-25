import { classNames } from 'core/helpers/class-names'

export type RowProps = React.HTMLAttributes<HTMLDivElement>
const Row: React.FC<RowProps> = ({ className, ...props }) => (
  <div className={classNames('flex flex-row', className)} {...props} />
)

export default Row

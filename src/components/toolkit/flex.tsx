import { classNames } from 'core/helpers/class-names'

export type FlexProps = React.HTMLAttributes<HTMLDivElement>
const Flex: React.FC<FlexProps> = ({ className, ...props }) => (
  <div className={classNames('flex', className)} {...props} />
)

export default Flex

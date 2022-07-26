import { Combobox } from '@headlessui/react'
import { classNames } from 'core/helpers/class-names'

const NotImplemented = () => {
  console.error('Not implemented yet.')
}
export interface SelectProps<T> {
  label?: string
  className?: string
  children?: React.ReactNode[]
  value?: T
  onChange?: (value: T) => void
}
const Select = <T,>({
  children,
  className,
  value,
  onChange = NotImplemented,
}: SelectProps<T>) => {
  return (
    <div className={classNames('w-full', className)}>
      <Combobox value={value} onChange={onChange}>
        <div className="relative mt-1">{children}</div>
      </Combobox>
    </div>
  )
}

export default Select

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
  label,
  value,
  onChange = NotImplemented,
}: SelectProps<T>) => {
  return (
    <div className={classNames('w-full relative group', className)}>
      <div className="absolute z-10 mt-[-10px] ml-3 text-dark/30 bg-light group-focus-within:text-info">{label}</div>
      <Combobox value={value} onChange={onChange}>
        <div className="relative mt-1">{children}</div>
      </Combobox>
    </div>
  )
}

export default Select

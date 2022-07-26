import { Combobox } from '@headlessui/react'

interface SelectLabelProps {
  className?: string
  children: string
}
const SelectLabel = ({ children, className }: SelectLabelProps) => {
  return <Combobox.Label className={className}>{children}</Combobox.Label>
}

export default SelectLabel

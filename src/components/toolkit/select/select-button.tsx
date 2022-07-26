import { Combobox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'core/helpers/class-names'

interface SelectButtonProps {
  className?: string
}
const SelectButton = ({ className }: SelectButtonProps) => {
  return (
    <Combobox.Button
      className={classNames(
        'absolute inset-y-0 right-0 flex items-center pr-2',
        className
      )}
    >
      <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </Combobox.Button>
  )
}

export default SelectButton

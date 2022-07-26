import { Combobox } from '@headlessui/react'
import { classNames } from 'core/helpers/class-names'
import { SetStateAction } from 'react'

interface SelectInputProps {
  className?: string
  onChange: (event: { target: { value: SetStateAction<string> } }) => void
}
const SelectInput = ({ onChange, className }: SelectInputProps) => {
  return (
    <Combobox.Input
      className={classNames(
        'w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0',
        className
      )}
      onChange={onChange}
    />
  )
}

export default SelectInput

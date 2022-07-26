import { Combobox } from '@headlessui/react'
import { classNames } from 'core/helpers/class-names'
import SelectOption from './select-option'

interface SelectOptionListProps {
  className?: string
  options: readonly string[]
  query?: string
}
const SelectOptionList = ({
  query,
  options,
  className,
}: SelectOptionListProps) => {
  return (
    <Combobox.Options
      className={classNames(
        'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
        className
      )}
    >
      {options.length === 0 && query !== '' ? (
        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
          Opção não encontrada.
        </div>
      ) : (
        options.map((option) => <SelectOption option={option} key={option} />)
      )}
    </Combobox.Options>
  )
}

export default SelectOptionList

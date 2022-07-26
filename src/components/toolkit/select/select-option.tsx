import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { classNames } from 'core/helpers/class-names'

interface SelectOptionProps {
  className?: string
  option: string
}
const SelectOption = ({ option, className }: SelectOptionProps) => {
  return (
    <Combobox.Option
      className={({ active }) =>
        classNames(
          `relative cursor-default select-none py-2 pl-10 pr-4 ${
            active ? 'bg-teal-600 text-white' : 'text-gray-900'
          }`,
          className
        )
      }
      value={option}
    >
      {({ selected, active }) => (
        <>
          <span
            className={`block truncate ${
              selected ? 'font-medium' : 'font-normal'
            }`}
          >
            {option}
          </span>
          {selected ? (
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                active ? 'text-white' : 'text-teal-600'
              }`}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Combobox.Option>
  )
}

export default SelectOption

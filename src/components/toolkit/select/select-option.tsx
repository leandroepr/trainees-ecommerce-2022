import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { classNames } from 'core/helpers/class-names'

export interface SelectOptionProps {
  className?: string
  value: any
  children?: React.ReactNode
}
const SelectOption = ({ value, children, className }: SelectOptionProps) => {
  return (
    <Combobox.Option
      className={({ active }) =>
        classNames(
          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-info text-light' : 'text-dark'
          }`,
          className
        )
      }
      value={value}
    >
      {({ selected, active }) => (
        <>
          <span
            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
              }`}
          >
            {children}
          </span>
          {selected ? (
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-light' : 'text-dark'
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

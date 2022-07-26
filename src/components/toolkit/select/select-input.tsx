import { Combobox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'core/helpers/class-names'

export interface SelectInputProps<T> {
  className?: string
  displayValue?: (obj: T) => string
  onChange: (query: string) => void
  placeholder?: string
}
const SelectInput = <T,>({
  displayValue,
  placeholder = 'Filtrar por...',
  onChange,
  className,
}: SelectInputProps<T>) => {
  return (
    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
      <Combobox.Input
        placeholder={placeholder}
        displayValue={displayValue}
        className={classNames(
          'w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0',
          className
        )}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <Combobox.Button
        className={classNames(
          'absolute inset-y-0 right-0 flex items-center pr-2',
          className
        )}
      >
        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>
    </div>
  )
}

export default SelectInput

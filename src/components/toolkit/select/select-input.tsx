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
    <div>
      <Combobox.Input
        placeholder={placeholder}
        displayValue={displayValue}
        className={classNames(
          'w-full group border py-2 pl-3 pr-10 text-sm leading-5 text-dark focus:text-info rounded border-dark/20 placeholder:text-dark/20',
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
        <SelectorIcon className="h-5 w-5 text-dark/20 " aria-hidden="true" />
      </Combobox.Button>
    </div>
  )
}

export default SelectInput

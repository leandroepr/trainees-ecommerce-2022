import { SearchIcon } from '@heroicons/react/outline'
import { classNames } from 'helpers/class-names'
import React from 'react'
import Button from '../button/button'

export interface SearchInputProps {
  value?: string
  placeholder?: string
  id?: string
  name?: string
  label?: string
  className?: string
  // pending?: boolean;
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
}
const SearchInput: React.FC<SearchInputProps> = ({
  value = '',
  onChange,
  onSearch,
  className,
  ...inputProps
}) => {
  const handleOnSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && internalValue !== '') {
      onSearch?.(internalValue)
    } else {
      return
    }
  }
  const handleOnClickToSearch = () => {
    if (internalValue !== '') {
      onSearch?.(internalValue)
    } else {
      return
    }
  }
  const [internalValue, setInternalValue] = React.useState(value)
  React.useEffect(() => {
    onChange?.(internalValue)
  }, [internalValue, onChange])

  return (
    <div
      className={classNames(
        'relative focus-within:text-sky-500 text-gray-400',
        className
      )}
    >
      <input
        type="search"
        value={internalValue}
        onChange={(event) => setInternalValue(event.target.value)}
        className={classNames(
          'h-10 shadow-sm block w-full sm:text-sm border-gray-300 rounded-md placeholder:text-gray-400 text-gray-700 pr-10 placeholder: pl-4 focus:outline-sky-500'
        )}
        onKeyUp={handleOnSearch}
        {...inputProps}
      />
      <Button
        contentButton={<SearchIcon className="w-4 h-4 " />}
        className={classNames(
          'absolute right-0 z-10 inset-y-0 flex items-center justify-center shrink-0 border-l my-2 px-2 active:opacity-75 hover:text-opacity-90 '
        )}
        onClick={handleOnClickToSearch}
      />
    </div>
  )
}

export default SearchInput

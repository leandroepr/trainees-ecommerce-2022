import { SearchIcon } from '@heroicons/react/outline'
import { classNames } from 'core/helpers/class-names'
import React from 'react'

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
  filter: string
}
const SearchInput: React.FC<SearchInputProps> = ({
  value = '',
  onChange,
  onSearch,
  className,
  filter,
  ...inputProps
}) => {
  const handleOnSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && internalValue !== '') {
      onSearch?.(
        internalValue
          .trim()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      )
    } else if (event.key === 'Enter' && internalValue == '' && filter !== '') {
      onSearch?.(
        internalValue
          .trim()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      )
    }
  }

  const handleOnClickToSearch = () => {
    if (internalValue !== '') {
      onSearch?.(
        internalValue
          .trim()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      )
    } else if (internalValue == '' && filter !== '') {
      onSearch?.(
        internalValue
          .trim()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      )
    }
  }
  const [internalValue, setInternalValue] = React.useState(value)
  React.useEffect(() => {
    onChange?.(internalValue)
  }, [internalValue, onChange])

  return (
    <div
      className={classNames(
        'focus-within:text-sky-500 relative text-gray-400',
        className
      )}
    >
      <input
        type="search"
        value={internalValue}
        onChange={(event) => setInternalValue(event.target.value)}
        className={classNames(
          'h-10 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder:text-gray-400 text-gray-700 pr-10 pl-4'
        )}
        onKeyUp={handleOnSearch}
        {...inputProps}
      />
      <button
        className="absolute right-0 z-10 inset-y-0 flex items-center justify-center shrink-0 border-l my-2 px-4 active:opacity-75 hover:text-opacity-90"
        onClick={handleOnClickToSearch}
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </div>
  )
}

export default SearchInput

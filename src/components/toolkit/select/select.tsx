import { Combobox } from '@headlessui/react'
import { classNames } from 'core/helpers/class-names'
import { useState } from 'react'
import Container from '../container'
import SelectButton from './select-button'
import SelectInput from './select-input'
import SelectLabel from './select-label'
import SelectOptionList from './select-option-list'

interface SelectProps {
  label?: string
  className?: string
  options: readonly string[]
}
const Select = ({ options, label, className }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Container className={classNames('w-full', className)}>
      <Combobox value={selectedOption} onChange={setSelectedOption}>
        {label && <SelectLabel>{label}</SelectLabel>}
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <SelectInput onChange={(event) => setQuery(event.target.value)} />
            <SelectButton />
          </div>
          <SelectOptionList query={query} options={filteredOptions} />
        </div>
      </Combobox>
    </Container>
  )
}

export default Select

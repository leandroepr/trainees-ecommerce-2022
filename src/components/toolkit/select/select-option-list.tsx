import { Combobox } from '@headlessui/react'
import { classNames } from 'core/helpers/class-names'

export interface SelectOptionListProps {
  className?: string
  children?: React.ReactNode[]
  nonIdealState?: string
}
const SelectOptionList = ({
  className,
  children,
  nonIdealState = 'Opção não encontrada.',
}: SelectOptionListProps) => {
  return (
    <Combobox.Options
      className={classNames(
        'z-30 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
        className
      )}
    >
      {children?.length === 0 ? (
        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
          {nonIdealState}
        </div>
      ) : (
        <>{children}</>
      )}
    </Combobox.Options>
  )
}

export default SelectOptionList

import { Popover, Transition } from '@headlessui/react'
import { Link } from 'components/toolkit'

interface DropdownItemProps {
  children: React.ReactNode
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return (
    <Popover className="relative">
      <Popover.Button>{children}</Popover.Button>
      <Transition
        enter="transition duration-125 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-40 pt-1">
          <div className="grid grid-rows-2 gap-y-4 bg-dark/70 rounded text-light py-6 px-4">
            <Link className="hover:text-sky-400" href="/customer">
              Cliente
            </Link>
            <Link className="hover:text-sky-400" href="/admin">
              Administrador
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default DropdownItem

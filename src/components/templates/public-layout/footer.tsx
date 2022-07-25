import { classNames } from 'core/helpers/class-names'

export interface FooterProps {
  className?: string
  children?: React.ReactNode
}
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="bg-slate-200 border-t">
      <div
        className={classNames(
          'container mx-auto flex flex-col',
          props.className
        )}
      >
        {props.children}
      </div>
    </footer>
  )
}

export default Footer

export interface CustomButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}
const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="bg-blue-500 text-white font-bold uppercase px-8 py-1 text-sm rounded-sm hover:bg-blue-600 active:opacity-75"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default CustomButton

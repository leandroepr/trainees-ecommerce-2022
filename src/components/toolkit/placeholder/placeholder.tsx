type PlaceholderProps = {
  width: string
  height: string
  text: string
}

const Placeholder: React.FC<PlaceholderProps> = ({ width, height, text }) => {
  return (
    <a>
      <img
        src={`https://via.placeholder.com/${width}x${height}?text=${text}+${width}x${height}`}
      />
    </a>
  )
}

export default Placeholder

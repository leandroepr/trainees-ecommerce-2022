import { Column, Text } from 'components/toolkit'

const ProductDescription: React.FC = () => {
  return (
    <div>
      <Column>
        <Text className="pb-4 font-bold text-xl" as="h3">
          Descrição
        </Text>
        <Text className="font-medium text-dark/60 w-full" as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Column>
    </div>
  )
}

export default ProductDescription

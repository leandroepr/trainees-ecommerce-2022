import { ChevronRightIcon } from '@heroicons/react/outline'
import { Row } from 'components/toolkit'

const ProductListByCategory = () => {
  return (
    <div>
      <Row className="items-center">
        <p>Roupas para você e toda familia</p>
        <a href="">
          <p className="text-blue-300 text-xs mx-4">Ver detalhes</p>
        </a>
      </Row>
      <Row className="items-center">
        <Row className="relative space-x-4 my-4 mr-6 items-center">
          <div className="flex w-64 h-96 bg-gray-300 shadow-xl"></div>
          <div className="flex w-64 h-96 bg-gray-300 shadow-xl"></div>
          <div className="flex w-64 h-96 bg-gray-300 shadow-xl"></div>
          <div className="flex w-64 h-96 bg-gray-300 shadow-xl"></div>
          <Row className="items-center">
            <button
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-4 px-4 rounded-full shadow-xl flex 
            absolute right-0"
            >
              <ChevronRightIcon className="w-6 h-6 " />
            </button>
          </Row>
        </Row>
      </Row>
    </div>
  )
}

export default ProductListByCategory

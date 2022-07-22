import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { PencilIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import VendorInfoBox from './vendor-info-box'

const ProductDetailsBox = () => {
  return (
    <>
      <div className="text-xs pb-2">Novo | 884 vendidos</div>
      <div className="flex flex-row">
        <div className="text-2xl font-extrabold max-w-xs pb-2 text-black">
          Camiseta Hering Super Cotton - Unissex
        </div>
        <div>
          <PencilIcon className="h-6 text-blue-500" />
        </div>
      </div>
      <div className=" bg-blue-500 w-fit rounded text-white px-2 py-1 text-sm">
        Enviando normalmente
      </div>
      <div className="space-y-2">
        <div className="max-w-xs">
          <div className="text-4xl text-bold pt-4 text-black">R$ 49,99</div>
          <div className="text-sm text-black">em 10x de R$ 5,65</div>
        </div>
        <div className="text-black">Estoque disponível</div>
      </div>

      <div className="pt-4">
        <div className="flex flex-row">
          <div>
            <CheckIcon className="h-5 text-green-500" />
          </div>
          <div className="text-sm space-y-1 pb-4">
            <div className="text-green-500 font-bold">Frete grátis</div>
            <div>Benefício Lorem Ipsum</div>
            <div className="pb-2">
              <Link href="/">
                <a className="text-blue-500 font-bold">Ver mais opções</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 pb-6">
        <div className="flex bg-blue-500 justify-center items-center h-10 rounded text-white container">
          <button>Comprar agora</button>
        </div>
        <div className="flex w-full justify-center items-center h-10 rounded text-blue-500 border-2 border-blue-500">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>

      <div className="flex flex-row">
        <div>
          <ShieldCheckIcon className="h-6 mt-2 pr-2" />
        </div>
        <div className="text-sm text-gray-600 pb-8">
          Compra garantida, receba o produto que está esperando ou devolvemos o
          dinheiro.
        </div>
      </div>
      <VendorInfoBox />
    </>
  )
}

export default ProductDetailsBox

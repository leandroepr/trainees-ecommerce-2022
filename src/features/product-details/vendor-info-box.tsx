import {
  ChatAltIcon,
  ClockIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'

const VendorInfoBox = () => {
  return (
    <div className="pb-14">
      <div className="font-bold pb-4 text-black ">
        Informações sobre o vendedor
      </div>
      <div className="flex flex-row">
        <div>
          <LocationMarkerIcon className="mt-[6px] pr-1 h-6" />
        </div>
        <div className="flex flex-col">
          <div className="text-sm">Localização</div>
          <div className="text-xs text-slate-700 font-light pb-6">
            São Paulo, São Paulo
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2 pb-4">
        <div className="bg-red-100 w-16 h-2" />
        <div className="bg-orange-100 w-16 h-2" />
        <div className="bg-yellow-100 w-16 h-2" />
        <div className="bg-green-100 w-16 h-2" />
        <div className="bg-green-500 w-16 h-3" />
      </div>
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col max-w-xs text-xs items-center">
          <div className=" text-lg text-black font-semibold">561</div>
          <div>vendas nos</div>
          <div>ultimos 4 meses</div>
        </div>
        <div className="border-x-4 border-0 px-4">
          <div className="flex flex-col max-w-xs text-xs items-center">
            <div>
              <ChatAltIcon className="h-6 text-black" />
            </div>
            <div>Presta um bom</div>
            <div>atendimento</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col max-w-xs text-xs items-center">
            <div>
              <ClockIcon className="h-6 text-black" />
            </div>
            <div>Entrega os</div>
            <div>produtos dentro</div>
            <div>do prazo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorInfoBox

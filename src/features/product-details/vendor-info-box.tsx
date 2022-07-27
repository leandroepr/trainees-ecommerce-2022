import {
  ChatAltIcon,
  ClockIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'

const VendorInfoBox = () => {
  return (
    <section className="pt-8 border-t-2">
      <Text as="h2" className="font-bold pb-3 text-black ">
        Informações sobre o vendedor
      </Text>
      <Row>
        <LocationMarkerIcon className="pt-1 h-8 pr-1" />

        <Column>
          <Text as="span" className="text-sm">
            Localização
          </Text>
          <Text as="span" className="text-xs text-slate-700 font-light pb-6">
            São Paulo, São Paulo
          </Text>
        </Column>
      </Row>
      <Row className="items-center space-x-2 pb-4">
        <div className="bg-red-100 w-16 h-2" />
        <div className="bg-orange-100 w-16 h-2" />
        <div className="bg-yellow-100 w-16 h-2" />
        <div className="bg-green-100 w-16 h-2" />
        <div className="bg-green-500 w-16 h-3" />
      </Row>
      <Row className="space-x-6 justify-center">
        <Column className="text-xs items-center">
          <Text as="span" className=" text-lg text-black font-semibold">
            561
          </Text>
          <Text as="span">vendas nos</Text>
          <Text as="span">ultimos 4 meses</Text>
        </Column>

        <Column className=" text-xs items-center  ">
          <ChatAltIcon className="h-6 text-black" />
          <Text as="span">Presta um bom</Text>
          <Text as="span">atendimento</Text>
        </Column>

        <Column className="text-xs items-center">
          <ClockIcon className="h-6 text-black" />
          <Text as="span" className="">
            Entrega os
          </Text>
          <Text as="span" className="">
            produtos dentro
          </Text>
          <Text as="span" className="">
            do prazo
          </Text>
        </Column>
      </Row>
    </section>
  )
}

export default VendorInfoBox

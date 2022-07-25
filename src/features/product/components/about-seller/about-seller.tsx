import {
  ChatAlt2Icon,
  ClockIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'
import { Column, Row } from 'components/toolkit'
import React from 'react'

const AboutSeller: React.FC = () => {
  return (
    <Column className="max-w-md">
      <Row className="py-4">
        <h3 className="font-bold">Informações sobre o vendedor</h3>
      </Row>
      <Row className="pb-8 items-center">
        <Column className="pr-2">
          <LocationMarkerIcon className="w-8 h-8" />
        </Column>
        <Column>
          <h4 className="font-bold">Localização</h4>
          <span className="font-semibold text-dark/50">
            São Paulo, São Paulo
          </span>
        </Column>
      </Row>
      <Row className="pb-8 justify-center">
        <ol className="list-none grid grid-cols-5 gap-1">
          <li className="w-16 sm:w-20 h-2 bg-error/20" />
          <li className="w-16 sm:w-20 h-2 bg-warning/20" />
          <li className="w-16 sm:w-20 h-2 bg-primary/20" />
          <li className="w-16 sm:w-20 h-2 bg-success/20" />
          <li className="w-16 sm:w-20 h-2 bg-success" />
        </ol>
      </Row>
      <Row className="pb-6">
        <Column className="p-2 items-center justify-center text-center border-r-2 border-dark/10">
          <h1 className="font-bold text-xl">561</h1>
          <span className="font-semibold text-sm">
            vendas nos últimos 4 meses
          </span>
        </Column>
        <Column className="p-2 items-center justify-center text-center border-r-2 border-dark/10">
          <ChatAlt2Icon className="w-8 h-8" />
          <span className="font-semibold text-sm">
            Presta um bom atendimento
          </span>
        </Column>
        <Column className="p-2 items-center justify-center text-center">
          <ClockIcon className="w-8 h-8" />
          <span className="font-semibold text-sm">
            Entrega os produtos dentro do prazo
          </span>
        </Column>
      </Row>
      <Row>
        <a className="cursor-pointer text-info font-bold">
          Ver mais dados do vendedor
        </a>
      </Row>
    </Column>
  )
}

export default AboutSeller

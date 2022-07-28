import { Button, Column, Container, Row, Text } from 'components/toolkit'
import TextInput from 'components/toolkit/text-input'
import { Product } from 'features/product/types/product'
import { NextPage } from 'next'
import React from 'react'

const PlaygroundRoute: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ log: 'submit', product, event })
  }
  const [product, setProduct] = React.useState<Partial<Product>>()
  const setValue = (field: string) => (value: string) => {
    const hasChanged = product?.[field] !== value
    if (hasChanged) {
      setProduct({ ...product, [field]: value })
    }
  }
  const getValue = (field: string) => product?.[field] || ''
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Container className="py-4">
        <h1>Playground</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Row>
            <Column className="w-1/3">
              <Text className="text-md font-bold">Título da sessão</Text>
              <Text className="text-dark/60 text-xs ">
                Proident id reprehenderit excepteur reprehenderit adipisicing
                aliquip.
              </Text>
            </Column>
            <Column className="w-2/3 space-y-4">
              <TextInput
                label="Nome"
                value={getValue('name')}
                onChange={setValue('name')}
                placeholder="Insira o nome do Cliente"
              />
              <TextInput
                label="Imagem"
                value={getValue('imageUrl')}
                placeholder="Insira a URL da imagem"
                onChange={setValue('imageUrl')}
                // required
              />
            </Column>
          </Row>
          <Row className="items-center justify-end space-x-4">
            <Button type="submit" variant="light" className="max-w-fit">
              Cancelar
            </Button>
            <Button type="submit" variant="info" className="max-w-fit">
              Salvar
            </Button>
          </Row>
        </form>
      </Container>
    </div>
  )
}

export default PlaygroundRoute

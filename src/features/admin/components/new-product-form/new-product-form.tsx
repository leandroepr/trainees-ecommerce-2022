import { Button, Column, Row, Text } from 'components/toolkit'
import { Select } from 'components/toolkit/select'
import SelectInput from 'components/toolkit/select/select-input'
import SelectOption from 'components/toolkit/select/select-option'
import SelectOptionList from 'components/toolkit/select/select-option-list'
import TextInput from 'components/toolkit/text-input'

const NewProductForm = () => {
  return (
    <Column className="w-full">
      <Text
        as="h2"
        className="indent-8 text-2xl py-6 border-b-2 text-dark/70 font-light">
        Cadastro de Produtos
      </Text>
      <Column className="py-10 px-8">
        <Column className="pb-10 space-y-4">
          <TextInput required label='Título' />
          <TextInput label='URL da imagem' />
          <TextInput label='Condição do produto' />

          <Select label='Selecione a categoria'>
            <SelectInput onChange={(value) => value} className="h-11" />
            <SelectOptionList className="mt-[-5px]">
              <SelectOption value="Roupas">Roupas</SelectOption>
              <SelectOption value="Sapatos">Sapatos</SelectOption>
            </SelectOptionList>
          </Select>

          <TextInput label='Categoria, subcategoria e tags' />
          <TextInput label='Preço do produto' />
          <TextInput label='Condições de pagamento' />
          <TextInput label='Quantidade de produtos vendidos' />
          <TextInput label='Quantidade em estoque' />
        </Column>

        <Row className="flex justify-end space-x-6 pt-6 border-t-2 mt-">
          <Button variant="light" size='sm'>
            Cancelar
          </Button>
          <Button size='sm'>Salvar</Button>
        </Row>
      </Column>
    </Column>
  )
}

export default NewProductForm

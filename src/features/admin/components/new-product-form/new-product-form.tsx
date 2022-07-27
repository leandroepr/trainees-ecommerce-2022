import { Button, Column, Row, Text } from 'components/toolkit'
import { Select } from 'components/toolkit/select'
import SelectInput from 'components/toolkit/select/select-input'
import SelectOption from 'components/toolkit/select/select-option'
import SelectOptionList from 'components/toolkit/select/select-option-list'
import TextInput from 'components/toolkit/text-input'

const NewProductForm = () => {
  return (
    <Column className="bg-light max-w-4xl">
      <Text
        as="h2"
        className="indent-8 text-2xl pt-8 pb-8 border-b-2 text-dark/70 font-light"
      >
        Cadastro de Produtos
      </Text>
      <Column className="py-10 px-8 space-y-8">
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Título{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>

        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            URL da imagem{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Condição do produto{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Selecione a categoria{' '}
          </Text>

          <Select className="border border-dark/20 rounded">
            <SelectInput onChange={(value) => value} className="h-10" />
            <SelectOptionList className="border border-dark/20 rounded">
              <SelectOption value="Roupas">Roupas</SelectOption>
              <SelectOption value="Sapatos">Sapatos</SelectOption>
            </SelectOptionList>
          </Select>
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Categoria, subcategoria e tags{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Preço do produto{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Condições de pagamento{' '}
          </Text>
          <TextInput className="py-5 border border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Quantidade de produtos vendidos{' '}
          </Text>
          <TextInput className="py-5 border-dark/20" />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Quantidade em estoque{' '}
          </Text>
          <TextInput className="py-5 border-dark/20" />
        </div>

        <Row className="flex justify-end space-x-6 pt-6 border-t-2">
          <Button variant="light" className="w-28 h-10">
            Cancelar
          </Button>
          <Button className="w-28 h-10">Salvar</Button>
        </Row>
      </Column>
    </Column>
  )
}

export default NewProductForm

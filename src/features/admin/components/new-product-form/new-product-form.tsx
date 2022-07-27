import { Combobox } from '@headlessui/react'
import { Button, Column, Row, Text } from 'components/toolkit'
import SelectInput from 'components/toolkit/select/select-input'
import SelectOption from 'components/toolkit/select/select-option'
import TextInput from 'components/toolkit/text-input'
import React from 'react'

export interface NewProductFormProps {}
const NewProductForm: React.FC<NewProductFormProps> = () => {
  return (
    <Column className="bg-light max-w-4xl ">
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
          <TextInput className="pt-8 " />
        </div>

        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            URL da imagem{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Condição do produto{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Selecione a categoria{' '}
          </Text>

          <Combobox>
            <SelectInput
              placeholder=""
              className="h-11 border-2 border-dark"
              onChange={() => null}
            >
              <SelectOption value="teste">Teste</SelectOption>
            </SelectInput>
          </Combobox>
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Categoria, subcategoria e tags{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Preço do produto{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Condições de pagamento{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Quantidade de produtos vendidos{' '}
          </Text>
          <TextInput className="pt-8 " />
        </div>
        <div className="relative">
          <Text className="absolute z-20 mt-[-10px] ml-4 px-[2px] bg-light text-dark/60 font-light">
            Quantidade em estoque{' '}
          </Text>
          <TextInput className="pt-8" />
        </div>

        <Row className="flex justify-end space-x-6 pt-6 border-t-2">
          <Button variant="light" className="w-28 h-9">
            Cancelar
          </Button>
          <Button className="w-28 h-9">Salvar</Button>
        </Row>
      </Column>
    </Column>
  )
}

export default NewProductForm

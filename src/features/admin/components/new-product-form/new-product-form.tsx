import { Button, Column, Link, Row, Spinner, Text } from 'components/toolkit'
import { Select } from 'components/toolkit/select'
import SelectInput from 'components/toolkit/select/select-input'
import SelectOption from 'components/toolkit/select/select-option'
import SelectOptionList from 'components/toolkit/select/select-option-list'
import TextInput from 'components/toolkit/text-input'
import { classNames } from 'core/helpers/class-names'
import { UsePostProduct } from 'features/admin/hooks/use-post-product'
import { useGetAllCategories } from 'features/category/hooks/use-get-all-categories'
import { Product } from 'features/product/types/product'
import React from 'react'

interface NewProductFormProps {
  handleNewProduct: (product: Product) => void
}

const NewProductForm: React.FC<NewProductFormProps> = ({
  handleNewProduct,
}) => {
  const { data: categories, isLoading } = useGetAllCategories()
  const [product, setProduct] = React.useState({} as Product)
  const [selectValue, setSelectValue] = React.useState('Selecione a Categoria')
  const { mutate: saveProduct } = UsePostProduct()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    product.id = product.name
    saveProduct(product)
  }

  const handleSelectOnChange = (value: string) => {
    setProduct({
      ...product,
      ['categories']: value,
    })
    setSelectValue(value)
    handleNewProduct({ ...product, ['categories']: value })
  }

  const handleOnChange = (value: string, name: string) => {
    setProduct({
      ...product,
      [name]: value,
    })
    handleNewProduct({ ...product, [name]: value })
  }

  return (
    <Column className="w-full">
      {isLoading && (
        <Column className={classNames('items-center')}>
          <Spinner color="black" size={100} />
          Carregando...
        </Column>
      )}
      <Text
        as="h2"
        className="indent-8 text-2xl py-6 border-b-2 text-dark/70 font-light"
      >
        Cadastro de Produtos
      </Text>

      <form onSubmit={handleSubmit}>
        <Column className="py-10 px-8 space-y-3">
          <Column className="pb-10 space-y-5">
            <TextInput
              required
              label="Título"
              id="name"
              name="name"
              placeholder="Nome do produto"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="URL da imagem"
              id="imageUrl"
              name="imageUrl"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="Condição do produto"
              id="condition"
              name="condition"
              placeholder="Novo, Usado..."
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />

            <Select
              label="Selecione a categoria"
              value={selectValue}
              onChange={(value) => handleSelectOnChange(value)}
            >
              <SelectInput
                onChange={(value) => handleSelectOnChange(value)}
                className="h-11"
              />
              <SelectOptionList className="border border-dark/20 rounded">
                {categories?.map((category) => (
                  <SelectOption key={category.id} value={category.name}>
                    {category.name}
                  </SelectOption>
                ))}
              </SelectOptionList>
            </Select>

            <TextInput
              label="Categoria, subcategoria e tags"
              id="categories"
              name="categories"
              placeholder="Feminino, Masculino, Infantil, Esportivo..."
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="Preço do produto"
              id="price"
              name="price"
              placeholder="R$ 49,99"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="Condições de pagamento"
              id="installmentsInfo"
              name="installmentsInfo"
              placeholder="em 10x de R$ 4,99 sem juros"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="Quantidade de produtos vendidos"
              id="soldAmount"
              name="soldAmount"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
            <TextInput
              label="Quantidade em estoque"
              id="stockAmount"
              name="stockAmount"
              onChange={(value, name) => {
                handleOnChange(value, name)
              }}
            />
          </Column>

          <Row className="flex justify-end space-x-6 pt-6 border-t-2">
            <Link href={'/'}>
              <Button variant="light" size="sm">
                Cancelar
              </Button>
            </Link>
            <Button size="sm" type="submit">
              Salvar
            </Button>
          </Row>
        </Column>
      </form>
    </Column>
  )
}

export default NewProductForm

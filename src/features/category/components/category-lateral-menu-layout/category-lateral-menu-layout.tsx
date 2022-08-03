import { Column, Row, Text } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import StockNumber from './stock-number'

export interface CategoryLateralMenuLayoutProps {
  className?: string
}

const CategoryLateralMenuLayout: React.FC<CategoryLateralMenuLayoutProps> = ({
  className,
}) => {
  return (
    <div className={classNames('text-gray-600 min-w-fit pr-5', className)}>
      <Column className="space-y-4 pb-8">
        <Text as="h2">Calçados, Roupas e Bolsas</Text>

        <Column>
          <Text className="font-bold text-xl pb-1 text-gray-800">Todos</Text>
          <Text>1.472.478 resultados</Text>
        </Column>
      </Column>

      <Column className="space-y-6">
        <Column>
          <Text className="font-bold text-lg pb-2 text-gray-800">Gênero</Text>
          <div className="text-sm space-y-2">
            <Row className="space-x-1">
              <Text className="font-medium">Feminino</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Masculino</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Sem genêro</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Meninas</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Meninos</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Bebês</Text>
              <StockNumber />
            </Row>
          </div>
        </Column>

        <Column>
          <Text className="font-bold text-lg pb-2 text-gray-800">
            Categorias
          </Text>
          <div className="text-sm space-y-2">
            <Row className="space-x-1">
              <Text className="font-medium">Botas</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Sapatos</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Sandalhas</Text>
              <StockNumber />
            </Row>

            <Row className="space-x-1">
              <Text className="font-medium">Sapatênis</Text>
              <StockNumber />
            </Row>
          </div>
        </Column>

        <Column>
          <div className="font-bold text-lg pb-2 text-gray-800">Pagamento</div>
          <div className="text-sm space-y-2">
            <Row className="space-x-1">
              <Text className="font-medium">Sem juros</Text>
              <StockNumber />
            </Row>
            <Row className="space-x-1">
              <Text className="font-medium">Com juros</Text>
              <StockNumber />
            </Row>
          </div>
        </Column>
      </Column>
    </div>
  )
}

export default CategoryLateralMenuLayout

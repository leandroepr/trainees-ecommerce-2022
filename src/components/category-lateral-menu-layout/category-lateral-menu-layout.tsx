import Column from 'components/toolkit/column/column'
import { classNames } from 'helpers/class-names'
import StockNumber from './stock-number'

export interface CategoryLateralMenuLayoutProps {
  className?: string
}

const CategoryLateralMenuLayout: React.FC<CategoryLateralMenuLayoutProps> = ({
  className,
}) => {
  return (
    <div className={classNames('text-gray-600 pl-2', className)}>
      <Column className="space-y-4 pb-8">
        <div>Calçados, Roupas e Bolsas</div>

        <section>
          <div className="font-bold text-xl pb-1 text-gray-800">Todos</div>
          <div>1.472.478 resultados</div>
        </section>
      </Column>

      <Column className="space-y-6">
        <section>
          <div className="font-bold text-lg pb-1 text-gray-800">Gênero</div>
          <div className="text-sm space-y-2">
            <div>
              Feminino <StockNumber />
            </div>
            <div>
              Masculino <StockNumber />
            </div>
            <div>
              Sem gênero <StockNumber />
            </div>
            <div>
              Meninas <StockNumber />
            </div>
            <div>
              Meninos <StockNumber />
            </div>
            <div>
              Bebês <span>(1001)</span>
            </div>
          </div>
        </section>

        <section>
          <div className="font-bold text-lg pb-1 text-gray-800">Categorias</div>
          <div className="text-sm space-y-2">
            <div>
              Botas <StockNumber />
            </div>
            <div>
              Sapatos <StockNumber />
            </div>
            <div>
              Sandalhas <StockNumber />
            </div>
            <div>
              Sapatênis <StockNumber />
            </div>
          </div>
        </section>

        <section>
          <div className="font-bold text-lg pb-1 text-gray-800">Pagamento</div>
          <div className="text-sm space-y-2">
            <div>
              Sem juros <StockNumber />
            </div>
            <div className="pb-2">
              Com juros <StockNumber />
            </div>
          </div>
        </section>
      </Column>
    </div>
  )
}

export default CategoryLateralMenuLayout
import { useGetAllProducts } from "api-hook/product/use-get-all-products";
import { Row } from "components/toolkit";
import Grid from "components/toolkit/grid/grid";
import { ProductCard } from "features/product/product-card";
import { classNames } from "helpers/class-names";
import React from "react";

const ProductsList: React.FC = () => {
  const { isLoading, data: products } = useGetAllProducts()

  return (
    <Row className={classNames('max-w-screen-lg')}>
      {isLoading && <div>Carregando...</div>}
      <Grid
        className={classNames(
          'grid gap-3 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 overflow-hidden'
        )}
      >
        {products?.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            variant="detailed"
          />
        ))}
      </Grid>
    </Row>
  )
};

export default ProductsList;

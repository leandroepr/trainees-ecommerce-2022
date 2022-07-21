import { useGetAllProducts } from "api-hook/product/use-get-all-products";
import { Row } from "components/toolkit";
import Grid from "components/toolkit/grid/grid";
import { ProductCard } from "features/product";
import { classNames } from "helpers/class-names";
import React from "react";

const ProductsList: React.FC = () => {
  const { data: products } = useGetAllProducts()

  return (
    <Row className={classNames('max-w-screen-lg')}>
      <Grid
        className={classNames(
          'grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
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

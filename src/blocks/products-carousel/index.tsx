import { ProductsCarousel as VibesProductsCarousel } from '@current-vibe/primitives/products-carousel';
import React from 'react';

import FieldWrapper from '../../components/field-wrapper';
import getProductsList from '../../service/queries/get-products-list';
import { IBlockProductsCarouselData, IBlockProps, IBox } from '../../types';

export interface IProductsCarouselProps extends IBlockProps<IBox & IBlockProductsCarouselData> {}

const ProductsCarousel: React.FC<IProductsCarouselProps> = async (props) => {
  const {
    block: {
      data: { productIds },
    },
  } = props;

  const products = await getProductsList(productIds);

  return (
    <FieldWrapper blockProps={props} fieldId="products">
      <VibesProductsCarousel hideOverflow={false} products={products} />
    </FieldWrapper>
  );
};

export default ProductsCarousel;

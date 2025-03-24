import { ProductsCarousel as VibesProductsCarousel } from '@current-vibe/primitives/products-carousel';
import React from 'react';

import FieldWrapper from '../../components/field-wrapper';
import getProductsList from '../../service/queries/get-products-list';
import { IBlockProductsCarouselData, IBlockProps, IBox } from '../../types';

export interface IProductsCarouselProps extends IBlockProps<IBox & IBlockProductsCarouselData> {}

const ProductsCarousel: React.FC<IProductsCarouselProps> = async (props) => {
  const {
    block: {
      data: { productIds, showScrollbar, showButtons },
    },
  } = props;

  const products = await getProductsList(productIds);

  return (
    <FieldWrapper blockProps={props} fallbackDiv={true} fieldId="products">
      <VibesProductsCarousel
        hideOverflow={false}
        products={products}
        showButtons={showButtons}
        showScrollbar={showScrollbar}
      />
    </FieldWrapper>
  );
};

export default ProductsCarousel;

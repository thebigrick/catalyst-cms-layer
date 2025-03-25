import Product from '@bigcommerce/catalyst-core/app/[locale]/(default)/product/[slug]/page';
import { PluginComponentWrapper } from '@thebigrick/catalyst-pluginizr';
import { draftMode } from 'next/headers';
import React from 'react';

import getAdapterCodeAndCategory from '../service/entity-router/get-adapter-code-and-category';
import getAdapterCodeAndProduct from '../service/entity-router/get-adapter-code-and-product';
import { ICmsContext } from '../types';

import RootEntityRender from './root-entity-render';

const ProductWrapper: PluginComponentWrapper<typeof Product> = async ({
  WrappedComponent,
  ...props
}) => {
  const { locale, slug } = await props.params;
  const productId = Number(slug);
  const isPreview = (await draftMode()).isEnabled;

  const product = await getAdapterCodeAndProduct(productId, {
    locale,
    isPreview,
  });

  if (!product) {
    return <WrappedComponent {...props} />;
  }

  const context: ICmsContext = {
    adapterCode: product.adapterCode,
    locale,
    isPreview,
    rootEntityId: product.product.id,
  };

  return (
    <>
      <RootEntityRender
        adapterCode={product.adapterCode}
        blocks={product.product.data.header}
        context={context}
      />
      <WrappedComponent {...props} />
    </>
  );
};

export default ProductWrapper;

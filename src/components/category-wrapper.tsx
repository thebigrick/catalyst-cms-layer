import Category from '@bigcommerce/catalyst-core/app/[locale]/(default)/(faceted)/category/[slug]/page';
import { PluginComponentWrapper } from '@thebigrick/catalyst-pluginizr';
import { draftMode } from 'next/headers';
import React from 'react';

import getAdapterCodeAndCategory from '../service/entity-router/get-adapter-code-and-category';
import { ICmsContext } from '../types';

import RootEntityRender from './root-entity-render';

const CategoryWrapper: PluginComponentWrapper<typeof Category> = async ({
  WrappedComponent,
  ...props
}) => {
  const { locale, slug } = await props.params;
  const categoryId = Number(slug);
  const isPreview = (await draftMode()).isEnabled;

  const category = await getAdapterCodeAndCategory(categoryId, {
    locale,
    isPreview,
  });

  if (!category) {
    return <WrappedComponent {...props} />;
  }

  const context: ICmsContext = {
    adapterCode: category.adapterCode,
    locale,
    isPreview,
    rootEntityId: category.category.id,
  };

  return (
    <>
      <RootEntityRender
        adapterCode={category.adapterCode}
        blocks={category.category.data.header}
        context={context}
      />
      <WrappedComponent {...props} />
    </>
  );
};

export default CategoryWrapper;

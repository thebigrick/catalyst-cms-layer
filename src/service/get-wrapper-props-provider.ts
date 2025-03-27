import { cache } from 'react';

import { IBlock, ICmsContext } from '../types';

import getComponentsAdapter from './get-components-adapter';

const getWrapperPropsProvider = cache(
  (block: IBlock, context: ICmsContext, fieldId: string): Record<string, any> => {
    const { adapterCode } = context;

    const adapter = getComponentsAdapter(adapterCode);

    if (!adapter.fieldWrapperPropsProvider) {
      return {};
    }

    return adapter.fieldWrapperPropsProvider(block, fieldId, context);
  },
);

export default getWrapperPropsProvider;
